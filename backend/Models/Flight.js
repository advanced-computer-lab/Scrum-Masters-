const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const flightSchema=new Schema({

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
    type: Date,
    required:true
  },

  arrivalDate: {
    type: Date,
    required:true
  },

  departureAirport: {
      type:String,
      required:true
  },

  arrivalAirport:{
    type:String,
    required:true
  },
 
 
  noOfEconomy: {
    type: Number,
   required:true
  },

  noOfBusiness: {
    type: Number,
    required:true
  },
  noOfSeats: {
      type: Number,
      default:this.noOfBusiness+this.noOfEconomy
  }

 

});

const Flight = mongoose.model('flight', flightSchema);
module.exports = Flight;
