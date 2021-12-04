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
import { UseState, useEffect} from "react";
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
import PassengerDeets from './forms/PassengerDeets';




//const message = `Truncation should be conditionally applicable on this long line of text
 //as this is a much longer line than what the container can support. `;

const axios = require("axios").default;

const PassInfo = ({noOfPass,maram}) => {
 
  // var serry=noOfPass+2;
  console.log("lol",noOfPass);
  //var j="maram";
  // var  i=8;
   const[forms,setNoOfForms]=React.useState(noOfPass.noOfPass);
   const [open, setOpen] = React.useState(false);
   const [checked, setChecked] = React.useState(false);
   const [expanded, setExpanded] = React.useState(false);
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [gender, setGender] = useState("");
   const [passportNumber, setPAssportNumber] = useState("");
   const [dateOfBirth, setDateOfBirth] = useState(new Date());
   const  myObj = {"firstName":firstName,"lastName":lastName,"Gender":gender,"dateOfBirth":dateOfBirth};
   useEffect(() => {maram(myObj)}, []);

   
   //maram(myObj);

    
   console.log(myObj);
   
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  <Stack direction="row" spacing={30} style={{ marginTop: "30px" }}>
  <Stack direction='column' spacing={3} height="200px" width="300px">
  <TextField
      required
      height="5px"
      width="200px"
      backgroundcolor="#f2f2f2"
      type="String"
      position="left"
      placeholder='firstName'
      variant="filled"
      label="First Name"
      name="First Name"
      value={firstName}
     onChange={(event) => {
      setFirstName(event.target.value);
      maram(myObj);
    }}
     
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
      value={gender}
      onChange={(event) => {
        setGender(event.target.value);
        maram(myObj);
      }}
     // InputLabelProps={{
      //  shrink: true,
     // }}
       /> 
      
       </Stack>
      
       <Stack direction ='column' spacing={3} height="300px" width="350px">  
      <TextField
      required
      backgroundcolor="#f2f2f2"
      type="String"
       placeholder='Last Name'
      label="Last Name"
      variant="filled"
      name="lastName"
      value={lastName}
      onChange={(event) => {
        setLastName(event.target.value);
        maram(myObj);
      }}
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
     value={passportNumber}
     onChange={(event) => {
      setPAssportNumber(event.target.value);
      maram(myObj);
    }}
     // InputLabelProps={{
     //   shrink: true,
     // }}
      />
       </Stack>
      < Stack direction="column" spacing={4}>
      <TextField
      required
      backgroundcolor="#f2f2f2"
      type="Date"
      // placeholder=''
      //label="Date Of Birth"
      variant="filled"
      name="dateOfBirth"
      value={dateOfBirth}
      onChange={(event) => {
        setDateOfBirth(event.target.value);
        maram(myObj);
       
      }}
     //  } }
     // InputLabelProps={{
      //  shrink: true,
     // }}
       /> 
       </Stack>
      
       
       </Stack>
       <div>
        <input type="checkbox" id= "designillustration" name="medium" required marginTop="5px" />
        
         <span>I hereby confirm that provided information is accurate as represented on official documents of ticket carrier</span>
      </div>
       
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

     const dynamicRender = (forms) => {
      var l=[];
      console.log(noOfPass);
      for(let m=0; m<forms; m++){
         l.push(<PassengerDeets>
          </PassengerDeets>)
          }
      return  l;
    }
  
    
    return(
    
    
           
    
    
    

     <Container >
        <Box  > Who's Traveling*/
        <div>
        {dynamicRender(forms)}
        </div>
          </Box>
          </Container>
            
           
           
           
      
       
    )        
    
    
   
    
};

export default PassInfo;



