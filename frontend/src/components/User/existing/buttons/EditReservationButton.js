import { React, useEffect, useState } from 'react';
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
import { IconButton, Stack } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { IoIosAirplane, IoIosArrowRoundForward } from 'react-icons/io';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';

import { FaTimes } from 'react-icons/fa';

//import { Link } from "react-router-dom";
import axios from 'axios';
import { Container } from '@mui/material';

// import { useState, useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  //border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const EditReservationButton = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState({
    noOfChildren: '',
    noOfAdults: '',
    departureAirport: '',
    arrivalAirport: '',
    departureDate: '',
    arrivalDate: '',
    cabin: '',
  });
  const [cabin, setCabin] = useState();
  const [open, setOpen] = useState(false);
  const [visibility, setVisiblity] = useState({
    departureDate: false,
    returnDate: false,
    cabin: false,
  });
  const [state, setState] = useState();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    if (panel === 'panel3') {
      setVisiblity({ departureDate: false, returnDate: false, cabin: true });
      setState(2);
    }
  };

  useEffect(() => {
    function fetchData() {
      console.log(props.resId);
      axios
        .get(`http://localhost:8081/user/edit/history/${props.resId}`)
        .then((res) => {
          console.log('This is the response of the button', res.data);
          setData(res.data);
          setInput(res.data.input);
          setCabin(res.data.input.cabin);
          setLoading(false);
          //console.log('this is the input of the button', res.data);
        })
        .catch((err) => console.log('editReservationButton'));
    }
    if (open) fetchData();
  }, [open]);

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
    if (count === 4) {
      setExpanded(false);
      setInput({
        noOfChildren: '',
        noOfAdults: '',
        departureAirport: '',
        arrivalAirport: '',
        departureDate: '',
        arrivalDate: '',
        cabin: '',
      });
      setVisiblity({ departureDate: false, returnDate: false, cabin: false });
      return;
    }
    if (count === 0) {
      setVisiblity({ departureDate: true, returnDate: false, cabin: true });
      setState(0);
      console.log('the state is updated to be 0', state);
    } else if (count === 1) {
      setVisiblity({ departureDate: false, returnDate: true, cabin: true });
      setState(1);
      console.log('the state is updated to be 1', state);
    } else {
      setVisiblity({ departureDate: false, returnDate: false, cabin: false });
      setState(2);
      console.log('the state is updated to be 2', state);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setVisiblity({ departureDate: false, returnDate: false, cabin: false });
  };

  const generateCabin = (cabin) => {
    return cabin.charAt(0).toUpperCase() + cabin.slice(1);
  };

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const onCabinChange = (e, cabin) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setCabin(cabin);
  };

  return (
    <div>
      <div>
        <Stack
          spacing={-0.5}
          orientation='horizontal'
          sx={{ alignItems: 'center' }}
        >
          <IconButton aria-label='edit' color='primary' onClick={handleOpen}>
            <EditIcon />
          </IconButton>
          <small align='center'>edit</small>
        </Stack>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <FaTimes
              style={{
                cursor: 'pointer',
                float: 'right',
                color: '#A9A9A9',
              }}
              onClick={handleClose}
            />
            <Typography id='modal-modal-title' variant='h4' component='h2'>
              Edit Flight
            </Typography>

            {loading && (
              <div>
                <Stack
                  direction='column'
                  spacing={5}
                  sx={{ alignItems: 'center' }}
                >
                  <Loader
                    type='Plane'
                    color='#00BFFF'
                    height={100}
                    width={100}
                    //timeout={10000}
                  />
                </Stack>
              </div>
            )}
            {data && (
              <div>
                {' '}
                <Typography id='modal-modal-title' variant='h6' component='h3'>
                  {data.input.departureAirport} <IoIosAirplane />{' '}
                  {data.input.arrivalAirport}
                  {' , '} {generateCabin(data.input.cabin)}
                  {' , '}
                  {displayDate(data.input.departureDate)}
                  <IoIosArrowRoundForward />{' '}
                  {displayDate(data.input.arrivalDate)}
                </Typography>
                <Divider />
                <Typography id='modal-modal-title' variant='h6' component='h3'>
                  What do you want to do ?
                </Typography>
                <Stack
                  direction='column'
                  spacing={5}
                  sx={{ alignItems: 'center' }}
                >
                  <Button
                    variant='outlined'
                    href={`/editSeats/${props.resId}/0/0/${data.input.cabin}/1/2`}
                    sx={{
                      marginTop: '2%',
                      marginBottom: '1%',
                    }}
                    // variant='body2'
                  >
                    Change Seats in The Current Flight{' '}
                  </Button>
                </Stack>
                <Divider>OR</Divider>
                {/* <TreeView
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
                  > */}
                <Accordion
                  expanded={expanded === 'panel1'}
                  onChange={handleChange('panel1')}
                  sx={{ marginTop: '2%' }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      Change Dates
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Select a new departure or return date
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
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
                        marginBottom: '5%',
                      }}
                    >
                      Change Return Flight
                    </Link>
                    <br />
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
                        onChange={onChange}
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
                        name='arrivalDate'
                        defaultValue={getDate(data.input.arrivalDate)}
                        onChange={onChange}
                      />
                    )}
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 'panel3'}
                  onChange={handleChange('panel3')}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      Change Cabin
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Choosing a new cabin? Select the desired flights
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControl component='fieldset'>
                      <RadioGroup defaultValue={data.input.cabin} name='cabin'>
                        <FormControlLabel
                          checked={cabin === 'first'}
                          value='first'
                          control={<Radio />}
                          onChange={(e) => onCabinChange(e, 'first')}
                          label='First Class'
                        />
                        <FormControlLabel
                          checked={cabin === 'business'}
                          onChange={(e) => onCabinChange(e, 'business')}
                          value='business'
                          control={<Radio />}
                          label='Business'
                        />
                        <FormControlLabel
                          checked={cabin === 'economy'}
                          onChange={(e) => onCabinChange(e, 'economy')}
                          value='economy'
                          control={<Radio />}
                          label='Economy'
                        />
                      </RadioGroup>
                    </FormControl>{' '}
                    <TextField
                      id='outlined-search'
                      label='Departure Date'
                      type='date'
                      required
                      sx={{
                        marginRight: '2%',
                        marginTop: '6%',
                        marginLeft: '5%',
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      defaultValue={getDate(data.input.departureDate)}
                      name='departureDate'
                      onChange={onChange}
                    />
                    <TextField
                      id='outlined-search'
                      label='Return Date'
                      type='date'
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{ marginTop: '6%' }}
                      name='arrivalDate'
                      defaultValue={getDate(data.input.arrivalDate)}
                      onChange={onChange}
                    />
                  </AccordionDetails>
                </Accordion>
                {/* </TreeItem> */}
                {/* {false && (
                  // <TreeItem nodeId='2' label='Choose Cabin'>
                 
                  // </TreeItem>
                )} */}
                {/* </TreeView> */}
                <br />
                {expanded !== false && (
                  <div style={{ float: 'right' }}>
                    <Button
                      color='inherit'
                      sx={{ mr: 1, color: 'primary.main' }}
                      onClick={() => handleVisiblity(4)}
                    >
                      reset
                    </Button>
                    <Button
                      href={`/edit/${input.departureAirport}/${input.arrivalAirport}/${input.noOfChildren}/${input.noOfAdults}/${input.arrivalDate}/${input.departureDate}/${input.cabin}/${state}/${props.resId}/0/0`}
                      color='inherit'
                      sx={{ mr: 1, color: 'primary.main' }}
                      disabled={
                        !(
                          visibility.departureDate ||
                          visibility.returnDate ||
                          visibility.cabin
                        )
                      }
                    >
                      Proceed
                    </Button>
                  </div>
                )}
              </div>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default EditReservationButton;
