import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useState } from 'react';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { InputLabel
 } from '@mui/material';
 import { Select } from '@mui/material';
 import { MenuItem } from '@mui/material';
 import { FormControl } from '@mui/material';
 import DatePicker from '@mui/lab/DatePicker';
 import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

//Ask Ahmed Serry how to pass Data
const PassengerDeets = (props) => {
  const [expanded, setExpanded] = React.useState(true); //props.index===0
  const [values, setValues] = useState({
    type: props.type,
    cabin: props.cabin,
  });
  const [gender, setGender] = React.useState('');
  const [value, setValue] = React.useState(new Date());

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const onChange = async (e, name) => {
    if (e) {
      try {
        console.log(e);
        if (e.target) {
          if (e.target.name === 'passportNumber') {
            await setValues({
              ...values,
              [e.target.name]: e.target.value.toUpperCase(),
            });
          } else {
            if (e.target.name === 'firstName' || e.target.name === 'lastName') {
              await setValues({
                ...values,
                [e.target.name]:
                  e.target.value.charAt(0).toUpperCase() +
                  e.target.value.substring(1),
              });
            } else
              await setValues({ ...values, [e.target.name]: e.target.value });
          }
          props.handlePassengers(values, props.index);
        } else {
          await setValues({ ...values, [name]: e });
        }
        await console.log('update', values);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(!expanded);
  };
 

  return (
    <Box>
      <Accordion
        expanded={expanded}
        onChange={handleChange('panel1')}
        spacing={4}
        sx={{
          margin: '10px',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
            <Typography
              sx={{
                width: "6%",
                flexShrink: 0,
                fontWeight: "bold",
                display: "inline",
              }}
            >
              {props.type.charAt(0).toUpperCase() + props.type.substring(1)},
            </Typography>
            <Typography
              sx={{
                width: "5%",
                flexShrink: 0,
                display: "inline",
              }}
            >
              {props.cabin.charAt(0).toUpperCase() + props.cabin.substring(1)}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction="row" justifyContent="center" spacing={12}>
              <Stack direction="column" spacing={3} width="25%">
                <TextField
                  required
                  height="5px"
                  width="200px"
                  backgroundcolor="#f2f2f2"
                  type="String"
                  position="left"
                  placeholder="First Name"
                  variant="filled"
                  label="First Name"
                  name="firstName"
                  defaultValue={values.firstName}
                  onChange={onChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                {/* <TextField
                  required
                  backgroundcolor="#f2f2f2"
                  type="Radio Button"
                  placeholder="Gender"
                  label="Gender"
                  variant="filled"
                  name="gender"
                  defaultValue={values.gender}
                  onChange={onChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> */}
                 <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel required  id="demo-simple-select-filled-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={gender}
          onChange={handleGenderChange}
          placeholder='Gender'
          label="Gender"
          required
        >
          
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
              </Stack>

              <Stack direction="column" spacing={3} width="25%">
                <TextField
                  required
                  backgroundcolor="#f2f2f2"
                  type="String"
                  placeholder="Last Name"
                  label="Last Name"
                  variant="filled"
                  name="lastName"
                  defaultValue={values.lastName}
                  onChange={onChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  required
                  backgroundcolor="#f2f2f2"
                  type="String"
                  placeholder="Passport Number"
                  label="Passport Number"
                  variant="filled"
                  name="passportNumber"
                  defaultValue={values.passportNumber}
                  onChange={onChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
              <Stack direction="column" spacing={3} width="25%">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
           
        <DesktopDatePicker
          label="Date of Birth"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
          maxDate={new Date()}
          variant='filled'
          inputVariant={"filled"}


        />
                </LocalizationProvider>
              </Stack>
            </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default PassengerDeets;