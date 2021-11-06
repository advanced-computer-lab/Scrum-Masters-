const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
<<<<<<< HEAD
const Flight = require("../../Models/Flight");
const Cors = require("cors");
const { application } = require("express");
router.use(Cors());
router.get("/search", async (req, res) => {
=======
const Flight = require('../../Models/Flight');

router.get('/search', async (req, res) => {
  try {
    const query = await Flight.find();
    console.log(query);
    res.json(query);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/search', async (req, res) => {
>>>>>>> ce0a25ec8a1d865d540afc584deebf8ade2e7a6e
  const criteria = req.body;

  try {
    const query = await Flight.find(criteria);
    console.log(query);
    res.json(query);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/create', async (req, res) => {
  console.log(req.body);
  const flight = new Flight(req.body);
  try {
    const savedFlight = await flight.save();
    res.json(savedFlight);
  } catch (err) {
    console.log(err);
  }
});
router.patch('/update/:id', async (req, res) => {
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
router.delete('/delete/:id', (req, res) => {
  Flight.findByIdAndRemove(req.params.id, req.body)
    .then(flight => res.json({ mgs: 'flight deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a flight' }));
});

router.get("/number", async (req, res) => {
  const criteria = {
    flightNumber: 1
  }
    try {
      const query = await Flight.find(criteria);
      console.log(query);
      res.json(query);
    } catch (err) {
      res.json({ message: err });
    }
  //}
});

module.exports = router;
