import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContentText } from "@mui/material";
//import Ticket from "../../../../backend/Models/Ticket";
//import Reservation from "../../../../backend/Models/Reservation";
//import * as React from 'react';
//mport Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlightIcon from "@mui/icons-material/Flight";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import TodayIcon from "@mui/icons-material/Today";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
//import FlightClassIcon from '@mui/icons-material/FlightClass';
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
//import { Modal } from "bootstrap";
import { UseState } from "react";
import { ReactDOM } from "react";
import { StyledComponent } from "@mui/styled-engine";
import { Modal } from "@mui/material/";
import { styled } from "@mui/material/styles";
import EventSeatIcon from "@mui/icons-material/EventSeat";
//import { Invoice } from 'react-simple-invoice';
import Dropdown from "react-bootstrap/Dropdown";
import Input from "@mui/material/Input";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import PersonIcon from '@mui/icons-material/Person';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ViewFlightSummary = ({ input1, input2 }) => {
    console.log("FlightSummaryInput1",input1);
    console.log("FlightSummaryInput2",input2);
    var x=0;

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  /* const [inputFields, setInputField] = useState([{ FirstName: '', LastName : '', PassportNumber: '', Gender:'',DateOfBirth:''}]) 
  const showAlert = () => {
   setOpen(true);
 };*/
 
      
  

 

  return (
    <>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       
        <Grid item xs={6}>
            <Item>
              <FlightIcon />
             Departure Trip Flight Number{}:{input1.flight.flightNumber}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <TodayIcon />
              Departure Flight Trip Date:{input1.details.departureDate}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item position="relative">
              <AccessTimeIcon position="relative" />
              Departure Flight Time{" "}:{input1.flight.departureTime}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item position="relative">
              
              Departure Airport{" "}:{input1.flight.departureAirport}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item position="relative">
             
              Arrival Airport{" "}:{input1.flight.arrivalAirport}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
            <FlightIcon />
              Return Trip Flight Number{}:{input2.flight.flightNumber}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>

              <TodayIcon />
              Return Flight Date{""}:{input2.flight.departureDate}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <AccessTimeIcon />
              Return Flight Time{}:{input2.flight.departureTime}
            </Item>
          </Grid>
         
          
          <Grid item xs={6}>
            <Item>
              <PersonIcon />
             Number of Adults{}:{input1.details.noOfAdults}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
            <PersonIcon />
             Number of Children{}:{input1.details.noOfChildren}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <ConfirmationNumberIcon /> Total Number of Tickets per reservation:{input1.details.noOfAdults+input1.details.noOfChildren+input2.details.noOfAdults+input2.details.noOfChildren }
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <EventSeatIcon />
              Class Cabin:{input1.details.cabin}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <AttachMoneyIcon />
              Total Price of Reservation:{""}
            </Item>
          </Grid>
        </Grid>
        
        <Popup trigger={<Button> Confirm & proceed to choose seats</Button>} position="right center">
            
        <div>Popup content here !!</div>
         </Popup>
        
        
      </Container>
    </>
  );
};

export default ViewFlightSummary;
