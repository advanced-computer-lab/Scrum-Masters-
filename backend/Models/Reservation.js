const mongoose = require('mongoose');
const User = require('./User');
const Ticket = require('./Ticket').schema;


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

const Reservation = mongoose.model('Reservation', ReservationSchema);
module.exports = Reservation;
