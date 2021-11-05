const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const flightSchema = mongoose.Schema(
  {
    flightNumber: {
      type: Number,
      required: true,
    },

    departureTime: {
      type: String,
      required: true,
    },

    arrivalTime: {
      type: String,
      required: true,
    },

  departureDate: {
    type: Date,
    required: true,
  },

  arrivalDate: {
    type: Date ,
    required: true,
  },

    departureAirport: {
      type: String,
      required: true,
    },

    arrivalAirport: {
      type: String,
      required: true,
    },

    noOfEconomy: {
      type: Number,
      required: true,
    },

    noOfBusiness: {
      type: Number,
      required: true,
    },
    noOfFirstClass: {
      type: Number,
      required: true,
    },

    // noOfSeats: {
    //   type: Number,
    //   default: function () {
    //     return this.noOfFirstClass + this.noOfBusiness + this.noOfEconomy;
    //   },
    // },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
flightSchema
  .virtual("noOFSeats")
  .get(function () {
    return this.noOfFirstClass + this.noOfBusiness + this.noOfEconomy;
  })
  .set(function (noOfSeats) {
    this.noOfSeats = noOfSeats;
  });

const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
