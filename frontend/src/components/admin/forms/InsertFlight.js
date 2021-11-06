import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DatePicker from 'react-date-picker'
import Button from '@mui/material/Button';
import {useState} from 'react';
<<<<<<< HEAD
import { Axios } from 'axios';
import { Input } from '@mui/material';
import { useEffect } from 'react';

const axios = require('axios').default;


const InsertFlight = () => {
  const [flightNumber, setFlightNumber] = useState(0)
  const [departureTime, setDepartureTime] = useState("")
  const [arrivalTime, setArrivalTime] = useState("")
  const [departureDate, setDepartureDate] = useState("")
  const [arrivalDate, setArrivalDate] = useState("")
  const [departureAirport, setDepartureAirport] = useState("")
  const [arrivalAirport, setArrivalAirport] = useState("")
  const [noOfEconomy, setNoOfEconomy] = useState("")
  const [noOfBusiness, setNoOfBusiness] = useState("")
  const [noOfFirstClass, setNoOfFirstClass] = useState("")
  const [noOfSeats, setNoOfSeats] = useState("")



  const onSubmit = e => {
      e.preventDefault();
      console.log("Hello Lajaleejo")
      let Data = {
          flightNumber ,
          departureTime ,
          arrivalTime,
          departureDate,
          arrivalDate ,
          departureAirport,
          arrivalAirport,
          noOfEconomy,
          noOfBusiness,
          noOfFirstClass,
          //noOfSeats
      }
      console.log(Data);
      
    axios.post('http://localhost:8081/admin/create', Data).then(
     (res) =>{
       console.log(res);

     }
    ).catch(error=> {console.log(error)}
      
    )
      
    }

  return (


      <div >
          <form noValidate onSubmit={onSubmit}
           m= '1'
            width= '25ch'
          >
              {/* onSubmit={this.onSubmit} */}
              <div >
                  <TextField
                      type='String'
                      placeholder='Flight Number'
                      name='flightNumber'
                      //className='form-control'
                      value={flightNumber}
                      onChange={event => { setFlightNumber(event.target.value) }}
                      align='left'
                      m='1'
                      InputLabelProps={{
                        shrink: true,
                      }}


                  />
              </div>
              <br />

              <div >
                  <TextField
                      type='String'
                      placeholder='Departure Time'
                      name='departureTime'
                      //className='form-control'
                      value={departureTime}
                      onChange={event => { setDepartureTime(event.target.value) }}
                      align='left'
                      m='1'
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
              </div>

              <div >
                  <TextField
                      type='String'
                      placeholder='Arrival Time'
                      name='arrivalTime'
                      value={arrivalTime}
                      onChange={event => { setArrivalTime(event.target.value) }}
                      align='center'
                      m='1'
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
              </div>

              <div >
                  <TextField
                      type='Date'
                      placeholder='Departure Date'
                      name='departureDate'
                      value={departureDate}
                      onChange={event => { setDepartureDate(event.target.value) }}
                      align='center'
                      m='1'
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
              </div>

              <div>
                  <TextField
                      type='Date'
                      placeholder='Arrival Date'
                      name='arrivalDate'
                      value={arrivalDate}
                      onChange={event => { setArrivalDate(event.target.value) }}
                      align='center'
                      m='1'
                      InputLabelProps={{
                        shrink: true,
                      }}

                  />
              </div>
              <div >
                  <TextField
                      type='String'
                      placeholder='Departure Airport'
                      name='departureAirport'
                      value={departureAirport}
                      onChange={event => { setDepartureAirport(event.target.value) }}
                      align='center'
                      m='1'
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
              </div>
              <div>
                  <TextField
                      type='String'
                      placeholder='Arrival Airport'
                      name='arrivalAirport'
                      value={arrivalAirport}
                      onChange={event => { setArrivalAirport(event.target.value) }}
                      align='center'
                      m='1'
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
              </div>
              <div >
                  <TextField
                      type='String'
                      placeholder='Number of Economy'
                      name='noOfEconomy'
                      value={noOfEconomy}
                      onChange={event => { setNoOfEconomy(event.target.value) }}
                      align='center'
                      m='1'
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
              </div>
              <div >
                  <TextField
                      type='String'
                      placeholder='Number of Business'
                      name='noOfBusiness'
                      value={noOfBusiness}
                      onChange={event => { setNoOfBusiness(event.target.value) }}
                      align="center"
                      m="1"
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
              </div>

              <div >
                  <TextField
                      type='String'
                      placeholder='Number of First Class'
                      name='noOfFirstClass'
                      
                      value={noOfFirstClass}
                      onChange={event => { setNoOfFirstClass(event.target.value) }}
                      align='center'
                      m='1'
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
              </div>

              <div c>
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
              </div>



              <input
                  type="submit"

              />
          </form>


=======
export default function FormPropsTextFields() {
  
  const [values, setValues] = useState({
    flightNumber:'',
    departureTime:'',
    arrivalTime:'',
    departureDate:'',
    arrivalDate:'',
    departureAirport:'',
    arrivalAirport:'',
    noOfEconomy:'',
    noOfBusiness:'',
    noOfFirstClass:'',
  });
  
  const onChange = e => {setValues({...values,[e.target.name]: e.target.value})
                console.log(values)
};
  
  const onSubmit = ()=> console.log(values);
  return (
    <Box style = {{marginTop:70}}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div align="center">
            <div>
        <TextField
          required
          id="outlined-search"
          name="flightNumber"
          label="Flight Number"
          type="number"
          onChange = {onChange}
        />
            </div>
            <div> 
        <TextField
          required
          id="outlined-search"
          name = "departureAirport"
          label="From"
          type="search"
          onChange = {onChange}
        />
            </div>
            <div>
        <TextField
          required
          id="outlined-search"
          label="To"
          type="search"
          onChange = {onChange}
        />
            </div>
        {/* <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        /> */}
        <Button variant="contained" color="success" onSubmit = {onSubmit} type = "submit">
        Insert
      </Button>
>>>>>>> ce0a25ec8a1d865d540afc584deebf8ade2e7a6e
      </div>


  )
}



export default InsertFlight
