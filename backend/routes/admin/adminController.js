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
router.post("/create", async (req,res) => {
<<<<<<< HEAD
  console.log("trying to execute");// kharawani
  console.log("khara belkozbara");
  console.log(req.body);
const flight=new Flight(req.body);
try{
  
  const savedFlight=await flight.save();
  res.json(savedFlight);
=======
  console.log("trying to execute");
  console.log(req.body);

  try{
const flight=new Flight(req.body);
  await flight.save();
  res.send("WOHOOOOO");
>>>>>>> dev
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
