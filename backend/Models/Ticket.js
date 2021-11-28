const mongoose = require("mongoose");
const Flight = require("./Flight");

const ticketSchema = mongoose.Schema(
  {
    seatNum: {
      type: Number,
      required: true,
      unique: true, //(?)
    },
    ticketType: {
      type: String,
      enum: ["departing", "return"],
      required: true,
    },
    passengerType: {
      type: String,
      enum: ["adult", "child"],
      required: true,
    },
    cabinClass: {
      type: String,
      enum: ["business", "economy", "first class"],
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    //extra

    flightNumber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
      required: true,
    },
    // price:{
    //     type:Number,
    //     set: setPrice
    // }
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
//failed trial
// const setPrice =async ()=>{

//     const flight =  await Flight.findById(this.flightId)
//     console.log("here is the flight \n" + flight + "\n")
//     if(this.passengerType === "adult"){
//         switch(this.cabinClass){
//             case "business": return flight.business.adultPrice;
//             case "economy": return flight.economy.adultPrice;
//             case "first class": return flight.firstClass.adultPrice;
//         }
//     }
//     else{ //child
//         switch(this.cabinClass){
//             case "business": return flight.business.childPrice;
//             case "economy": return flight.economy.childPrice;
//             case "first class": return flight.firstClass.childPrice;
//         }
//     }

// }

// deriving the price
ticketSchema
  .virtual("price")
  .get(async function () {
    console.log("virtual price hi");
    try {
       var flight = {};

      if (this.ticketType === "departing") {
       // flight = await Flight.findById(this.parent().departingFlight.id);
           flight = await Flight.findById(this.flightNumber);
      } else {
        flight = await Flight.findById(this.parent().returnFlight.id);
      }
      console.log("the filght details\n" + flight + " ------ \n");
    } catch (error) {
      console.log(error);
    }
    // var flight;
    // await Flight.findById(this.flightNumber)
    //   .then((result) => (flight = result))
    //   .catch((err) => err);
    // console.log("price", flight.business.adultPrice);
    if (this.passengerType === "adult") {
      switch (this.cabinClass) {
        case "business":
          return flight.business.adultPrice;
        case "economy":
          return flight.economy.adultPrice;
        case "first class":
          return flight.firstClass.adultPrice;
      }
    } else {
      //child
      switch (this.cabinClass) {
        case "business":
          return flight.business.childPrice;
        case "economy":
          return flight.economy.childPrice;
        case "first class":
          return flight.firstClass.childPrice;
      }
    }

    // console.log("the flight \n ------- \n")
    // console.log(flight);
    // console.log("\n ------------")
  })
  .set(function (price) {
    this.price = price;
  });

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
