const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../../Models/Flight");
const Ticket = require("../../Models/Ticket");
const User = require("../../Models/User");

router.post("/search", async (req, res) => {
  const criteria = req.body;
  console.log(req.body);
  try {
    var query = await Flight.find(criteria);
    if (criteria.economy && criteria.economy.availableSeats) {
      //console.log("ehna true");
      query = query.filter(
        (flight) =>
          flight.economy.availableSeats >= criteria.economy.availableSeats
      );
    }
    if (criteria.business && criteria.business.availableSeats) {
      //console.log("ehna true");
      query = query.filter(
        (flight) =>
          flight.business.availableSeats >= criteria.business.availableSeats
      );
    }
    if (criteria.firstClass && criteria.firstClass.availableSeats) {
      //console.log("ehna true");
      query = query.filter(
        (flight) =>
          flight.firstClass.availableSeats >= criteria.firstClass.availableSeats
      );
    }
    // if(criteria.cabinClass){
    //   query.forEach(flight=>{flight.cabinClass = criteria.cabinClass})
    // }
    console.log(query);
    res.json(query);
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

//user
router.get("/profile/:id", async (req, res) => {
  User.findbyId(req.params.id)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});
router.patch("/profile/update/:id", async (req, res) => {
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
