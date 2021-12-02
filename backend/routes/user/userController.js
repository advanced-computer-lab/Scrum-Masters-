const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../../Models/Flight");
const Ticket = require("../../Models/Ticket");


router.get("/search/flights", async (req,res)=>{
  try {
    const from = await Flight.distinct('departureAirport')
    const to = await Flight.distinct('arrivalAirport')
    console.log("from",from);
    console.log("to",to)
    const output = {
      from:from,
      to:to
    }
    res.json(output);
  } catch (error) {
    res.status(404).json({message:"invalid search"})
  }
})

router.post("/search", async (req, res) => {
  const criteria = req.body; /* {
    noOfChildren: val, 
    noOfAdults: val,
    departureAirpot:val, 
    arrivalAirport:val,
    departureDate: val,
    arrivalDate: val,
    cabin: val
  }*/
  console.log(criteria);
  try {
    var query = await Flight.find({
      departureAirport: criteria.departureAirport,
      arrivalAirport: criteria.arrivalAirport,
      departureDate: criteria.departureDate,
      arrivalDate: criteria.arrivalDate,
    });
    console.log("query before filtering",query)
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
      flights:query,
      details:criteria
    }
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

router.get(
  "/search/departingFlight/:flightId/:cabinClass",
  async (req, res) => {
    try {
      var flight = await Flight.findById(req.params.flightId);
      res.json(flight); //cabin class
    } catch (error) {
      res.json({ message: error });
    }
  }
);

router.get("/search/returnFlight/:flightId", async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.flightId);
    res.json(flight);
  } catch (error) {
    res.json({ message: error });
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

module.exports = router;
