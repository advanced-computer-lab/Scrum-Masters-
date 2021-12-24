const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const flightSchema = mongoose.Schema(
  // check for unique flight numbers within the day
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

    economy: {
      noOfSeats: {
        type: Number,
        default: 0,
        required: true,
      },
      adultPrice: {
        type: Number,
        default: 1000,
        required: true,
      },
      childPrice: {
        type: Number,
        default:750,
        // default: function () {
        //   return this.economy.adultPrice * 0.6;
        // }, // 60% of the specified adult price
        required: true,
      },
      availableSeats: {
        type: Number,
        default: function () {
          return this.economy.noOfSeats;
        },
        required: true,
      },
      baggageAllowance: {
        type: Number,
        default: 2,
      },
    },

    business: {
      noOfSeats: {
        type: Number,
        default: 0,
        required: true,
      },
      adultPrice: {
        type: Number,
        default: 1800,
        required: true,
      },
      childPrice: {
        type: Number,
        default:1000,
        // default: function () {
        //   return this.business.adultPrice * 0.6;
        // }, // 60% of the specified adult price
        required: true,
      },
      availableSeats: {
        type: Number,
        default: function () {
          return this.business.noOfSeats;
        },
        required: true,
      },
      baggageAllowance: {
        type: Number,
        default: 2,
      },
    },

    firstClass: {
      noOfSeats: {
        type: Number,
        default: 0,
        required: true,
      },
      adultPrice: {
        type: Number,
        default: 3000,
        required: true,
      },
      childPrice: {
        type: Number,
        default:2500,
        // default: function () {
        //   return this.firstClass.adultPrice * 0.6;
        // }, // 60% of the specified adult price
        required: true,
      },
      availableSeats: {
        type: Number,
        default: function () {
          return this.firstClass.noOfSeats;
        },
        required: true,
      },
      baggageAllowance: {
        type: Number,
        default: 3,
      },
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
flightSchema
  .virtual("noOfSeats")
  .get(function () {
    return (
      this.firstClass.noOfSeats +
      this.business.noOfSeats +
      this.economy.noOfSeats
    );
  })
  .set(function (noOfSeats) {
    this.noOfSeats = noOfSeats;
  });

flightSchema
  .virtual("availableSeats")
  .get(function () {
    return (
      this.firstClass.availableSeats +
      this.business.availableSeats +
      this.economy.availableSeats
    );
  })
  .set(function (availableSeats) {
    this.availableSeats = availableSeats;
  });

flightSchema
  .virtual("duration")
  .get(function () {
    d1 = new Date(Date.parse("2017-05-02T" + this.departureTime));
    d2 = new Date(Date.parse("2017-05-02T" + this.arrivalTime));
    d3 = new Date(d2 - d1);
    d0 = new Date(0);

    return (
      d3.getHours() -
      d0.getHours() +
      "h " +
      (d3.getMinutes() - d0.getMinutes()) +
      "m"
    );
  })
  .set(function (duration) {
    this.duration = duration;
  });

const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
