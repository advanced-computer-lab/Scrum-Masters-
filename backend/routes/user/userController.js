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


// router.get("/reservations/:id", (req, res) => {
//   Reservation.find({userId : req.params.id})
//     .then((result) => res.json(result))
//     .catch((err) => console.log(err));
// });

router.delete("/delete/reservation/:id", (req, res) => {
  Reservation.findByIdAndRemove(req.params.id)
    .then((Reservation) => res.json({ mgs: "Reservation deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a Reservation" }));
});

module.exports = router;