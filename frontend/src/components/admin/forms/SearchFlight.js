import * as React from 'react';
import TextField from '@mui/material/TextField';
import Date from '../forms/textFields/Date';
import Time from '../forms/textFields/Time';
import axios from 'axios';
import Search from '../buttons/Search';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';
export default function FormPropsTextFields({ onSubmit, onChange }) {
  return (
    <Stack
      direction='row'
      spacing={2}
      style={{ marginTop: '10px' }}
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 2, width: '20ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined-search'
        label='Flight Num'
        type='number'
        name='flightNumber'
        onChange={onChange}
        style={{ width: '150px' }}
        //defaultValue="Hello World"
      />
      <TextField
        id='outlined-search'
        label='From'
        type='search'
        name='departureAirport'
        /*InputLabelProps={{
            shrink: true,
          }}*/
        //style= {{width:'150px'}}
        onChange={onChange}
      />
      <TextField
        id='outlined-search'
        label='To'
        type='search'
        name='arrivalAirport'
        //style= {{width:'150px'}}
        onChange={onChange}
      />
      <TextField
        id='outlined-search'
        label='Departure Date'
        type='date'
        InputLabelProps={{
          shrink: true,
        }}
        name='departureDate'
        onChange={onChange}
      />
      <TextField
        id='outlined-search'
        label='Arrival Date'
        type='date'
        InputLabelProps={{
          shrink: true,
        }}
        name='arrivalDate'
        onChange={onChange}
      />
      <TextField
        id='outlined-search'
        label='Departure Time'
        type='time'
        InputLabelProps={{
          shrink: true,
        }}
        name='departureTime'
        onChange={onChange}
      />
      <TextField
        id='outlined-search'
        label='Arrival Time'
        type='time'
        InputLabelProps={{
          shrink: true,
        }}
        name='arrivalTime'
        onChange={onChange}
      />
      <Tooltip title='Search' arrow placement='right'>
        <IconButton
          aria-label='delete'
          onClick={onSubmit}
          type='submit'
          size='large'
          style={{ color: 'green' }}
        >
          <SearchIcon style={{ fontSize: 45 }} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
