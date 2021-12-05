<<<<<<< HEAD
const mongoose = require("mongoose");
const User = require("./User");
const Ticket = require("./Ticket").schema;
=======
const mongoose = require('mongoose');
const User = require('./User');
const Ticket = require('./Ticket').schema;
>>>>>>> 3f14d86dcb7d00bf80b3c2d235d7836099f4804f


const ReservationSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    cabinClass: {
      type: String,
      enum: ['business', 'economy', 'first'],
      required: true,
    },
    departingFlightId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Flight',
      required: true,
    },
    returnFlightId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Flight',
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// total price

// Adult ticket num & child ticket num (?)
// I will code it here

<<<<<<< HEAD
const Reservation = mongoose.model("Reservation", ReservationSchema);
=======
const Reservation = mongoose.model('Reservation', ReservationSchema);
>>>>>>> 3f14d86dcb7d00bf80b3c2d235d7836099f4804f
module.exports = Reservation;
