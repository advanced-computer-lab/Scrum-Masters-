const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require('../../Models/Flight');
const Reservation = require('../../Models/Reservation');
//const User = require('../../Models/User')

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

router.post("/create", async (req, res) => { // define each field in req.body is better (for apis :) )
  console.log(req.body);
   const insertion = req.body;
 
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

//tests

router.post("/reservation/:id",async (req,res)=>{
    const insertion = req.body;
    insertion.userId = req.params.id;
    //console.log(insertion);
    const reservation = new Reservation(insertion)
    try {
      const savedReservation = await reservation.save()
      console.log(savedReservation);
      res.json(savedReservation);
    } catch (error) {
      console.log(error);
    }
})


module.exports = router;
