import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Date from '../forms/textFields/Date'
import { useState } from 'react';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '15ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div align = "left">
        <TextField
          required
          id="outlined-search"
          label="Flight Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          //defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-search"
          label="From"
          type="search"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="outlined-search"
          label="To"
          type="search"
          InputLabelProps={{
            shrink: true,
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
        />
      </div>
      
    </Box>
  );
}
