import React from 'react';
import { useEffect, useState } from 'react';
import { IoIosAirplane } from 'react-icons/io';
import {
  Button,
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TablePagination,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  tableCellClasses,
  styled,
  Paper,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';
const FlightTableContent = ({
  flights,
  inputData,
  handleFlightIdChange,
  handleNewVisibility,
  cabin,
  state,
  flightsId,
}) => {
  console.log('inputData of the tableContent', {
    flights,
    inputData,
    handleFlightIdChange,
    handleNewVisibility,
    cabin,
    state,
    flightsId,
  });

  const [page, setPage] = React.useState(0);
  const [isDeparture, setIsDeparture] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = useState(inputData);
  const [cabinClass, setCabinClass] = useState(cabin);
  const [departureFlightId, setDepartureFlight] = React.useState();
  const [returnFlightId, setReturnFlight] = React.useState('0');
  const [chosenFlights, setChosenFlights] = React.useState({
    departureFlightId: '',
    returnFlightId: '',
  });
  console.log('the state is', state);
  function getPrice(cabinClass, row) {
    if (cabinClass === 'economy')
      return (
        row.economy.adultPrice * data.details.noOfAdults +
        row.economy.childPrice * data.details.noOfChildren
      );
    else if (cabinClass === 'first')
      return (
        row.firstClass.adultPrice * data.details.noOfAdults +
        row.firstClass.childPrice * data.details.noOfChildren
      );
    else
      return (
        row.business.adultPrice * data.details.noOfAdults +
        row.business.childPrice * data.details.noOfChildren
      );
  }

  const getDate = (input) => {
    const date = new Date(input);
    return (
      date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    );
  };

  const handleChosenFlight = (flightId) => {
    if (isDeparture) {
      setDepartureFlight(flightId);
      setIsDeparture(false);
    } else {
      setReturnFlight(flightId);
    }
    setChosenFlights({
      departureFlightId: departureFlightId,
      returnFlightId: returnFlightId,
    });
    //console.log(chosenFlights);
  };
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(4n-3)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:nth-of-type(4n-2)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const handleClick = (id) => {
    if (state === '0') {
      setDepartureFlight(id);
      console.log('departure flight id updated', departureFlightId);
      return;
    } else if (state === '1') {
      setReturnFlight(id);
      console.log('return flight id updated', returnFlightId);
      return;
    }
    if (state === '2' && flightsId.departureId !== '0') {
      setDepartureFlight(id);
      console.log('departure flight id updated', departureFlightId);
    } else {
      setReturnFlight(id);
      console.log('return flight id updated', returnFlightId);
      return;
    }
  };

  return flights
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) => (
      <React.Fragment>
        <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <Tooltip title='View More Details' arrow placement='right'>
              <IconButton
                aria-label='expand row'
                size='small'
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </Tooltip>
          </TableCell>
          <TableCell align='center'>{row.flightNumber}</TableCell>
          <TableCell align='center'>{row.departureAirport}</TableCell>
          <TableCell align='center'>
            <IoIosAirplane />
          </TableCell>
          <TableCell align='center'>{row.arrivalAirport}</TableCell>
          <TableCell align='center'>{getDate(row.departureDate)}</TableCell>
          <TableCell align='center'>{getDate(row.arrivalDate)}</TableCell>
          <TableCell align='center'>
            {getPrice(cabinClass, row) - data.oldReservation.totalPrice + '£'}
          </TableCell>
          <TableCell align='center' style={{ fontStyle: 'italic' }}>
            <Button
              id={row._id}
              onClick={() => {
                // state === '0'
                //   ? setDepartureFlight(id)
                //   : state === '1'
                //   ? setReturnFlight(id)
                //   : state === '2' && flightsId.departureId === '0'
                //   ? `/edit/${inputData.details.departureAirport}/${inputData.details.arrivalAirport}/${inputData.details.noOfChildren}/${inputData.details.noOfAdults}/${inputData.details.arrivalDate}/${inputData.details.departureDate}/${inputData.details.cabin}/1/${inputData.oldReservation.id}/${departureFlightId}/0`
                //   : `/edit/${inputData.oldReservation.id}/${departureFlightId}/${returnFlightId}/${inputData.details.cabin}/0`
                // state !== '1'
                //   ? setDepartureFlight(row._id)
                //   : setReturnFlight(row._id);
                handleClick(row._id);
              }}
              href={
                state === '0'
                  ? `/editSeats/${inputData.oldReservation.id}/${row._id}/0/${inputData.details.cabin}/0`
                  : state === '1' && flightsId.departureId === '0'
                  ? `/editSeats/${inputData.oldReservation.id}/${row._id}/0/${inputData.details.cabin}/0`
                  : state === '2' && flightsId.departureId === '0'
                  ? `/edit/${inputData.details.departureAirport}/${inputData.details.arrivalAirport}/${inputData.details.noOfChildren}/${inputData.details.noOfAdults}/${inputData.details.arrivalDate}/${inputData.details.departureDate}/${inputData.details.cabin}/2/${inputData.oldReservation.id}/${row._id}/0`
                  : `/editSeats/${inputData.oldReservation._id}/${flightsId.departureId}/${row._id}/${inputData.details.cabin}/0`
              }
            >
              Choose Flight
            </Button>
          </TableCell>
        </StyledTableRow>
        <StyledTableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography
                  variant='h6'
                  gutterBottom
                  component='div'
                  fontStyle='italic'
                >
                  Details
                </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align='center' style={{ fontStyle: 'italic' }}>
                        Departure Time
                      </TableCell>
                      <TableCell align='center' style={{ fontStyle: 'italic' }}>
                        Duration{' '}
                      </TableCell>
                      <TableCell align='center' style={{ fontStyle: 'italic' }}>
                        Arrival Time
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key={row._id}>
                      <TableCell align='center' style={{ fontStyle: 'italic' }}>
                        {row.departureTime}
                      </TableCell>
                      <TableCell align='center' style={{ fontStyle: 'italic' }}>
                        {row.duration}
                      </TableCell>
                      <TableCell align='center' style={{ fontStyle: 'italic' }}>
                        {row.arrivalTime}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </StyledTableRow>
      </React.Fragment>
    ));
};

export default FlightTableContent;
