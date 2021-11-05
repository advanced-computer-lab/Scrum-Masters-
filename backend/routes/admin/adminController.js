const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../../Models/Flight");

router.get("/search", async (req, res) => {
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

router.post("/createflight",async(req, res)=>{
const flight=new Flight({flightNumber:req.params.flightNumber});
router.get("/create/:flightNumber/:departureTime/:arrivalTime/:departureDate/:arrivalDate/:departureAirport/:arrivalAirport/:noOfEconomy/:noOfBusiness/:noOfSeats", (req,res) => {
const flight=new Flight({flightNumber:req.params.flightNumber, departureTime:req.params.departureTime, arrivalTime:req.params.arrivalTime,  departureDate: req.params.departureDate, arrivalDate: req.params.arrivalDate, departureAirport: req.params.departureAirport, arrivalAirport: req.params.arrivalAirport, noOfEconomy: req.params.noOfEconomy, noOfBusiness:req.params.noOfBusiness, noOfSeats: req.params.noOfSeats});

try{
   flight.save();
  res.send("WOHOOOOO")
}
catch(err){
  console.log(err);
}

});



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
router.delete('/:id', (req, res) => {
  flight.findByIdAndRemove(req.params.id, req.body)
    .then(flight => res.json({ mgs: 'flight deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a flight' }));
});


module.exports = router;
