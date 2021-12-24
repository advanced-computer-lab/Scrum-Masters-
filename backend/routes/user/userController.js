const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../../Models/Flight");
const Reservation = require("../../Models/Reservation");
const Ticket = require("../../Models/Ticket");
const User = require("../../Models/User");
var airports = require("airport-codes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const stripe= require("stripe")('sk_test_51K6M8qJJwEGtsc7J7C3w0qhtQfyAWcCC1I1NtcnOzoZ8dNC3JZJJXsumPXAMib64wYRAqPzvyRiVYGF5RPnGnSm600KZNScrI5');
const nodemailer=require("nodemailer");

router.get("/search/flights", async (req, res) => {
  try {
    const from = await Flight.distinct("departureAirport");
    //const from = airports.find().get('iata')
    const to = await Flight.distinct("arrivalAirport");
    console.log("from", from);
    console.log("to", to);
    const output = {
      from: from,
      to: to,
    };
    res.json(output);
  } catch (error) {
    res.status(404).json({ message: "invalid search" });
  }
});

router.post("/search", async (req, res) => {
  const criteria = req.body;
  console.log("criteria", criteria); //theerasfadfad
  /* {
    noOfChildren: val, 
    noOfAdults: val,
    departureAirpot:val, 
    arrivalAirport:val,  cai  dxb
    departureDate: val,
    arrivalDate: val, of return flight
    cabin: val
  }*/
  // passing all the required fields
  if (
    !req.body.departureAirport ||
    !req.body.arrivalAirport ||
    !req.body.departureDate ||
    !req.body.arrivalDate ||
    !req.body.cabin
  ) {
    res.json({ message: "please choose all the fields" });
    return;
  }
  // checking at least one passenger
  if (!criteria.noOfChildren) {
    criteria.noOfChildren = 0;
  }
  if (!criteria.noOfAdults) {
    criteria.noOfAdults = 0;
  }

  if (criteria.noOfAdults + criteria.noOfChildren === 0) {
    res.json({ message: "please choose at least one passenger" });
    return;
  }

  // getting return and arrival flights
  try {
    var query1 = await Flight.find({
      departureAirport: criteria.departureAirport,
      arrivalAirport: criteria.arrivalAirport,
      departureDate: criteria.departureDate,
    });
    var query2 = await Flight.find({
      departureAirport: criteria.arrivalAirport,
      arrivalAirport: criteria.departureAirport,
      arrivalDate: criteria.arrivalDate,
    });

    // from and to are not the same
    if (criteria.departureAirport === criteria.arrivalAirport) {
      res.json({
        message: "You can not specify the from and to with the same values",
      });
      return;
    }
     //pastDates
    //  if (new Date(criteria.arrivalDate) <=  new Date() || new Date(criteria.departureDate)<=new Date() ) {
    //   res.json({
    //     message: 'Please choose to search for future flights!!',
    //   });
    //   return;
    // }
    // overlapping dates
    if (new Date(criteria.arrivalDate) < new Date(criteria.departureDate)) {
      res.json({
        message: "cannot have an arrival date before the departure date",
      });
      return;
    }

    // no round trips

    // console.log("query before filtering", query);
    if (criteria.cabin === "economy") {
      query1 = query1.filter(
        (flight) =>
          flight.economy.availableSeats >=
          criteria.noOfChildren + criteria.noOfAdults
      );
      query2 = query2.filter(
        (flight) =>
          flight.economy.availableSeats >=
          criteria.noOfChildren + criteria.noOfAdults
      );
    }
    if (criteria.cabin === "business") {
      //console.log("ehna true");
      query1 = query1.filter(
        (flight) =>
          flight.business.availableSeats >=
          criteria.noOfChildren + criteria.noOfAdults
      );
      query2 = query2.filter(
        (flight) =>
          flight.business.availableSeats >=
          criteria.noOfChildren + criteria.noOfAdults
      );
    }
    if (criteria.cabin === "first") {
      //console.log("ehna true");
      query1 = query1.filter(
        (flight) =>
          flight.firstClass.availableSeats >=
          criteria.noOfChildren + criteria.noOfAdults
      );
      query2 = query2.filter(
        (flight) =>
          flight.firstClass.availableSeats >=
          criteria.noOfChildren + criteria.noOfAdults
      );
    }
    if (query1.length === 0 || query2.length === 0) {
      res.json({
        message:
          "We are sorry, there are no round trips available for your criteria",
      });
      return;
    }

    var output = [];
    output.push({ flights: query1, details: criteria });
    output.push({ flights: query2, details: criteria });
    console.log(output);
    res.json(output);
    /*
    {
      [flights] , cabin:val
    }
    */
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

/** req 
 * { 
 * details: {
 *  
 *  noOfAdults: 3,
    noOfChildren: 0, 
    cabin: 'economy'
  }
 * }
  departinFlight:{
    flight details
  },
  returnFlight: {
    flight details
  },
  totalPrice: val
}
*/
//route for creating reservation
router.post("/create/reservation/:userId", async (req, res) => {
  const reservation = new Reservation({
    userId: req.params.userId,
    cabinClass: req.body.details.cabin,
    departingFlightId: req.body.departingFlightId,
    returnFlightId: req.body.returnFlightId,
    totalPrice: req.body.totalPrice,
  });

  try {
    const savedReservation = await reservation.save();

    var totalSeats =
      req.body.details.noOfAdults + req.body.details.noOfChildren;
    // decreasing seats of the flight
    if (req.body.details.cabin === "economy") {
      await Flight.findByIdAndUpdate(req.body.departingFlightId, {
        $inc: { "economy.availableSeats": -totalSeats },
      });
      await Flight.findByIdAndUpdate(req.body.returnFlightId, {
        $inc: { "economy.availableSeats": -totalSeats },
      });
    }
    if (req.body.details.cabin === "business") {
      await Flight.findByIdAndUpdate(req.body.departingFlightId, {
        $inc: { "business.availableSeats": -totalSeats },
      });
      await Flight.findByIdAndUpdate(req.body.returnFlightId, {
        $inc: { "business.availableSeats": -totalSeats },
      });
    }
    if (req.body.details.cabin === "first") {
      await Flight.findByIdAndUpdate(req.body.departingFlightId, {
        $inc: { "firstClass.availableSeats": -totalSeats },
      });
      await Flight.findByIdAndUpdate(req.body.returnFlightId, {
        $inc: { "firstClass.availableSeats": -totalSeats },
      });
    }

    res.json(savedReservation);
  } catch (error) {
    console.log(error);
  }

  /** response
   *  -----
   *
   * save the reservation first
   *
   * save the tickets with reference to this reservation
   *
   *
   *
   */
});

/**{
 *  tickets
 *
 * } */

router.post("/create/ticket", async (req, res) => {
  const ticket = new Ticket(req.body);
  try {
    const savedTicket = await ticket.save();
    res.json(savedTicket);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.get("/reserved/:flightId", (req, res) => {
  Ticket.find(
    { flightId: req.params.flightId },
    { seatNum: 1, cabin: 1, _id: 0 }
  )
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err);
      res.json({ message: err });
    });
});

router.delete("/delete/reservation/:id", async (req, res) => {
  // removing reservation

  Reservation.findByIdAndRemove(req.params.id)
    .then((Reservation) => {
      console.log(Reservation);
      if (Reservation != null)
        res.json({ mgs: "Reservation deleted successfully" });
      else {
        res.json({ mgs: "Reservation already deleted" });
      }
    })
    .catch((err) => res.status(404).json({ error: "No such a Reservation" }));
});
//user
router.get("/reservations/:id", async (req, res) => {
  //console.log("backend", req.params.id);
  try {
    const reservations = await Reservation.find({ userId: req.params.id })
      .populate("departingFlightId")
      .populate("returnFlightId"); //
    console.log("the reservations", reservations);

    var output = [];
    reservations.forEach(async (reservation) => {
      // console.log("the departing flight",departingFlight);
      // console.log("the return flight",arrivalFlight);
      const entry = {
        departingFlight: {
          flightNumber: reservation.departingFlightId.flightNumber,
          departureDate: reservation.departingFlightId.departureDate,
          departureTime: reservation.departingFlightId.departureTime,
          arrivalDate: reservation.departingFlightId.arrivalDate,
          arrivalTime: reservation.departingFlightId.arrivalTime,
          cabin: reservation.cabinClass,
        },
        arrivalFlight: {
          flightNumber: reservation.returnFlightId.flightNumber,
          departureDate: reservation.returnFlightId.departureDate,
          departureTime: reservation.returnFlightId.departureTime,
          arrivalDate: reservation.returnFlightId.arrivalDate,
          arrivalTime: reservation.returnFlightId.arrivalTime,
          cabin: reservation.cabinClass,
        },
        reservationId: reservation.id,
        totalPrice: reservation.totalPrice,
      };
      console.log("the entry", entry);
      output.push(entry);
    });

    res.json(output);
  } catch (error) {
    console.log(error);
  }
});
/**
 * {
 *  departingFlight:{
 *
 *  flightNumber: val,
 *  departureDate:val,
 *  departureTime:val,
 *  arrivalDate:val,
 *  arrivalTime: val,
 *  cabin: val
 *
 *  },
 *  arrivalFlight:{
 *   flightnumber: val,
 *  departureDate:val,
 *  departureTime:val,
 *  arrivalDate:val,
 *  arrivalTime: val,
 *  cabin: val
 *
 *  }
 *
 *
 * }
 */
router.get("/profile/:id", async (req, res) => {
  User.findById(req.params.id, "-password")
    .then((result) => {
      res.send(result);

      console.log(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});
// getting tickets of the reservation
router.get("/tickets/:resId",async(req,res)=>{

  const tickets = await Ticket.find({reservationId:req.params.resId}).populate("flightId")
  res.json(tickets);
});
router.post('/payment', async (req, res) => {
  const nodeMailer =require('nodemailer')
const transporter = nodemailer.createTransport({
  service:"hotmail",
  auth: {
    user:"maramACL@outlook.com",
    pass:"Benamer1!"
  }
 


})
const options ={
  from:"maramACL@outlook.com",
  to:JSON.stringify(req.body.body.token.email),
  subject:"HI BABY SEIFOOOOOOO",
  text:JSON.stringify(req.body)
};
    console.log ("Ana batba3 ya rooh omak"+JSON.stringify((req.body.body.token.email)));
    const{product,token}=req.body;
  
    return stripe.customers.create({
     
      email: req.body.body.token.email,
      source: "tok_visa"
  
    }).then(customer =>{
      console.log("na7noooo honaaaa" + ""+JSON.stringify(req.body.body.token.email))
      stripe.charges.create({
        amount:req.body.body.product.price,
        currency:'usd',
        customer:customer.id,
        description:'paying for flight reservation'
      },
      

      )
    }).then(result=> res.status(200).send(result)
    
   

    
    ).then(transporter.sendMail(options,  function(err,info){
      if(err){
        console.log("error!",err);
        return;
      }
      console.log("mail sent successfully");
      console.log(req.body);
      }))
        .catch(err =>console.log(err));
       
      })
  
    

 
router.post('/sendmail', async(req,res) => {

const transporter = nodemailer.createTransport({
  service:"hotmail",
  auth: {
    user:"maramACL@outlook.com",
    pass:"Benamer1!"
  }
 


})
const options ={
  from:"maramACL@outlook.com",
  to:"marambenamer@yahoo.com",
  subject:"Email trial",
  text:JSON.stringify(req.body)
};
transporter.sendMail(options,  function(err,info){
if(err){
  console.log("error!",err);
  return;
}
console.log("mail sent successfully");
console.log(req.body);
})
});










 


// app.post('/confirm-payment', async (req, res) => {

//   //extract payment type from the client request
//   const paymentType = String(req.body.payment_type);

//   //handle confirmed stripe transaction
//   if (paymentType == "stripe") {

//     //get payment id for stripe
//     const clientid = String(req.body.payment_id);

//     //get the transaction based on the provided id
//     stripe.paymentIntents.retrieve(
//       clientid,
//       function(err, paymentIntent) {

//         //handle errors
//         if (err){
//           console.log(err);
//         }
        
//         //respond to the client that the server confirmed the transaction
//         if (paymentIntent.status === 'succeeded') {

//           /*YOUR CODE HERE*/  
          
//           console.log("confirmed stripe payment: " + clientid);
//           res.json({success: true});
//         } else {
//           res.json({success: false});
//         }
//       }
//     );
//   } 
  

router.post('/profile', async (req, res) => {
  const insertion = req.body;
  insertion.password = await bcrypt.hash(user.password, 10);
  insertion.email = user.email.toLowerCase();
  const user = new User(insertion);
  user
    .save()
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => res.status(400).send(err));
});
router.patch("/profile/update/:id", async (req, res) => {
  var changes = req.body;
  if (req.body.password)
    changes.password = await bcrypt.hash(req.body.password, 10);
  User.findByIdAndUpdate(req.params.id, changes, { new: true })
    .select({ password: 0 })
    .then((result) => {
      //new:true returns modified document not original
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});
router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.redirect(303, session.url);
});


module.exports = router;
