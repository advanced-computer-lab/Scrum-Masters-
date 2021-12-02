const mongoose = require('mongoose');
const User = require('./User');
const Ticket = require('./Ticket').schema;

const ReservationSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reservationId: {
     type:Number
    },
    departingFlight: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Flight",
        required: true,
      },
      cabinClass: {
        type: String,
        enum: ["business", "economy", "first"],
        required: true,
      },
      // tickets: [
      //   {
      //     type: mongoose.Schema.Types.ObjectId,
      //     ref: 'Ticket',
      //     required: true,
      //   },
      // ],
    },
    returnFlight: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Flight",
        required: true,
      },
      cabinClass: {
        type: String,
        enum: ["business", "economy", "first"],
        required: true,
      },
      // tickets: [
      //   {
      //     type: mongoose.Schema.Types.ObjectId,
      //     ref: 'Ticket',
      //     required: true,
      //   },
      // ],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// total price
ReservationSchema.virtual('totalPrice')
  .get(function () {
    let sum = 0;
    this.departingFlight.tickets.forEach((ticket) => {
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

const Reservation = mongoose.model('Reservation', ReservationSchema);
module.exports = Reservation;
