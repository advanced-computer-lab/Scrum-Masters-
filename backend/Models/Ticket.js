const mongoose = require("mongoose");
const Flight = require("./Flight");

const ticketSchema = mongoose.Schema(
  {
    seatNum: {
      type: Number,
      required: true,
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
    //     default: setPrice(this.parent().departingFlight.id,this.parent().returnFlight.id)
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
//         else{
//             flight =  Flight.findById(returnFlightId)
//         }
//         console.log("the filght details\n" + flight + " ------ \n");
//         if(this.passengerType === "adult"){
//             switch(this.cabinClass){
//                 case "business": return flight.business.adultPrice;
//                 case "economy": return flight.economy.adultPrice;
//                 case "first class": return flight.firstClass.adultPrice;
//             }
//         }
//         else{ //child
//             switch(this.cabinClass){
//                 case "business": return flight.business.childPrice;
//                 case "economy": return flight.economy.childPrice;
//                 case "first class": return flight.firstClass.childPrice;
//             }
//         }
//     } catch (error) {
//         console.log(error)
//     }

// }

// deriving the price
ticketSchema
  .virtual("price")
  .get(function () {
    console.log("virtual price hi", this.flightNumber);
    return Flight.findById(this.flightNumber.toString()).exec().then((result) => {
      console.log("the flight is here", result);
      return result.economy.adultPrice;
    });
    // console.log("line 89");
    // Flight.findById(this.flightNumber.toString()).then(result => {
    //   console.log("ticket price", result.economy.childPrice);
    //   return result.economy.childPrice;
    // }).catch(err => console.log(err));
    // .then((flight) => {
    // console.log("line 92");
    // console.log("the filght details\n" + flight + " ------ \n");
    // console.log("line 95");
    // if (this.passengerType === "adult") {
    //   switch (this.cabinClass) {
    //     case "business":
    //       return flight.business.adultPrice;
    //     case "economy":
    //       return flight.economy.adultPrice;
    //     case "first class":
    //       return flight.firstClass.adultPrice;
    //   }
    // } else {
    //   //child
    //   switch (this.cabinClass) {
    //     case "business":
    //       return flight.business.childPrice;
    //     case "economy":
    //       return flight.economy.childPrice;
    //     case "first class":
    //       return flight.firstClass.childPrice;
    //   }
    // }
    //  }
    // )
    // .catch((err) => console.log(err));

    // console.log("the flight \n ------- \n")
    // console.log(flight);
    // console.log("\n ------------")
  })
  .set(function (price) {
    this.price = price;
  });

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
