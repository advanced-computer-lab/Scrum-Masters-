<<<<<<< HEAD
const mongoose = require('mongoose');
const User = require('./User');
const Ticket = require('./Ticket').schema;
=======
const mongoose = require("mongoose");
const User = require("./User");
const Ticket = require("./Ticket").schema;
>>>>>>> 78446b6426bb1afcc7033cc1106988da96ed1a7c

const ReservationSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    departingFlight: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true,
      },
      cabinClass: {
        type: String,
        enum: ["business", "economy", "first class"],
        required: true,
      },
      tickets: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Ticket',
          required: true,
        },
      ],
    },
    returnFlight: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true,
      },
<<<<<<< HEAD
      tickets: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Ticket',
=======
      cabinClass: {
        type: String,
        enum: ["business", "economy", "first class"],
        required: true,
      },
      tickets: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ticket",
>>>>>>> 78446b6426bb1afcc7033cc1106988da96ed1a7c
          required: true,
        },
      ],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// total price
<<<<<<< HEAD
ReservationSchema.virtual('totalPrice')
  .get(function () {
    let sum = 0;
    this.departingFlight.tickets.forEach((ticket) => {
=======
ReservationSchema.virtual("totalPrice")
  .get(function () {
    let sum = 0;
    this.departingFlight.tickets.forEach((ticket) => {
      // find by id and sum the prices
>>>>>>> 78446b6426bb1afcc7033cc1106988da96ed1a7c
      sum += ticket.price;
    });

    this.returnFlight.tickets.forEach((ticket) => {
      sum += ticket.price;
    });
    return sum;
  })
  .set(function (totalPrice) {
    this.totalPrice = totalPrice;
  });

// Adult ticket num & child ticket num (?)
// I will code it here

<<<<<<< HEAD
const Reservation = mongoose.model('Reservation', ReservationSchema);
=======
const Reservation = mongoose.model("Reservation", ReservationSchema);
>>>>>>> 78446b6426bb1afcc7033cc1106988da96ed1a7c
module.exports = Reservation;
