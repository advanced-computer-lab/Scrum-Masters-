const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require('../../Models/Flight');

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

  try {
    const query = await Flight.find(criteria);
    console.log(query);
    res.json(query);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/create", async (req, res) => {
  console.log(req.body);
   const insertion = req.body
 
  const flight = new Flight(insertion);
 
  try {
    const savedFlight = await flight.save();
    
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
router.delete("/delete/:id", (req, res) => {
  Flight.findByIdAndRemove(req.params.id, req.body)
    .then((flight) => res.json({ mgs: "flight deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a flight" }));
});


module.exports = router;
