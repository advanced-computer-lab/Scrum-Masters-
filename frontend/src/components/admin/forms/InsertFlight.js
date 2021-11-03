import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';
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
  
  const onChange = e=> setValues(e.target.value);
  
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
      </div>
          </Box>
  );
}
