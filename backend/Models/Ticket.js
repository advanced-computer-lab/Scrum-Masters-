const mongoose = require("mongoose");
const Flight = require("./Flight");

const ticketSchema = mongoose.Schema(
  {
    seatNum: {
      type: String,
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
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String, 
      required: true,
    },
    cabin: {
      type: String,
      enum: ["first", "business", "economy"],
      required: true,
    },

    //extra

    flightId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
      required: true,
    },
    reservationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservation",
      required: true,
    },

    price: {
      type: Number,
    },
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
// ticketSchema
//   .virtual("price")
//   .get(async function () {
//     console.log("virtual price hi");

//       console.log("line 89");
//       const flight = await Flight.findById(mongoose.Types.ObjectId(this.flightNumber))
//         //.then((flight) => {
//           console.log("line 92");
//           console.log("the filght details\n" + flight + " ------ \n");
//           console.log("line 95");
//           if (this.passengerType === "adult") {
//             switch (this.cabinClass) {
//               case "business":
//                 return flight.business.adultPrice;
//               case "economy":
//                 return flight.economy.adultPrice;
//               case "first class":
//                 return flight.firstClass.adultPrice;
//             }
//           } else {
//             //child
//             switch (this.cabinClass) {
//               case "business":
//                 return flight.business.childPrice;
//               case "economy":
//                 return flight.economy.childPrice;
//               case "first class":
//                 return flight.firstClass.childPrice;
//             }
//           }
//         // })
//         // .catch((err) => console.log(err));

//     // console.log("the flight \n ------- \n")
//     // console.log(flight);
//     // console.log("\n ------------")
//   })
//   .set(function (price) {
//     this.price = price;
//   });

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
