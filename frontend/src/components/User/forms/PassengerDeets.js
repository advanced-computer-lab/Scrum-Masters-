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
//import { Invoice } from 'react-simple-invoice';
import Dropdown from 'react-bootstrap/Dropdown';
import Input from "@mui/material/Input";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';



const PassengerDeets = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



return(
<Box  >
          <form>
           
           
          
            
         
         <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} spacing={4} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Passenger Info
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Stack direction="row" spacing={3} style={{ marginTop: "30px" }}>
        <Stack direction='column' spacing={3}>
        <TextField
            required
            backgroundcolor="#f2f2f2"
            type="String"
            position="left"
            placeholder='firstName'
            variant="filled"
            label="First Name"
            name="First Name"
           // value={}
           // onChange={(event) => {
            //  setFlightNumber(event.target.value);
           // } }
           // InputLabelProps={{
             // shrink: true,
            //}}
             />
             <TextField
            required
            backgroundcolor="#f2f2f2"
            type="Text"
             placeholder='Gender'
            label="Gender"
            variant="filled"
            name="Gender"
           //value={}
           // onChange={(event) => {
            //  setDepartureTime(event.target.value);
            //} }
           // InputLabelProps={{
            //  shrink: true,
           // }}
             /> 
             </Stack>
            
             <Stack direction ='column' spacing={3}>  
            <TextField
            required
            backgroundcolor="#f2f2f2"
            type="String"
             placeholder='Last Name'
            label="Last Name"
            variant="filled"
            name="lastName"
          // value={}
           // onChange={(event) => {
            //  setDepartureTime(event.target.value);
            //} }
           // InputLabelProps={{
           //   shrink: true,
           // }}
            />
           
            
            <TextField
            required
            backgroundcolor="#f2f2f2"
            type="String"
             placeholder='Last Name'
            label="Passport Number"
            variant="filled"
            name="passportNumber"
          // value={}
           // onChange={(event) => {
            //  setDepartureTime(event.target.value);
            //} }
           // InputLabelProps={{
           //   shrink: true,
           // }}
            />
             </Stack>
             
          
            
             </Stack>
             
          <Typography>
           
          </Typography>
        
        
          
        </AccordionDetails>
      </Accordion>
         
    
             
            
            <div >
            
            
          </div>
          
             </form>
             </Box>

              
)

}
export default  PassengerDeets;