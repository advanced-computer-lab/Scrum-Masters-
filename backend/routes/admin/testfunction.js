const Flight = require('../../Models/Flight')
function setPrice(departingFlightId,returnFlightId) {
    try {
        var flight={};
        if(this.ticketType === "departing"){
            flight =  Flight.findById(departingFlightId)
        }
        else{
            flight =  Flight.findById(returnFlightId)
        }
        console.log("the filght details\n" + flight + " ------ \n");
        if(this.passengerType === "adult"){
            switch(this.cabinClass){
                case "business": return flight.business.adultPrice;
                case "economy": return flight.economy.adultPrice;
                case "first class": return flight.firstClass.adultPrice;
            }
        }
        else{ //child
            switch(this.cabinClass){
                case "business": return flight.business.childPrice;
                case "economy": return flight.economy.childPrice;
                case "first class": return flight.firstClass.childPrice;
            }
        }    
    } catch (error) {
        console.log(error)
    }
    
    // console.log("the flight \n ------- \n")
    // console.log(flight);
    // console.log("\n ------------")
    
}