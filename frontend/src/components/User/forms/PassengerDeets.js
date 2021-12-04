import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Checkbox, DialogActions } from "@mui/material";
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


//Ask Ahmed Serry how to pass Data
const PassengerDeets = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [passportNumber, setPAssportNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [expanded, setExpanded] = React.useState(false);
  const [values,setValues]=useState();
  const onChange = async (e) => {
    if (e) {
      try {
        console.log(
          'this is the target value ' +
            e.target.value +
            ' with length ' +
            e.target.value.length
        );
        if (e.target.value.length !== 0) {
         
           await setValues({ ...values, [e.target.name]: e.target.value });
        } else {
          let name = e.target.name;
          delete values[name];
        }
        await console.log(values);
      } catch (error) {
        console.log(error);
      }
    }
  }
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 const  myObj = {"firstName":firstName,"lastName":lastName,"Gender":gender,"dateOfBirth":dateOfBirth};
 const printObj = () =>{
   console.log(myObj);
 }


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
              printObj();
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
export default  PassengerDeets;