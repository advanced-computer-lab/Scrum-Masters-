const mongoose = require("mongoose");
const Flight = require('./Flight');

const TicketSchema = mongoose.Schema({

    seatNum:{
        type:Number,
        required:true,
        unique:true //(?)
    },
    ticketType:{
        type:String,
        enum:["departing","return"],
        required:true
    },
    passengerType:{
        type:String,
        enum:["adult","child"],
        required:true
    },
    cabinClass:{
        type:String,
        enum:["business","economy","first class"],
        required:true
    },
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    // price:{
    //     type:Number,
    //     default: setPrice(this.parent().departingFlight.id,this.parent().returnFlight.id)
    // }



},{ toJSON: { virtuals: true }, toObject: { virtuals: true } })
//failed trial
//  function setPrice(departingFlightId,returnFlightId) {
//     try {
//         var flight={};
//         if(this.ticketType === "departing"){
//             flight =  Flight.findById(departingFlightId)
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
    
//     // console.log("the flight \n ------- \n")
//     // console.log(flight);
//     // console.log("\n ------------")
    
// }     

// deriving the price 
// TicketSchema
//   .virtual("price")
//   .get(async function () {
//     try {
//         var flight={};
//         if(this.ticketType === "departing"){
//             flight = await Flight.findById(this.parent().departingFlight.id)
//         }
//         else{
//             flight = await Flight.findById(this.parent().returnFlight.id)
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
    
//     // console.log("the flight \n ------- \n")
//     // console.log(flight);
//     // console.log("\n ------------")
    
// })
//   .set(function (price) {
//     this.price = price;
//   });


const Ticket = mongoose.model("Ticket", TicketSchema);
module.exports = Ticket;