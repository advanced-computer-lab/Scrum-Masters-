import React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import FromToInput from '../../../utilities/FromToInput';
import PassengersButton from '../../../utilities/PassengersButton';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FlightLandRounded from '@mui/icons-material/FlightLandRounded';
import axios from 'axios';
import { Tooltip } from '@mui/material';
import { DialogActions } from '@mui/material';
import { DialogContent } from '@mui/material';
import { DialogTitle } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogContentText } from '@mui/material';
import BookingPage from '../../../pages/user/signed/BookingPage';
import moment from 'moment';

const SearchFlight = ({}) => {
  useEffect(() => {
    axios
      .get('http://localhost:8081/user/search/flights')
      .then((res) => {
        setFrom(res.data.from);
        setTo(res.data.to);
        // console.log("from",from);
        // console.log("to",to);
      })
      .catch((err) => console.log(err));
  }, []);
  //
  const cabins = ['Economy', 'Business', 'First Class'];

  const [query, setQuery] = useState({});
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [error, setError] = useState(false);
  const [output, setOutput] = useState();
  const [searchDone, setSearchDone] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const cabinProps = {
    options: cabins,
    // getOptionLabel: (option) => option,
  };

  const fromProps = {
    options: from,
    getOptionLabel: (option) => option,
  };

  const toProps = {
    options: to,
    getOptionLabel: (option) => option,
  };

  const showAlert = () => {
    setOpen(true);
  };

  const alertClose = () => {
    setOpen(false);
    return false;
  };

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const onChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
    console.log(typeof e.target.value);
  };

  const onSubmit = () => {
    //console.log(query);
    axios
      .post('http://localhost:8081/user/search/', query)
      .then((res) => {
        console.log('waiting for message', res.data);
        if (res.data.message) {
          console.log('it is true');
          setError(true);
          setErrorMessage(res.data.message);
          showAlert();
        } else {
          setOutput(res.data);   
          console.log("search flight", res.data);
          setSearchDone(true);
        }

        // history.push({
        //   pathname: '/user',
        //   state: res.data,
        // });

        //console.log(output);
        // console.log("from",from);
        // console.log("to",to);
      })
      .catch((err) => console.log(err));
  };

  function decrementAdultCount() {
    console.log(adultCount);
    setAdultCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1));
  }
  function incrementAdultCount() {
    setAdultCount((prevCount) => prevCount + 1);
  }
  function decrementChildrenCount() {
    setChildrenCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1));
  }
  function incrementChildrenCount() {
    setChildrenCount((prevCount) => prevCount + 1);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const menuItemStyling = {
  //   marginLeft: "5px",
  // };
  return (
    <div>
      {searchDone && <BookingPage props={output} />}
      {!searchDone && (
        <Grid
          container
          rowSpacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          style={{ marginTop: '20px' }}
        >
          <Grid item xs={1} md={2}>
            <div>
              <Autocomplete
                {...fromProps}
                id='blur-on-select'
                name='departureAirport'
                required
                onChange={(e, newValue) =>
                  setQuery({ ...query, ['departureAirport']: newValue })
                }
                blurOnSelect
                clearOnEscape
                size='30px'
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    placeholder='From'
                    label='From'
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position='start'>
                          <FlightTakeoffRoundedIcon />
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                  />
                )}
              />
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <div>
              <Autocomplete
                {...toProps}
                id='blur-on-select'
                name='arrivalAirport'
                onChange={(e, newValue) =>
                  setQuery({ ...query, ['arrivalAirport']: newValue })
                }
                required
                blurOnSelect
                clearOnEscape
                size='30px'
                renderInput={(params) => (
                  <TextField
                    label='To'
                    {...params}
                    placeholder='To'
                    required
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position='start'>
                          <FlightLandRounded></FlightLandRounded>
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                  />
                )}
              />
            </div>
          </Grid>
          <Grid item xs={2} md={2}>
            <ButtonGroup disableElevation>
              <IconButton
                onClick={() => {
                  decrementAdultCount();
                  setQuery({ ...query, ['noOfAdults']: adultCount - 1 });
                }}
              >
                <RemoveCircleRoundedIcon />
              </IconButton>
              <TextField
                required
                name='noOfAdults'
                label='Adults'
                type='number'
                value={adultCount}
                onChange={onChange}
                disabled={true}
              >
                {/* {adultCount}{" "} */}
              </TextField>
              <IconButton
                onClick={() => {
                  incrementAdultCount();
                  setQuery({ ...query, ['noOfAdults']: adultCount + 1 });
                }}
              >
                <AddCircleIcon />
              </IconButton>
            </ButtonGroup>
          </Grid>
          <Grid item xs={1} md={2}>
            <ButtonGroup disableElevation>
              <IconButton
                onClick={() => {
                  decrementChildrenCount();
                  setQuery({ ...query, ['noOfChildren']: childrenCount - 1 });
                }}
              >
                <RemoveCircleRoundedIcon />
              </IconButton>
              <TextField
                required
                name='noOfChildren'
                type='number'
                label='Children'
                value={childrenCount}
                disabled={true}
              >
                {/* {adultCount}{" "} */}
              </TextField>
              <IconButton
                onClick={() => {
                  incrementChildrenCount();
                  setQuery({ ...query, ['noOfChildren']: childrenCount + 1 });
                }}
              >
                <AddCircleIcon />
              </IconButton>
            </ButtonGroup>
          </Grid>

          <Grid item xs={1} md={2}>
            <TextField
              id='outlined-search'
              label='Departure Date'
              type='date'
              //minDate={moment().toDate()}
              required
              InputLabelProps={{
                shrink: true,
                style: {
                  // backgroundColor: "white",
                  // width: "auto",
                  // padding: "1px",
                },
              }}
              name='departureDate'
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={1} md={2}>
            <TextField
              id='outlined-search'
              label='Return date'
              type='date'
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: 'white',
                  width: 'auto',
                  padding: '1px',
                },
              }}
              name='arrivalDate'
              onChange={onChange}
              required
            />
          </Grid>
          <Grid item xs={1} md={2}>
            {console.log(cabinProps)}
            <div>
              <Autocomplete
                {...cabinProps}
                id='blur-on-select'
                label='Cabin'
                required
                blurOnSelect
                clearOnEscape
                size='30px'
                InputLabelProps={{
                  shrink: true,
                  style: {
                    backgroundColor: 'white',
                    width: 'auto',
                    padding: '1px',
                  },
                }}
                onChange={(e, newValue) =>
                  setQuery({
                    ...query,
                    ['cabin']:
                      newValue === 'First Class'
                        ? 'first'
                        : newValue.toLowerCase(),
                  })
                }
                renderInput={(params) => (
                  <TextField {...params} placeholder='Cabin' label='Cabin' />
                )}
              />
            </div>
          </Grid>

          <Grid item xs={6} md={2}>
            <Tooltip title='Search' arrow placement='right'>
              <IconButton
                aria-label='delete'
                onClick={onSubmit}
                size='large'
                type='SUBMIT'
                style={{ float: 'left' }}
              >
                <SearchIcon size='large' style={{ color: '#48bfe3' }} />
              </IconButton>
            </Tooltip>
          </Grid>
          {error && (
            <Dialog open={open} onClose={alertClose}>
              <DialogTitle
                id='alert-dialog-title'
                color='purple'
                style={{ textAlign: 'center' }}
              >
                {'Cannot search for flight.'}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  {errorMessage}
                </DialogContentText>
              </DialogContent>
              <DialogActions style={{ justifyContent: 'center' }}>
                <Button
                  onClick={() => {
                    alertClose();
                    setError(false);
                    window.location.reload(false);
                  }}
                  autoFocus
                >
                  close
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </Grid>
      )}
    </div>
  );
};

export default SearchFlight;
