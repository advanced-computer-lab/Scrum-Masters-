const mongoose = require("mongoose");
const User = require("./User");
const Ticket = require("./Ticket");

const ReservationSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    departingFlight: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Flight",
        required: true,
      },
      tickets: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ticket",
          required: true,
        },
      ],
    },
    returnFlight: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Flight",
        required: true,
      },
      tickets: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ticket",
          required: true,
        },
      ],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// total price
ReservationSchema.virtual("totalPrice")
  .get(async function () {
    let sum = 0;
    await this.departingFlight.tickets.forEach(async (ticket) => {
      // find by id and sum the prices
      // const t = await Ticket.findById(ticket);
      // console.log(t.price);
      // sum += await t.price;
      sum += ticket.price;
    });

    await this.returnFlight.tickets.forEach(async (ticket) => {
      // const t = await Ticket.findById(ticket);
      // sum += await t.price;
      sum+=ticket.price
    });
    return sum;
  })
  .set(function (totalPrice) {
    this.totalPrice = totalPrice;
  });

// Adult ticket num & child ticket num (?)
// I will code it here

const Reservation = mongoose.model("Reservation", ReservationSchema);
module.exports = Reservation;
