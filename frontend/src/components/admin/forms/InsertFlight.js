import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DatePicker from 'react-date-picker'
import Button from '@mui/material/Button';
import {useState} from 'react';
import { Axios } from 'axios';
import { Input } from '@mui/material';
import { useEffect } from 'react';
import Stack from "@mui/material/Stack";

const axios = require('axios').default;


const InsertFlight = () => {
  const [flightNumber, setFlightNumber] = useState(0)
  const [departureTime, setDepartureTime] = useState("")
  const [arrivalTime, setArrivalTime] = useState("")
  const [departureDate, setDepartureDate] = useState("")
  const [arrivalDate, setArrivalDate] = useState("")
  const [departureAirport, setDepartureAirport] = useState("")
  const [arrivalAirport, setArrivalAirport] = useState("")
  const [noOfEconomy, setNoOfEconomy] = useState(0)
  const [noOfBusiness, setNoOfBusiness] = useState(0)
  const [noOfFirstClass, setNoOfFirstClass] = useState(0)
  const [noOfSeats, setNoOfSeats] = useState(0)



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
       console.log("YAAAAY INSERTION COMPLETE!!")
     }
    ).catch(error=> {console.log(error)}
      
    )
      
    }

  return (


      <div >
          <form noValidate onSubmit={onSubmit}>
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
                      margin='2.5'
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
                      label="Departure date"
                      name='departureDate'
                      value={departureDate}
                      onChange={event => { setDepartureDate(event.target.value) }}
                      align='center'
                      margin='2.5'
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
                      placeholder='Number of Economy Seats'
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
                      placeholder='Number of Business Seats'
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
                  {/* <TextField */}
                      {/* type='String' */}
                      {/* placeholder='Number of Seats' */}
                      {/* name='noOfSeats' */}

                      {/* value={noOfSeats} */}
                      {/* onChange={event => { setNoOfSeats(event.target.value) }} */}
                      {/* align='center' */}
                      {/* m='1' */}
                      {/* InputLabelProps={{ */}
                        {/* shrink: true, */}
                      {/* }} */}
                  {/* /> */}
              </div>



              <input
                  type="submit"

              />
          </form>


      </div>


  )
}



export default InsertFlight
