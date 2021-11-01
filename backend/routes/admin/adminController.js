const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../../Models/Flight");

router.post("/search", async (req, res) => {
  const criteria = req.body;
  console.log(criteria);
  try {
    const query = await Flight.find(criteria);
    console.log(query);
    res.json(query);
  } catch (err) {
    res.json({ message: err });
  }
});
router.post("/create", async (req,res) => {
  console.log("trying to execute");
  try{
const flight=new Flight({flightNumber: req.body.flightNumber, departureTime:req.body.departureTime, arrivalTime:req.body.arrivalTime,  departureDate: req.body.departureDate, arrivalDate: req.body.arrivalDate, departureAirport: req.body.departureAirport, arrivalAirport: req.body.arrivalAirport, noOfEconomy: req.body.noOfEconomy, noOfBusiness:req.body.noOfBusiness, noOfSeats: req.body.noOfSeats});

   flight.save();
  res.send("WOHOOOOO")
}
catch(err){
  console.log(err);
}

})
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
