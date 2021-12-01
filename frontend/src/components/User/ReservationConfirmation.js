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
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlightIcon from '@mui/icons-material/Flight';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import TodayIcon from '@mui/icons-material/Today';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
//import FlightClassIcon from '@mui/icons-material/FlightClass';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
//import { Modal } from "bootstrap";
import { UseState } from "react";
import { ReactDOM } from "react";
import { StyledComponent } from "@mui/styled-engine";
import {Modal} from '@mui/material/';
import { styled } from '@mui/material/styles';
import EventSeatIcon from '@mui/icons-material/EventSeat';





//const message = `Truncation should be conditionally applicable on this long line of text
 //as this is a much longer line than what the container can support. `;

const axios = require("axios").default;

const BookTicket = () => {
  
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const showAlert = () => {
   setOpen(true);
 };
 //const onclose = () => {
   //setOpen(false);
   //return false;
 //};
   const style = {
      position: 'left',
     
      height:500,
      width: 900,
      bgcolor: 'white',
      border: '2px solid #000',
      boxShadow: 12,
      p: 4,
      align:'center',
      
      location: "center",
     position: "relative",
       top: "100px",
          right: "60%",
          left: "20%",
    };
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    return (
      
   

       <Container>

          <Box>
          
     
          
          <Modal open={open} onClose={handleClose}
          
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
   <div>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2"
    fontFamily= "cursive"
    fontSize= "5">
      Pending Reservation
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       <Box sx={{ width: '100%' }}> 
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
          <TodayIcon />
             Departure Flight Date
             </Item>
        </Grid>
        <Grid item xs={6}>
          <Item position="relative">
             
          <AccessTimeIcon position='relative' /> 
          
          Departure Flight Time </Item>
          
        </Grid>
        <Grid item xs={6}>
          <Item>
          <TodayIcon />
          Return Flight Date</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <AccessTimeIcon/>
          Return Flight Time</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
             <AirlineSeatReclineNormalIcon/>
             Chosen Seats</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
             <EventSeatIcon/>
            Class Cabin</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <FlightIcon/>
          Flight Number</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
         < ConfirmationNumberIcon/> Number of Tickets</Item>
        </Grid>
        <Grid item xs={6} >
          <Item>
             <AttachMoneyIcon/>
             Total Price of Reservation
             </Item>
        </Grid>
      

      </Grid>
      </Box>
      <Button
         type="SUBMIT"
         style={{
            padding: "5px",
            label: "add flight",

            backgroundColor: "#5e60ce",
            border: "0 none",
            cursor: "pointer",
            borderBlock: "5px",
            color: "white",
            fontFamily: "cursive",
            fontSize: "5",
            width: "135px",
            height: "60px",

            margin: 0,

            align: "center",
            location: "center",
            position: "relative",
            top: "25px",
            right: "60%",
            left: "40%",
            variant: "fill",
         }}
         >
       Confirm Reservation
      </Button>
    </Typography>
  </Box>
  </div>
      </Modal>
    

       <Button
          type="SUBMIT"
          aria-label="Add"
          onClick={handleOpen}
          style={{
             padding: "5px",
             label: "add flight",

             backgroundColor: "#5e60ce",
             border: "0 none",
             cursor: "pointer",
             borderBlock: "5px",
             color: "white",
             fontFamily: "cursive",
             fontSize: "5",
             width: "135px",
             height: "60px",

             margin: 0,

             align: "center",
             location: "center",
             position: "relative",
             top: "25px",
             right: "60%",
             left: "1%",
             variant: "fill",
          }}
       >Confirm Reservation</Button>
       </Box>
       </Container>
       
    );
};

export default BookTicket;



