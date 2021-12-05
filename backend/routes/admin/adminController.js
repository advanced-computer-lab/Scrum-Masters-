const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../../Models/Flight");
const Reservation = require("../../Models/Reservation");
const Ticket = require("../../Models/Ticket");
//const User = require('../../Models/User')

const { check } = require("express-validator");

router.get("/search", async (req, res) => {
  try {
    const query = await Flight.find();
    console.log(query);
    res.json(query);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/search", async (req, res) => {
  const criteria = req.body;
  //console.log(req);
  console.log(req.body);
  try {
    const query = await Flight.find(criteria);
    console.log(query);
    res.json(query);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post(
  "/create",
  check("arrivalDate").custom((value, { req }) => {
    console.log("The type of arrivalDate",typeof value)
    if (new Date(value) < new Date(req.body.departureDate)) {
      //throw new Error("End date of lab must be valid and after start date");
      res.json({ message: "cannot have an arrival date before the departure date" });
      return;
    }
    return true;
  }),
  async (req, res) => {
    // define each field in req.body is better (for apis :) )
    console.log(req.body);
    const insertion = req.body;
    //unique flightnumber within the day
    var query = await Flight.find({
      flightNumber: req.body.flightNumber,
      departurDate: req.body.departurDate,
    });
    if ((await query).length > 0) {
      res.json({ message: "cannot insert the same flight in the same day" });
      return;
    }
    console.log("the body", insertion);
    const flight = new Flight(insertion);
    try {
      const savedFlight = await flight.save();
      res.json(savedFlight);
    } catch (err) {
      console.log(err);
    }
  }
);
router.patch("/update/:id", async (req, res) => {
  Flight.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      //new:true returns modified document not original
      //result.noOfSeats = parseInt(result.firstClass.noOfSeats) + parseInt(result.business.noOfSeats) + parseInt(result.economy.noOfSeats)
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});
router.delete("/delete/:id", (req, res) => {
  Flight.findByIdAndRemove(req.params.id, req.body)
    .then((flight) => res.json({ mgs: "flight deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a flight" }));
});

module.exports = router;
