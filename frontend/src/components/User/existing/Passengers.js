import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Container } from "react-bootstrap";

import Paper from "@mui/material/Paper";
import PassengerDeets from "../forms/PassengerDeets";
const Passengers = (props) => {
  // var serry=noOfPass+2;
  console.log("lol", props.noOfPass);
  //var j="maram";
  // var  i=8;
  // const[forms,setNoOfForms]=React.useState(props.noOfPass);
  const [passengers, setPassengers] = useState(
    Array(props.adults + props.children).fill({})
  );
  const handlePassengers = (passenger, index) => {
    var newPassengers = passengers;
    newPassengers[index] = passenger;
    setPassengers(newPassengers);
    props.handleTravellers(passengers);
  };
  const style = {
    position: "left",

    height: 500,
    width: 900,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 12,
    p: 4,
    align: "center",

    location: "center",
    position: "relative",
    top: "100px",
    right: "60%",
    left: "20%",
  };
  const dynamicRender = () => {
    var l = [];
    for (let m = 0; m < props.adults; m++) {
      l.push(
        <PassengerDeets
          index={m}
          handlePassengers={handlePassengers}
          type="Adult"
          cabin={props.cabin}
        />
      );
    }
    for (let m = 0; m < props.children; m++) {
      l.push(
        <PassengerDeets
          index={m + props.adults}
          handlePassengers={handlePassengers}
          type="Child"
          cabin={props.cabin}
        />
      );
    }
    return l;
  };

  return (
    <div>
      {" "}
      <Container>
        <Box>
          <div>{dynamicRender()}</div>
        </Box>
        <div>
          <input
            type="checkbox"
            id="designillustration"
            name="medium"
            required
            marginTop="5px"
          />

          <span>
            I hereby confirm that provided information is accurate as
            represented on official documents of ticket carrier(s)
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Passengers;
