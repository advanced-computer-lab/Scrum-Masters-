import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState,useEffect } from "react";
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
//import 'reactjs-popup/dist/index.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '"#5e60ce"',
    boxShadow: 24,
    p: 4,
  };




const ViewFlightSummary = ({ input1, input2, handlePrice }) => {
    console.log("FlightSummaryInput1",input1);
    console.log("FlightSummaryInput2",input2);
    var x=0;
    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
    const [open, setOpen] = React.useState(false);
    const[totalPrice, setTotalPrice]=useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const calculatePrice = () =>{
      var adults=input1.details.noOfAdults;
      var children=input2.details.noOfChildren;
      console.log("calculate");
      var price=0;
    switch(input1.details.cabin){
        case "economy":price=(input2.flight.economy.adultPrice*adults +input2.flight.economy.childPrice*children+input1.flight.economy.adultPrice*adults+input1.flight.economy.childPrice*children);break;
        case "business":price=(input2.flight.business.adultPrice*adults +input2.flight.business.childPrice*children+input1.flight.business.adultPrice*adults +input1.flight.business.childPrice*children);break;
        case "first":price=(input2.flight.firstClass.adultPrice*adults +input2.flight.firstClass.childPrice*children+input1.flight.firstClass.adultPrice*adults +input1.flight.firstClass.childPrice*children);break;    
    }
    console.log("why",price);
    setTotalPrice(price);
    handlePrice(price);

  }

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
 
 useEffect(() => {
   calculatePrice();
  }, []);
  

 

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
          <Grid item xs={6} >
            <Item>
              <EventSeatIcon />
              Class Cabin:{input1.details.cabin}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <AttachMoneyIcon />
              Total Price of Reservation:{totalPrice}
            </Item>
          </Grid>
        </Grid>
        <div>
        <Button onClick={handleOpen}> Confirm & proceed to choose seat

        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" fontFamily="cursive" color="#5e60ce">
            Nope!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} fontFamily="cursive">
           Please Log in before proceeding with your reservation!
           <div>
               <Button >
                   Sign-In
               </Button>
           </div>
          </Typography>
        </Box>
      </Modal>
        </div>
        
        
        
      </Container>
    </>
  );
};

export default ViewFlightSummary;
