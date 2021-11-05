const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../../Models/Flight");

router.post("/search", async (req, res) => {
  const criteria = req.body;
  //console.log(criteria);
 /* if (Object.keys(req.body).length === 0) {
    try {
      const query = await Flight.find();
      console.log(query);
      res.json(query);
    } catch (err) {
      res.json({ message: err });
    }
  } else {*/
    try {
      const query = await Flight.find(criteria);
      console.log(query);
      res.json(query);
    } catch (err) {
      res.json({ message: err });
    }
  //}
});
router.post("/create", async (req, res) => {
  console.log(req.body);
  const insertion = req.body
  insertion.noOfSeats = req.body.noOfFirstClass + req.body.noOfBusiness + req.body.noOfEconomy
  const flight = new Flight(insertion);
  console.log(flight.noOfSeats + " 1st");
  try {
    const savedFlight = await flight.save();
    console.log(savedFlight.noOfSeats + " 2nd");
    res.json(savedFlight);
  } catch (err) {
    console.log(err);
  }
});
router.patch("/update/:id", async (req, res) => {
  Flight.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
