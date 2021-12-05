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
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import SearchFlight from '../../../components/user/forms/SearchFlight';
import { Container } from 'react-bootstrap';
import FlightReservation from '../../../components/user/FlightReservation';
import SelectSeat from './SelectSeat';
import ViewFlightSummary from '../../../components/user/existing/FlightSummary';
import Passengers from '../../../components/user/existing/Passengers';

const BookingPage = (props) => {
  console.log('in BookingPage props', props);
  var userId = '61aa2eb9d3eee0b9e4921105';
  const [departureData, setDepartureData] = useState(props.props[0]); //contains data of all departing flights that the user can choose from
  // console.log('in BookingPage', departureData);
  const [arrivalData, setArrivalData] = useState(props.props[1]); //contains data of all arriving flights that the user can choose from
  const [actualStep, setActualStep] = useState(0);
  const [activeStep, setActiveStep] = useState(actualStep - 1);
  const [skipped, setSkipped] = useState(new Set());
  const [departureFlight, setDepartureFlight] = useState(0); //for the selected departure flight
  const [arrivalFlight, setArrivalFlight] = useState(0); //for the selected arrival flight
  const [noOfForms, setNoOfForms] = useState(0);
  const [departureInput, setDepartureInput] = useState({}); //input to maram and donia
  const [arrivalInput, setArrivalInput] = useState({});
  const [travellers, setTravellers] = useState();
  const [departureTickets, setDepartureTickets] = useState([]);
  const [returnTickets, setReturnTickets] = useState([]);
  const [total, setTotal] = useState(0);
  const [maramObject, setMaramObject] = useState({
    firstName: '',
    lastName: '',
    Gender: '',
    dateOfBirth: '',
  });
  const handleTravellers = (passengers) => {
    setTravellers(passengers);
    console.log('booking page passengers', passengers);
  };
  const handleDepartureFlight = async (code) => {
    const newDeparture = code;
    setDepartureFlight(newDeparture);
    const departureFlightData = props.props[0].flights.filter(
      (flight) => flight._id === newDeparture
    )[0];
    setDepartureInput({
      flight: departureFlightData,
      details: props.props[0].details,
    });
  };
  const handleReservation = (passengers) => {
    console.log('handle reservation here');
    handleTravellers(passengers);
    axios
      .post(`http://localhost:8081/user/create/reservation/${userId}`, {
        details: departureInput.details,
        departingFlightId: departureFlight,
        returnFlightId: arrivalFlight,
        totalPrice: total,
      })
      .then((result) => {
        console.log('Reservation Done', result);
        nextPage();
        handleTickets(result.data._id);
      })
      .catch((err) => console.log(err));
  };
  const getIndividualPrice = (flight, type, cabin) => {
    if (type === 'adult') {
      switch (cabin) {
        case 'economy':
          return flight.economy.adultPrice;
        case 'business':
          return flight.business.adultPrice;
        case 'first':
          return flight.firstClass.adultPrice;
        default:
          return 0;
      }
    } else {
      switch (cabin) {
        case 'economy':
          return flight.economy.childPrice;
        case 'business':
          return flight.business.childPrice;
        case 'first':
          return flight.firstClass.childPrice;
        default:
          return 0;
      }
    }
  };
  const handleTickets = (reservationId) => {
    var departs = departureTickets;
    var returns = returnTickets;
    travellers.forEach((traveller) => {
      axios
        .post(`http://localhost:8081/user/create/ticket`, {
          seatNum: traveller.departureSeat,
          ticketType: 'departing',
          passengerType: traveller.type,
          firstName: traveller.firstName,
          lastName: traveller.lastName,
          cabin: traveller.cabin,
          flightId: departureFlight,
          reservationId: reservationId,
          price: getIndividualPrice(
            departureInput.flight,
            traveller.type,
            traveller.cabin
          ),
          passportNumber: traveller.passportNumber,
          dateOfBirth: traveller.dateOfBirth,
        })
        .then((result) => {
          console.log('ticket Done', result);
          departs.push(result.data);
          setDepartureTickets(departs);
          console.log('dep', departs);
        })
        .catch((err) => console.log(err));
      axios
        .post(`http://localhost:8081/user/create/ticket`, {
          seatNum: traveller.returnSeat,
          ticketType: 'return',
          passengerType: traveller.type,
          firstName: traveller.firstName,
          lastName: traveller.lastName,
          cabin: traveller.cabin,
          flightId: arrivalFlight,
          reservationId: reservationId,
          price: getIndividualPrice(
            arrivalInput.flight,
            traveller.type,
            traveller.cabin
          ),
          passportNumber: traveller.passportNumber,
          dateOfBirth: traveller.dateOfBirth,
        })
        .then((result) => {
          console.log('ticket Done return', result);
          returns.push(result.data);
          setReturnTickets(returns);
          console.log('ree', returns);
        })
        .catch((err) => console.log(err));
    });
    // setDepartureTickets(departs);
    // setReturnTickets(returns);
    // console.log(departs);
    // console.log("re", returns);
  };
  const handleArrivalFlight = async (code) => {
    const newArrival = code;
    await setArrivalFlight(newArrival);
    const arrivalFlightData = props.props[1].flights.filter(
      (flight) => flight._id === newArrival
    )[0];
    setArrivalInput({
      flight: arrivalFlightData,
      details: props.props[0].details,
    });
    console.log(departureInput);
  };
  const handleNextForm = (e) => {
    let newSkipped = skipped;
    e.preventDefault();
    setActualStep((prevActiveStep) => prevActiveStep + 1);
    setActiveStep((count) => count + 1);
    setSkipped(newSkipped);
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
      2: <ConfirmationNumberIcon />,
      3: <AirlineSeatReclineNormalIcon />,
      4: <AirplaneTicketIcon />,
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

  const steps = [
    'Enter Passengers Details',
    'Confirm Reservation',
    'Select Seats',
    'Itenirary',
  ];

  const handleOnClick = () => {
    var flag = false;
    travellers.forEach((passenger) => {
      //if(passenger.firstName===''||)
    });
  };
  const handleEnable = () => (activeStep === '0' ? false : true);
  return (
    <Container>
      {actualStep > 1 && (
        <div style={{ marginTop: '2%' }}>
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
        </div>
      )}
      <div style={{ marginTop: '2%' }}>
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
        {actualStep === 2 && (
          <Passengers
            adults={departureInput.details.noOfAdults}
            children={departureInput.details.noOfChildren}
            cabin={departureInput.details.cabin}
            handleTravellers={handleTravellers}
            handleNext={handleNextForm}
            handleBack={handleBack}
          />
        )}
        {actualStep === 3 && (
          <ViewFlightSummary input1={departureInput} input2={arrivalInput} />
        )}
        {actualStep === 4 && (
          <SelectSeat
            passengers={travellers}
            departureFlight={departureInput}
            returnFlight={arrivalInput}
            departureId={departureFlight}
            returnId={arrivalFlight}
            cabin={departureInput.details.cabin}
            numberPassengers={
              departureInput.details.noOfAdults +
              departureInput.details.noOfChildren
            }
            handleReservation={handleReservation}
          />
        )}
      </div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          pt: 2,
          marginTop: '2%',
          width: '100%',
          justifyContent: 'end',
        }}
        style={{ float: 'right' }}
      >
        {actualStep >= 1 && actualStep !== 2 && actualStep !== 5 && (
          <Button
            color='inherit'
            disabled={actualStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
        )}

        {activeStep >= 0 && actualStep !== 2 && actualStep !== 4 && (
          <Button onClick={handleNext} type='submit'>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default BookingPage;
