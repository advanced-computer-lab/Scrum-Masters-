import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DatePicker from 'react-date-picker';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Axios } from 'axios';
import { Input } from '@mui/material';
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { positions } from '@mui/system';
import { makeStyles } from '@mui/material';
import { Container } from 'react-bootstrap';

const axios = require('axios').default;

const InsertFlight = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [noOfEconomy, setNoOfEconomy] = useState('');
  const [noOfBusiness, setNoOfBusiness] = useState('');
  const [noOfFirstClass, setNoOfFirstClass] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Hello Lajaleejo');
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
      .post('http://localhost:8081/admin/create', Data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 
  return (
    <Container >

    <Box
     
    component="form"
    sx={{ 
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  > 
  <Container>
    {/* <Stack  spacing={2} style={{ marginTop: '10px' }}> */}
    <Stack direction='column' spacing={2} style={{ marginTop: '10px' }}>
      {/* <div >
          <form noValidate onSubmit={onSubmit}
           */}


      {/* onSubmit={this.onSubmit} */}
      <div>
        
        <TextField
         required
          type='String'
          placeholder='Flight Number'
          
          name='flightNumber'
          //className='form-control'
          value={flightNumber}
          onChange={(event) => {
            setFlightNumber(event.target.value);
          }}
          align=''
          position='relative'
          //m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <br />

      <div>
        <TextField
        required
          type='time'
          placeholder='Departure Time'
          label="Departure Time"
          name='departureTime'
          //className='form-control'
          value={departureTime}
          onChange={(event) => {
            setDepartureTime(event.target.value);
          }}
          align='left'
          position="relative"
          m='1'
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
          placeholder='Arrival Time'
          name='arrivalTime'
          value={arrivalTime}
          onChange={(event) => {
            setArrivalTime(event.target.value);
          }}
          align='left'
          m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      </Stack>
      
      
        <TextField
        
        required
          type='Date'
          placeholder='Departure Date'
          name='departureDate'
          label="Departure Date"
          value={departureDate}
          onChange={(event) => {
            setDepartureDate(event.target.value);
          }}
          align='left'
          m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      

      <div>
        <TextField 
        
        required
          type='Date'
          placeholder='Arrival Date'
          label="Arrival Date"
          name='arrivalDate'
          value={arrivalDate}
          onChange={(event) => {
            setArrivalDate(event.target.value);
          }}
         // multiline
          align='center'
          m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />

      </div>
      <Stack direction='column' spacing={2} style={{ marginTop: '10px' }} alignSelf> 
      <div>
        <TextField
        required
          type='String'
          placeholder='Departure Airport'
          name='departureAirport'
          value={departureAirport}
          onChange={(event) => {
            setDepartureAirport(event.target.value);
          }}
          align='center'
          m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <TextField
        required
          type='String'
          placeholder='Arrival Airport'
          name='arrivalAirport'
          value={arrivalAirport}
          onChange={(event) => {
            setArrivalAirport(event.target.value);
          }}
          align='center'
          m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <TextField
        required
          type='String'
          placeholder='Number of Economy'
          name='noOfEconomy'
          value={noOfEconomy}
          onChange={(event) => {
            setNoOfEconomy(event.target.value);
          }}
          align='center'
          m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <TextField
        required
          type='String'
          placeholder='Number of Business'
          name='noOfBusiness'
          value={noOfBusiness}
          multiline
          onChange={(event) => {
            setNoOfBusiness(event.target.value);
          }}
          align='center'
          m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div>
        <TextField
        required
          type='String'

          placeholder='Number of First Class'
          name='noOfFirstClass'
          value={noOfFirstClass}
          onChange={(event) => {
            setNoOfFirstClass(event.target.value);
          }}
          align='center'
          m='1'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

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

       <input type='submit' 
       
        
        style={{color:"silver", padding:'5px',

        backgroundColor:'#7400b8',
        border:'0 none',
        cursor:'pointer',
        // webkit-border-radius: '5px',
        borderBlock:'5px',
        color: 'white',
        fontFamily:'cursive' ,
        fontSize:'5',
        width: '135px',
        height: '60px',
         border: 0,
         margin: 0,
         padding: 0,
         align:'center',
         location:'center',
         position:'relative',
         top:'25px',
          right:'50%',
          left: '45%',
          variant:'fill'
         }}
       onClick={onSubmit}
       
       /> 
      {/* <Button type="submit" size="lg" onSubmit='onSubmit' onClick='onSubmit'></Button> */}
      {/* </form>


      </div> */}
      </Stack>
   
   
  
  </Container>
  </Box> 
  </Container>
  ) }

export default InsertFlight;
