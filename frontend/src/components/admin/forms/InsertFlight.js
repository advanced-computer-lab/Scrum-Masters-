import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DatePicker from 'react-date-picker';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Axios } from 'axios';
import { Alert, Input } from '@mui/material';
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { positions } from '@mui/system';
import { makeStyles } from '@mui/material';
import { Container } from 'react-bootstrap';
// import { Alert } from '@mui/material';


const axios = require('axios').default;

const InsertFlight = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [noOfEconomy, setNoOfEconomy] = useState("");
  const [noOfBusiness, setNoOfBusiness] = useState("");
  const [noOfFirstClass, setNoOfFirstClass] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Hello Lajaleejo");
    let Data = {
      flightNumber,
      departureTime,
      arrivalTime,
      departureDate,
      arrivalDate,
      departureAirport,
      arrivalAirport,
      noOfEconomy,
      noOfBusiness,
      noOfFirstClass,
      //noOfSeats
    };
    console.log(Data);

    axios
      .post("http://localhost:8081/admin/create", Data)
      .then((res) => {
        console.log(res);
        
      } , Alert
      )
      .catch((error) => {
        console.log(error);
      });
  };
  //export onSubmit;

 
  return (
     <Container >

    <Box
     
    component="form"
    sx={{ 
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    // onSubmit={onSubmit}
    autoComplete="off"
  > 
  {/* <Container> */}
   <Stack direction='row' spacing={5} style={{ marginTop: '10px' , marginLeft:'30%', marginRight:'35%'}}> 

    <Stack direction='column' spacing={3} style={{ marginTop: '10px' }} >
      {/* <div >
          <form noValidate onSubmit={onSubmit}
           */}


      {/* onSubmit={this.onSubmit} */}
      <div>
        
        <TextField
         required
          type='Number'
          // placeholder='Flight Number'
          variant='standard'
          label='Flight Number'
          name='flightNumber'
          //className='form-control'
          value={flightNumber}
          onChange={(event) => {
            setFlightNumber(event.target.value);
          }}
         
          // align=''
          // position='relative'
          //m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      

      <div>
        <TextField
        required
          type='time'
          // placeholder='Departure Time'
          label="Departure Time"
          variant='standard'
          name='departureTime'
          //className='form-control'
          value={departureTime}
          onChange={(event) => {
            setDepartureTime(event.target.value);
          }}
          //  error={value=== null}
          //  helperText={value=== null? 'Please enter a value!' : ' '}
          // align='left'
          // position="relative"
          // m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div>
        <TextField
        required
          type='time'
          label="Arrival Time"
          variant='standard'
          // placeholder='Arrival Time'
          name='arrivalTime'
          value={arrivalTime}
          onChange={(event) => {
            setArrivalTime(event.target.value);
          }}
          // align='left'
          // m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      
      <div>
        <TextField
        
        required
          type='Date'
          // placeholder='Departure Date'
          name='departureDate'
          variant='standard'
          label="Departure Date"
          value={departureDate}
          onChange={(event) => {
            setDepartureDate(event.target.value);
          }}
          // align='left'
          // m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div>
        <TextField 
        required
          type='Date'
          placeholder='Arrival Date'
          variant='standard'
          
          label="Arrival Date"
          name='arrivalDate'
          value={arrivalDate}
          onChange={(event) => {
            setArrivalDate(event.target.value);
          }}
         // multiline
          // align='center'
          // m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Stack>

    <Stack direction='column' spacing={3} style={{ marginTop: '10px' }} >
      <div>
        <TextField
        required
          type='String'
          placeholder='Departure Airport'
          variant='standard'
          label='Departure Airport'
          name='departureAirport'
          value={departureAirport}
          onChange={(event) => {
            setDepartureAirport((event.target.value).toUpperCase());
          }}
          // align='center'
          // m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <TextField
        required
          type='String'
          // placeholder='Arrival Airport'
          variant='standard'
          label='Arrival Airport'
          name='arrivalAirport'
          value={arrivalAirport}
          onChange={(event) => {
            setArrivalAirport((event.target.value).toUpperCase());
          }}
          // align='center'
          // m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <TextField
        required
        label='Number of Economy'
          variant='standard'
          label='Number of Economy Seats'
          type='Number'
          // placeholder='Number of Economy'
          name='noOfEconomy'
          value={noOfEconomy}
          onChange={(event) => {
            setNoOfEconomy(event.target.value);
          }}
          // align='center'
          // m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <TextField
        required
          type='Number'
        
          variant='standard'
          label='Number of Business Seats'
          // placeholder='Number of Business'
          name='noOfBusiness'
          value={noOfBusiness}
          multiline
          onChange={(event) => {
            setNoOfBusiness(event.target.value);
          }}
          // align='center'
          // m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div>
        <TextField
        required
          type='Number'
          variant='standard'
          label='Number of First Class Seats'

          // placeholder='Number of First Class'
          name='noOfFirstClass'
          value={noOfFirstClass}
          onChange={(event) => {
            setNoOfFirstClass(event.target.value);
          }}
          // align='center'
          // m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      </Stack>
      </Stack>
      <div>
      <Button 
      onClick={onSubmit} validation='required'
      
      style={{
        
        outlineColor:'transparent',
        color:'white',
        width:'135px',
        height:'60px', 
        backgroundColor:'#5e60ce',
        marginTop:'20px', 
        label:'Add Flight!', 
        fontFamily:'cursive',
        padding: '20px',
        outline:'green',
        
        
        
        
        
        }}
      hover={{color:'purple'}}
      > Add Flight</Button>
      </div>
      {/* <Button onClick={onSubmit} color="blue" variant="outlined" label="HI!!">  */}
      
      {/* </Button> */}
      {/* <div>
                  <TextField
                  type='String'
                       placeholder='Number of Seats' 
                       name='noOfSeats' 

                      value={noOfSeats} 
                      onChange={event => { setNoOfSeats(event.target.value) }} 
                      align='center' 
                       m='1' 
                       InputLabelProps={{ 
                        shrink: true,
                      }}
                  />
              </div> */}

       {/* <input type='SUBMIT' aria-label='Add'  */}
       
        
        {/* style={{color:"black", padding:'5px', */}
        {/* //label:'add flight', */}

        {/* backgroundColor:'#5e60ce', */}
        {/* border:'0 none', */}
        {/* cursor:'pointer', */}
        {/* // webkit-border-radius: '5px', */}
        {/* borderBlock:'5px', */}
        {/* color: 'white', */}
        {/* fontFamily:'cursive' , */}
        {/* fontSize:'5', */}
        {/* width: '135px', */}
        {/* height: '60px', */}
         {/* border: 0, */}
         {/* margin: 0, */}
         {/* padding: 0, */}
         {/* align:'center', */}
         {/* location:'center', */}
         {/* position:'relative', */}
         {/* top:'25px', */}
          {/* right:'50%', */}
          {/* left: '45%', */}
          {/* variant:'fill' */}
         {/* }} */}
       {/* //onClick={onSubmit} */}
       
       {/* />   */}
      {/* <Button type="submit" size="lg" onSubmit='onSubmit' onClick='onSubmit'></Button> */}
      {/* </form>


      </div> */}
      
   
   
  
   
  </Box> 
  </Container> 
  
  ) }

export default InsertFlight;
