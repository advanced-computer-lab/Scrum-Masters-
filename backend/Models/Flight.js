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
 
  cabin: {
    type: String,
    enum : ['Economy','Business'],
    
  },
  noOfEconomy: {
    type: Number,
    required:isAdmin(this.type)
  },

  noOfBusiness: {
    type: Number,
    required:isAdmin(this.type)
  },
  noOfSeats: {
      type: Number,
      default:this.noOfBusiness+this.noOfEconomy
  },

  airport: {
      type:String,
      required:true
  }

});

const Flight = mongoose.model('flight', flightSchema);
module.exports = Flight;
