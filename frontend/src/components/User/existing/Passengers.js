import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import PassengerDeets from '../forms/PassengerDeets';
import Button from '@mui/material/Button';

const Passengers = (props) => {
  console.log('lol', props.noOfPass);
  const [passengers, setPassengers] = useState(
    Array(props.adults + props.children).fill({})
  );
  const handlePassengers = (passenger, index) => {
    var newPassengers = passengers;
    newPassengers[index] = passenger;
    setPassengers(newPassengers);
    props.handleTravellers(passengers);
  };
  const style = {
    position: 'left',

    height: 500,
    width: 900,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 12,
    p: 4,
    align: 'center',

    location: 'center',
    position: 'relative',
    top: '100px',
    right: '60%',
    left: '20%',
  };
  const dynamicRender = () => {
    var l = [];
    for (let m = 0; m < props.adults; m++) {
      l.push(
        <PassengerDeets
          index={m}
          handlePassengers={handlePassengers}
          type="adult"
          cabin={props.cabin}
        />
      );
    }
    for (let m = 0; m < props.children; m++) {
      l.push(
        <PassengerDeets
          index={m + props.adults}
          handlePassengers={handlePassengers}
          type="child"
          cabin={props.cabin}
        />
      );
    }
    return l;
  };

  return (
    <div>
      {' '}
      <Container>
        <Box component='form' id='passenger-form' onSubmit={props.handleNext}>
          <div>{dynamicRender()}</div>
          <div>
            <input
              required
              type='checkbox'
              id='designillustration'
              name='medium'
              required
              marginTop='5px'
            />

            <span>
<<<<<<< HEAD
              I hereby confirm that provided information is accurate as
              represented on official documents of ticket carrier(s).
=======
             I hereby confirm that provided information is accurate as
            represented on official documents of each ticket carrier.
>>>>>>> dev
            </span>
          </div>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
            style={{ float: 'right' }}
          >
            <Button color='inherit' onClick={props.handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Button
              // onSubmit={props.handleNext}
              // onClick={props.handleNext}
              type='submit'
            >
              Next
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Passengers;
