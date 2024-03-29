const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../../Models/Flight");
const Reservation = require("../../Models/Reservation");
const Ticket = require("../../Models/Ticket");
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

router.post("/create", async (req, res) => {
  // define each field in req.body is better (for apis :) )
  console.log(req.body);
  const insertion = req.body;
  //insertion.noOfSeats = parseInt(insertion.firstClass.noOfSeats) + parseInt(insertion.business.noOfSeats) + parseInt(insertion.economy.noOfSeats)
  console.log("the body",insertion)
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

//tests
async function getTickets(tickets,flightNumber){
  var createdTickets = [];
  tickets.forEach(async (ticket) => {
    ticket.ticketType = "departing";
    ticket.flightNumber = flightNumber
    console.log("new ticket", ticket);
    const t =  new Ticket(ticket);
    createdTickets.push(t._id);
    console.log("the ticket t ",t)
    
      t.save().then().catch()  
    
      });
  console.log("saved tickets ",createdTickets)
  return createdTickets;

}



router.post("/reservation/:id", async (req, res) => {
  
  const insertion = req.body;
  insertion.userId = req.params.id;
  console.log("insertion", insertion);


  // //ticket creation
  const depTickets = insertion.departingFlight.tickets;
  console.log("departure tickets", depTickets);
  insertion.departingFlight.tickets = await getTickets(depTickets,insertion.departingFlight.id);

// return

  const returnTickets = insertion.returnFlight.tickets;
  console.log("return tickets", returnTickets);
  insertion.returnFlight.tickets = await getTickets(returnTickets,insertion.returnFlight.id);

  const reservation = await new Reservation(insertion);
  try {
    const savedReservation = await reservation.save();
    console.log("The reservation",savedReservation);
    res.json(savedReservation);
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
