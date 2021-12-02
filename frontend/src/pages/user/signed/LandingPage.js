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
import Check from '@mui/icons-material/Check';
import FlightIcon from '@mui/icons-material/Flight';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import FlightLandSharpIcon from '@mui/icons-material/FlightLandSharp';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import SearchFlight from '../../../components/user/forms/SearchFlight';
import { Container } from 'react-bootstrap';
import FlightReservation from './FlightReservation';

const LandingPage = () => {
  const [data, setData] = useState();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const nextPage = (count) => {
    let newSkipped = skipped;
    setActiveStep((count) => count + 1);
    setSkipped(newSkipped);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
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
      1: <FlightIcon />,
      2: <GroupAddIcon />,
      3: <AirlineSeatReclineNormalIcon />,
      4: <ConfirmationNumberIcon />,
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
  const res = {
    flights: [
      {
        economy: {
          baggageAllowance: 2,
          noOfSeats: 78,
          childPrice: 0,
          adultPrice: 10,
          availableSeats: 78,
        },
        business: {
          baggageAllowance: 2,
          noOfSeats: 5,
          childPrice: 0,
          adultPrice: 0,
          availableSeats: 5,
        },
        firstClass: {
          baggageAllowance: 3,
          noOfSeats: 5,
          childPrice: 0,
          adultPrice: 0,
          availableSeats: 5,
        },
        _id: '61a3e0ec766320f267156a54',
        flightNumber: 128,
        departureTime: '16:04',
        arrivalTime: '10:04',
        departureDate: '2021-11-01T00:00:00.000Z',
        arrivalDate: '2021-11-02T00:00:00.000Z',
        departureAirport: 'JPN',
        arrivalAirport: 'JFK',
        __v: 0,
        noOfSeats: 88,
        availableSeats: 88,
        duration: '18h 0m',
        id: '61a3e0ec766320f267156a54',
      },
    ],
    details: {
      noOfAdults: 3,
      noOfChildren: 0,
      departureAirport: 'JPN',
      arrivalAirport: 'JFK',
      departureDate: '2021-11-01T00:00:00.000Z',
      arrivalDate: '2021-11-02T00:00:00.000Z',
      cabin: 'economy',
    },
  };
  const steps = [
    'Select Flights',
    'Enter Passengers Details',
    'Select Seats',
    'Confirm Reservation',
  ];

  const handleEnable = () => (activeStep === '0' ? false : true);
  return (
    <Container>
      <SearchFlight />
      <br />
      {activeStep !== 0 && (
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
      {activeStep === 0 && <FlightReservation data={res} nextPage={nextPage} />}
      {activeStep === 1 && <SearchFlight />}
      <Box
        sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
        style={{ float: 'right' }}
      >
        {activeStep !== 0 && (
          <Button
            color='inherit'
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
        )}
        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
