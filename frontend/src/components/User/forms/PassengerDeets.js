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

//Ask Ahmed Serry how to pass Data
const PassengerDeets = (props) => {
  const [expanded, setExpanded] = React.useState(true); //props.index===0
  const [values, setValues] = useState({
    type: props.type,
    cabin: props.cabin,
  });
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

                <TextField
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
                />
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
                <TextField
                  required
                  backgroundcolor="#f2f2f2"
                  type="Date"
                  // placeholder=''
                  label="Date Of Birth"
                  variant="filled"
                  defaultValue={values.dateOfBirth}
                  name="dateOfBirth"
                  onChange={onChange}
                  //  } }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{inputProps: { min: "1898-12-24", max: "2021-12-21"} }}
                />
              </Stack>
            </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default PassengerDeets;