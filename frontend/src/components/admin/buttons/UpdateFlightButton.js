import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
  TextField,
  Stack,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import axios from 'axios';
const UpdateFlightButton = (flight) => {
  const flightData = flight.flight;
  const [values, setValues] = React.useState();
  const [open, setOpen] = React.useState(false);

  const showAlert = () => {
    setOpen(true);
  };

  const alertClose = () => {
    setOpen(false);
    return false;
  };

  const onChange = async (e, name) => {
    console.log('in onchange in search flight', e);
    if (e) {
      try {
        console.log(e);
        if (e.target) {
          await setValues({ ...values, [e.target.name]: e.target.value });
        } else {
          await setValues({ ...values, [name]: e });
        }
        await console.log(values);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onSubmit = () => {
    console.log('printing');
    axios
      .patch(`http://localhost:8081/admin/update/${flightData.id}`, values)
      .then((res) => {
        setValues(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
    setTimeout(() => {
      window.location.reload();
    });
  };
  return (
    <React.Fragment>
      <Tooltip title='Edit' arrow placement='right'>
        <IconButton
          aria-label='edit'
          style={{ color: '#e0d615', marginRight: '10px' }}
          onClick={showAlert}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={alertClose} maxWidth='xl'>
        <DialogTitle id='alert-dialog-title'>{'Update Flight'}</DialogTitle>
        <DialogContent>
          <Stack direction='row' spacing={2} style={{ marginTop: '10px' }}>
            <TextField
              id='outlined-search'
              label='Flight Num'
              type='number'
              name='flightNumber'
              defaultValue={flightData.flightNumber}
              onChange={onChange}
            />
            <TextField
              id='outlined-search'
              label='From'
              type='search'
              name='departureAirport'
              defaultValue={flightData.departureAirport}
              onChange={onChange}
            />
            <TextField
              id='outlined-search'
              label='To'
              type='search'
              name='arrivalAirport'
              defaultValue={flightData.arrivalAirport}
              onChange={onChange}
            />
            <TextField
              id='outlined-search'
              label='Departure Date'
              type='search'
              name='departureDate'
              defaultValue={flightData.departureDate}
              onChange={onChange}
            />
            <TextField
              id='outlined-search'
              label='Arrival Date'
              type='search'
              name='arrivalDate'
              defaultValue={flightData.arrivalDate}
              onChange={onChange}
            />
            <TextField
              id='outlined-search'
              label='Departure Time'
              type='search'
              name='departureTime'
              defaultValue={flightData.departureTime}
              onChange={onChange}
            />
            <TextField
              id='outlined-search'
              label='Arrival Time'
              type='search'
              name='arrivalTime'
              defaultValue={flightData.arrivalTime}
              onChange={onChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onSubmit}>Update</Button>
          <Button onClick={alertClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default UpdateFlightButton;
