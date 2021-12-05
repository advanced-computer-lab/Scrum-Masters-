const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../../Models/Flight");

router.post("/search", async (req, res) => {
  const criteria = req.body;
  console.log(req.body);
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
