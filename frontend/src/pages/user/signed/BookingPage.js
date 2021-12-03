import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import SearchFlight from '../../../components/user/forms/SearchFlight';
import { Container } from 'react-bootstrap';
import FlightReservation from '../../../components/user/FlightReservation';

const BookingPage = (props) => {
  
  
  console.log("in BookingPage props",props)
  const [departureData, setDepartureData] = useState(props.props[0]); //contains data of all departing flights that the user can choose from
  console.log("in BookingPage",departureData)
  const [arrivalData, setArrivalData] = useState(props.props[1]); //contains data of all arriving flights that the user can choose from
  const [actualStep, setActualStep] = useState(0);
  const [activeStep, setActiveStep] = useState(actualStep - 1);
  const [skipped, setSkipped] = useState(new Set());
  const [departureFlight, setDepartureFlight] = useState(0); //for the selected departure flight
  const [arrivalFlight, setArrivalFlight] = useState(0); //for the selected arrival flight
  
  const [departureInput, setDepartureInput] = useState({}); //input to maram and donia
  const [arrivalInput, setArrivalInput] = useState({});



  const handleDepartureFlight = async (code) => {
    const newDeparture = code;
    setDepartureFlight(newDeparture);
  };

  const handleArrivalFlight = async (code) => {
    const newArrival = code;
    await setArrivalFlight(newArrival);
  };
  const nextPage = (count) => {
    let newSkipped = skipped;
    setActualStep((prevActiveStep) => prevActiveStep + 1);
    setActiveStep(actualStep - 1);
    setSkipped(newSkipped);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    setActualStep((prevActiveStep) => prevActiveStep + 1);
    setActiveStep((count) => count + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActualStep((prevActiveStep) => prevActiveStep - 1);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(33 208 242) 0%, rgb(98 64 233) 50%, rgb(138,35,135) 100%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(94 218 242) 0%, rgb(154 131 248) 50%, rgb(206 98 203) 100%)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(33 208 242) 0%, rgb(98 64 233) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(94 218 242) 0%, rgb(154 131 248) 50%, rgb(206 98 203) 100%)',
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <GroupAddIcon />,
      2: <AirlineSeatReclineNormalIcon />,
      3: <ConfirmationNumberIcon />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }
  // const res = {
  //   flights: [
  //     {
  //       economy: {
  //         baggageAllowance: 2,
  //         noOfSeats: 78,
  //         childPrice: 0,
  //         adultPrice: 10,
  //         availableSeats: 78,
  //       },
  //       business: {
  //         baggageAllowance: 2,
  //         noOfSeats: 5,
  //         childPrice: 0,
  //         adultPrice: 0,
  //         availableSeats: 5,
  //       },
  //       firstClass: {
  //         baggageAllowance: 3,
  //         noOfSeats: 5,
  //         childPrice: 0,
  //         adultPrice: 0,
  //         availableSeats: 5,
  //       },
  //       _id: '61a3e0ec766320f267156a54',
  //       flightNumber: 128,
  //       departureTime: '16:04',
  //       arrivalTime: '10:04',
  //       departureDate: '2021-11-01T00:00:00.000Z',
  //       arrivalDate: '2021-11-02T00:00:00.000Z',
  //       departureAirport: 'JPN',
  //       arrivalAirport: 'JFK',
  //       __v: 0,
  //       noOfSeats: 88,
  //       availableSeats: 88,
  //       duration: '18h 0m',
  //       id: '61a3e0ec766320f267156a54',
  //     },
  //   ],
  //   details: {
  //     noOfAdults: 3,
  //     noOfChildren: 0,
  //     departureAirport: 'JPN',
  //     arrivalAirport: 'JFK',
  //     departureDate: '2021-11-01T00:00:00.000Z',
  //     arrivalDate: '2021-11-02T00:00:00.000Z',
  //     cabin: 'economy',
  //   },
  // };

  

  const steps = [
    'Enter Passengers Details',
    'Select Seats',
    'Confirm Reservation',
  ];

  const handleEnable = () => (activeStep === '0' ? false : true);
  return (
    <Container>
      {actualStep > 1 && (
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      )}
      {actualStep === 0 && (
        <FlightReservation
          data={departureData}
          nextPage={nextPage}
          isDeparture={true}
          handleArrivalFlight={handleArrivalFlight}
          handleDepartureFlight={handleDepartureFlight}
        />
      )}
      {actualStep === 1 && (
        <FlightReservation
          data={arrivalData}
          nextPage={nextPage}
          handleArrivalFlight={handleArrivalFlight}
          handleDepartureFlight={handleDepartureFlight}
          isDeparture={false}
        />
      )}

      {actualStep === 2 && <SearchFlight />}
      <Box
        sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
        style={{ float: 'right' }}
      >
        {actualStep >= 1 && (
          <Button
            color='inherit'
            disabled={actualStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
        )}
        {activeStep >= 0 && (
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default BookingPage;
