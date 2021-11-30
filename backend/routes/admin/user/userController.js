
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../../Models/Flight");
const Reservation = require("../../Models/Reservation");
const Ticket = require("../../Models/Ticket");
//const User = require('../../Models/User')




router.post("/reservation/:id", async (req, res) => {
    const insertion = req.body;
    insertion.userId = req.params.id;
    console.log("insertion", insertion);
    const reservation = new Reservation(insertion);
    try {
      const savedReservation = await reservation.save();
      console.log(savedReservation);
    } catch (error) {
      console.log(error);
    }
  });