const mongoose = require('mongoose');
//const Schema = mongoose.Schema;



const flightSchema=mongoose.Schema({

flightNumber: {
    type: Number,
    //required:true
  }, 

  departureTime: {
    type: String,
    //required:true
  },

  arrivalTime: {
    type: String,
    //required:true

  },
  
  departureDate: {
<<<<<<< HEAD
    type:String,
    //required:true
  },

  arrivalDate: {
    type:String,
    //required:true
=======
    type: Date,
    required:true
  },

  arrivalDate: {
    type: Date,
    required:true
>>>>>>> dev
  },

  departureAirport: {
      type:String,
      //required:true
  },

  arrivalAirport:{
    type:String,
    
  },
  noOfEconomy: {
    type: Number,
   //required:true
  },

  noOfBusiness: {
    type: Number,
    
  },
  noOfSeats: {
      type: Number,
      
  }
<<<<<<< HEAD
=======

 

>>>>>>> maram
});

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;
