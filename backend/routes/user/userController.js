const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../../Models/Flight");

router.post("/search", async (req, res) => {
  const criteria = req.body;
<<<<<<< HEAD
  console.log(req.body);
=======
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
>>>>>>> 28b00b7b3e9ca17c602bdd20c92db1239c24d8f8
  try {
    var query = await Flight.find(criteria);
    if (criteria.economy.availableSeats) {
      //console.log("ehna true");
      query = query.filter((flight) => flight.economy.availableSeats >= criteria.economy.availableSeats);
    }
    if (criteria.business.availableSeats) {
      //console.log("ehna true");
      query = query.filter((flight) => flight.business.availableSeats >= criteria.business.availableSeats);
    }
    if (criteria.firstClass.availableSeats) {
      //console.log("ehna true");
      query = query.filter((flight) => flight.firstClass.availableSeats >= criteria.firstClass.availableSeats);
    }
    // if(criteria.cabinClass){
    //   query.forEach(flight=>{flight.cabinClass = criteria.cabinClass})
    // }
    console.log(query);
    res.json(query);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/search/departingFlight/:flightId/:cabinClass",async (req, res) => {

  try {
    var flight = await Flight.findById(req.params.flightId);
    flight
    res.json(flight); //cabin class
} catch (error) {
  res.json({message:error});
}
});

router.get("/search/returnFlight/:flightId",async (req, res) => {

  try {
    const flight = await Flight.findById(req.params.flightId);
    res.json(flight);
} catch (error) {
  res.json({message:error});
}
});
router.post("/bookTicket/", async (req, res) => {
  // define each field in req.body is better (for apis :) )
  console.log(req.body);
  const insertion = req.body;
  //insertion.noOfSeats = parseInt(insertion.firstClass.noOfSeats) + parseInt(insertion.business.noOfSeats) + parseInt(insertion.economy.noOfSeats)
  console.log("the body",insertion);
  
  const ticket =await new Ticket(insertion);
  try {
    const savedTicket = await ticket.save();
    res.json(savedTicket);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
