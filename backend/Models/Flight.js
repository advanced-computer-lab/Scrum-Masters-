const mongoose = require('mongoose');
//const Schema = mongoose.Schema;



const flightSchema=mongoose.Schema({

flightNumber: {
    type: Number,
    required:true
  }, 

  departureTime: {
    type: String,
    required:true
  },

  arrivalTime: {
    type: String,
    required:true

  },
  
  departureDate: {
    type:String,
    required:true
  },

  arrivalDate: {
    type:String,
    required:true
  },

  departureAirport: {
      type:String,
      required:true
  },

  arrivalAirport:{
    type:String,
    required: true
  },
 
 
  noOfEconomy: {
    type: Number,
   required:true
  },

  noOfBusiness: {
    type: Number,
    required: true 
  },
  noOfSeats: {
      type: Number,
      //default:this.noOfBusiness+this.noOfEconomy
  }

 

});

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;
