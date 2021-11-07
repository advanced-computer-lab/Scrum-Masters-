const mongoose = require('mongoose');
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
      type: Date,
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
  .virtual('noOfSeats')
  .get(function () {
    return this.noOfFirstClass + this.noOfBusiness + this.noOfEconomy;
  })
  .set(function (noOfSeats) {
    this.noOfSeats = noOfSeats;
  });

flightSchema
  .virtual('duration')
  .get(function () {
    d1 = new Date(Date.parse('2017-05-02T' + this.departureTime));
    d2 = new Date(Date.parse('2017-05-02T' + this.arrivalTime));
    console.log(d2, 'and ', d1);
    d3 = new Date(d2 - d1);
    d0 = new Date(0);

    return (
      d3.getHours() -
      d0.getHours() +
      'h ' +
      (d3.getMinutes() - d0.getMinutes()) +
      'm'
    );
  })
  .set(function (duration) {
    this.duration = duration;
  });

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;
