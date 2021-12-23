import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { IoIosAirplane, IoIosArrowRoundForward } from 'react-icons/io';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const data = {
  input: {
    noOfChildren: 0,
    noOfAdults: 2,
    departureAirpot: 'JPN',
    arrivalAirport: 'JFK',
    departureDate: '2021-11-01T00:00:00.000Z',
    arrivalDate: '2021-11-03T00:00:00.000Z',
    cabin: 'economy',
  },
  oldReservation: {
    _id: '61b0a36e2173f72667abb54a',
    userId: '61aa2eb9d3eee0b9e4921105',
    cabinClass: 'economy',
    departingFlightId: {
      economy: {
        noOfSeats: 100,
        childPrice: 750,
        adultPrice: 1000,
        baggageAllowance: 2,
        availableSeats: 78,
      },
      business: {
        noOfSeats: 20,
        childPrice: 1100,
        adultPrice: 1800,
        baggageAllowance: 2,
        availableSeats: 7,
      },
      firstClass: {
        noOfSeats: 10,
        childPrice: 1500,
        adultPrice: 3000,
        baggageAllowance: 3,
        availableSeats: 8,
      },
      _id: '61aa788fd08900b12612c04b',
      flightNumber: 1234,
      departureTime: '22:04',
      arrivalTime: '13:04',
      departureDate: '2021-11-01T00:00:00.000Z',
      arrivalDate: '2021-11-03T00:00:00.000Z',
      departureAirport: 'JPN',
      arrivalAirport: 'JFK',
      __v: 0,
      noOfSeats: 130,
      availableSeats: 93,
      duration: '15h 0m',
      id: '61aa788fd08900b12612c04b',
    },
    returnFlightId: {
      economy: {
        noOfSeats: 30,
        childPrice: 750,
        adultPrice: 1000,
        baggageAllowance: 2,
        availableSeats: 4,
      },
      business: {
        noOfSeats: 30,
        childPrice: 1100,
        adultPrice: 1800,
        baggageAllowance: 2,
        availableSeats: 17,
      },
      firstClass: {
        noOfSeats: 30,
        childPrice: 1500,
        adultPrice: 3000,
        baggageAllowance: 3,
        availableSeats: 28,
      },
      _id: '61ad2748c1007c4cf2ed1fb2',
      flightNumber: 1233123,
      departureTime: '22:55',
      arrivalTime: '22:56',
      departureDate: '2021-11-03T00:00:00.000Z',
      arrivalDate: '2021-11-03T00:00:00.000Z',
      departureAirport: 'JFK',
      arrivalAirport: 'JPN',
      __v: 0,
      noOfSeats: 90,
      availableSeats: 49,
      duration: '0h 1m',
      id: '61ad2748c1007c4cf2ed1fb2',
    },
    totalPrice: 4000,
    __v: 0,
    id: '61b0a36e2173f72667abb54a',
  },
};

const EditReservationButton = () => {
  const [cabin, setCabin] = React.useState(data.input.cabin);
  const [open, setOpen] = React.useState(false);
  const [visibility, setVisiblity] = React.useState({
    departureDate: false,
    returnDate: false,
    cabin: false,
  });
  const getDate = (input) => {
    const date = new Date(input);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return (
      year +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      (day < 10 ? '0' + day : day)
    );
  };
  const displayDate = (input) => {
    const date = new Date(input);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return (
      (day < 10 ? '0' + day : day) +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      year
    );
  };

  const handleVisiblity = (count) => {
    if (count == 0)
      setVisiblity({ departureDate: true, returnDate: false, cabin: true });
    else if (count == 1)
      setVisiblity({ departureDate: false, returnDate: true, cabin: true });
    else setVisiblity({ departureDate: true, returnDate: true, cabin: true });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setVisiblity({ departureDate: false, returnDate: false, cabin: false });
  };

  const generateCabin = (cabin) => {
    return cabin.charAt(0).toUpperCase() + cabin.slice(1);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit Reservation</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h4' component='h2'>
            Edit Flight
          </Typography>
          <Typography id='modal-modal-title' variant='h6' component='h3'>
            {data.input.departureAirpot} <IoIosAirplane />{' '}
            {data.input.arrivalAirport}
            {' , '} {generateCabin(data.input.cabin)}
            {' , '}
            {displayDate(data.input.departureDate)}
            <IoIosArrowRoundForward /> {displayDate(data.input.arrivalDate)}
          </Typography>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            expanded={['1', '2']}
            sx={{
              marginBottom: '5%',
              flexGrow: 1,
              maxWidth: 'auto',
              overflowY: 'auto',
            }}
          >
            <TreeItem
              nodeId='1'
              label='Change Flight'
              sx={{
                marginTop: '5%',
                marginBottom: '5%',
              }}
            >
              <Link
                component='button'
                variant='body2'
                underline='hover'
                onClick={() => handleVisiblity(0)}
              >
                Change Departure Flight
              </Link>
              <br />
              <Link
                component='button'
                variant='body2'
                underline='hover'
                onClick={() => handleVisiblity(1)}
                sx={{
                  marginBottom: '0.5%',
                }}
              >
                Change Return Flight
              </Link>
              <br />
              <Link
                component='button'
                variant='body2'
                underline='hover'
                onClick={() => handleVisiblity(2)}
                sx={{
                  marginBottom: '5%',
                }}
              >
                Change Arrival and Departure Flights
              </Link>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 2 }}
              >
                {visibility.departureDate && (
                  <TextField
                    id='outlined-search'
                    label='Departure Date'
                    type='date'
                    required
                    sx={{
                      marginRight: '2%',
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    defaultValue={getDate(data.input.departureDate)}
                    name='departureDate'
                    //onChange={onChange}
                  />
                )}
                {visibility.returnDate && (
                  <TextField
                    id='outlined-search'
                    label='Return Date'
                    type='date'
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name='returnDate'
                    defaultValue={getDate(data.input.arrivalDate)}
                    //onChange={onChange}
                  />
                )}
              </Grid>
            </TreeItem>

            {visibility.cabin && (
              <TreeItem nodeId='2' label='Choose Cabin'>
                <FormControl component='fieldset'>
                  <RadioGroup
                    defaultValue={data.input.cabin}
                    name='radio-buttons-group'
                  >
                    <FormControlLabel
                      checked={cabin === 'first'}
                      value='first'
                      control={<Radio />}
                      onChange={() => setCabin('first')}
                      label='First Class'
                    />
                    <FormControlLabel
                      checked={cabin === 'business'}
                      onChange={() => setCabin('business')}
                      value='business'
                      control={<Radio />}
                      label='Business'
                    />
                    <FormControlLabel
                      checked={cabin === 'economy'}
                      onChange={() => setCabin('economy')}
                      value='economy'
                      control={<Radio />}
                      label='Economy'
                    />
                  </RadioGroup>
                </FormControl>
              </TreeItem>
            )}
          </TreeView>
        </Box>
      </Modal>
    </div>
  );
};

export default EditReservationButton;
