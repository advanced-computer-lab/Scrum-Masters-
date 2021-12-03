const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../../Models/Flight");
const Ticket = require("../../Models/Ticket");

router.get("/search/flights", async (req, res) => {
  try {
    const from = await Flight.distinct("departureAirport");
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
  const criteria = req.body; /* {
    noOfChildren: val, 
    noOfAdults: val,
    departureAirpot:val, 
    arrivalAirport:val,  cai  dxb
    departureDate: val,
    arrivalDate: val, of return flight
    cabin: val
  }*/
  console.log(criteria);
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
    
    var output = []
    output.push({flights:query1,details:criteria})
    output.push({flights:query2,details:criteria})
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
 *  noOfAdults: 3,
    noOfChildren: 0,
    arrivalDate: '2021-11-02T00:00:00.000Z', return date 
    cabin: 'economy'
    flightId
 * }
*/
 //route for departing Flights
router.get("/search/departingFlights/", async (req, res) => {
  try {
    var departingFlight = await Flight.findById({
      _id: req.params.flightId,
    });

    var query = await Flight.find({
      departureAirport: departingFlight.arrivalAirport,
      arrivalAirport: departingFlight.departureAirport,
      departureDate: criteria.arrivalDate,
    });

    if (criteria.cabin === "economy") {
      query = query.filter(
        (flight) =>
          flight.economy.availableSeats >=
          criteria.noOfChildren + criteria.noOfAdults
      );
    }
    if (criteria.cabin === "business") {
      //console.log("ehna true");
      query = query.filter(
        (flight) =>
          flight.business.availableSeats >=
          criteria.noOfChildren + criteria.noOfAdults
      );
    }
    if (criteria.cabin === "first") {
      //console.log("ehna true");
      query = query.filter(
        (flight) =>
          flight.firstClass.availableSeats >=
          criteria.noOfChildren + criteria.noOfAdults
      );
    }
    var output = {
      flights: query,
      details: criteria,
    };

    res.json(output); 
  } catch (error) {
    res.json({ message: error });
  }
});

// router.get("/search/returnFlight/:flightId", async (req, res) => {
//   try {
//     const flight = await Flight.findById(req.params.flightId);
//     res.json(flight);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

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

module.exports = router;
