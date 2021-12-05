const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Flight = require('../../Models/Flight');
const Reservation = require('../../Models/Reservation');
const Ticket = require('../../Models/Ticket');
const User = require('../../Models/User');
var airports = require('airport-codes');

router.get('/search/flights', async (req, res) => {
  try {
    const from = await Flight.distinct('departureAirport');
    //const from = airports.find().get('iata')
    const to = await Flight.distinct('arrivalAirport');
    console.log('from', from);
    console.log('to', to);
    const output = {
      from: from,
      to: to,
    };
    res.json(output);
  } catch (error) {
    res.status(404).json({ message: 'invalid search' });
  }
});

router.post('/search', async (req, res) => {
  const criteria = req.body;
  console.log('criteria', criteria); //theerasfadfad
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
    res.json({ message: 'please choose all the fields' });
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
    res.json({ message: 'please choose at least one passenger' });
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
        message: 'You can not specify the from and to with the same values',
      });
      return;
    }

    // overlapping dates
    if (new Date(criteria.arrivalDate) < new Date(criteria.departureDate)) {
      res.json({
        message: 'cannot have an arrival date before the departure date',
      });
      return;
    }

    // no round trips

    // console.log("query before filtering", query);
    if (criteria.cabin === 'economy') {
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
    if (criteria.cabin === 'business') {
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
    if (criteria.cabin === 'first') {
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
          'We are sorry, there are no round trips available for your criteria',
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
router.post('/create/reservation/:userId', async (req, res) => {
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
    if (req.body.details.cabin === 'economy') {
      await Flight.findByIdAndUpdate(req.body.departingFlightId, {
        $inc: { 'economy.availableSeats': -totalSeats },
      });
      await Flight.findByIdAndUpdate(req.body.returnFlightId, {
        $inc: { 'economy.availableSeats': -totalSeats },
      });
    }
    if (req.body.details.cabin === 'business') {
      await Flight.findByIdAndUpdate(req.body.departingFlightId, {
        $inc: { 'business.availableSeats': -totalSeats },
      });
      await Flight.findByIdAndUpdate(req.body.returnFlightId, {
        $inc: { 'business.availableSeats': -totalSeats },
      });
    }
    if (req.body.details.cabin === 'first') {
      await Flight.findByIdAndUpdate(req.body.departingFlightId, {
        $inc: { 'firstClass.availableSeats': -totalSeats },
      });
      await Flight.findByIdAndUpdate(req.body.returnFlightId, {
        $inc: { 'firstClass.availableSeats': -totalSeats },
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

router.post('/create/ticket', async (req, res) => {
  const ticket = new Ticket(req.body);
  try {
    const savedTicket = await ticket.save();
    res.json(savedTicket);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.get('/reserved/:flightId', (req, res) => {
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

router.delete('/delete/reservation/:id', async (req, res) => {
  // removing reservation

  Reservation.findByIdAndRemove(req.params.id)
    .then((reservation) => {
      Ticket.deleteMany({ reservationId: req.params.id })
        .then(async (tickets) => {
          // incremeting the total seats of the reserved flights

          tickets.forEach((ticket) => {
            console.log('We are in this ticket', ticket);

            if (ticket.cabin === 'economy') {
              Flight.findByIdAndUpdate(ticket.flightId, {
                $inc: { 'economy.availableSeats': 1 },
              })
                .then(console.log('decreased the number of seats'))
                .catch();
            }
            if (ticket.cabin === 'business') {
              Flight.findByIdAndUpdate(ticket.flightId, {
                $inc: { 'business.availableSeats': 1 },
              })
                .then(console.log('decreased the number of seats'))
                .catch();
            }
            if (ticket.cabin === 'first') {
              Flight.findByIdAndUpdate(ticket.flightId, {
                $inc: { 'firstClass.availableSeats': 1 },
              })
                .then(console.log('decreased the number of seats'))
                .catch();
            }
          });
        })
        .catch();

      res.json({ mgs: 'Reservation deleted successfully' });
    })
    .catch((err) => res.status(404).json({ error: 'No such a Reservation' }));
});

//user
router.get('/reservations/:id', async (req, res) => {
  //console.log("backend", req.params.id);
  try {
    const reservations = await Reservation.find({ userId: req.params.id })
      .populate('departingFlightId')
      .populate('returnFlightId'); //
    console.log('the reservations', reservations);

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
      };
      console.log('the entry', entry);
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
router.get('/profile/:id', async (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});
router.post('/profile', async (req, res) => {
  const insertion = req.body;
  const user = new User(insertion);
  user
    .save()
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => res.status(400).send(err));
});
router.patch('/profile/update/:id', async (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      //new:true returns modified document not original
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

module.exports = router;
