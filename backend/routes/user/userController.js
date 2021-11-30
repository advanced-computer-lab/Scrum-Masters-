const { request } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../../Models/Flight");
const Reservation = require("../../Models/Reservation");
const Ticket = require("../../Models/Ticket");

router.get("/reservations/:id", (req, res) => {
    Reservation.find({userId : req.params.id})
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });



module.exports = router;