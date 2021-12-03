import React from 'react';
import { useEffect, useState } from 'react';
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
import UserFlightCard from './UserFlightCard';

const FlightReservation = ({
  data,
  nextPage,
  handleDepartureFlight,
  handleArrivalFlight,
  isDeparture,
}) => {
  const [page, setPage] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  console.log("props of flight reservation",data)
  const cabinClass = data.details.cabin ? data.details.cabin : null;
  const [open, setOpen] = React.useState(false);
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

  const getDate = (input) => {
    const date = new Date(input);
    return (
      date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    );
  };
  const getPrice = (cabinClass, row) => {
    return cabinClass === 'economy'
      ? row.economy.adultPrice
      : cabinClass === 'first'
      ? row.firstClass.adultPrice
      : row.business.adultPrice;
  };
  //useEffect(() => {}, []);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#5e60ce',
      color: theme.palette.common.white,
    },
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell align='center' style={{ fontWeight: 'bolder' }}>
              Flight Number
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bolder' }}>
              From
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bolder' }}>
              To
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bolder' }}>
              Departure Date
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bolder' }}>
              Arrival Date
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bolder' }}>
              Price
            </StyledTableCell>
            <StyledTableCell
              align='center'
              style={{ fontWeight: 'bolder' }}
            ></StyledTableCell>
          </TableRow>
        </TableHead>
        {data.flights ? (
          <TableBody>
            {data.flights
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <React.Fragment>
                  <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                      <Tooltip
                        title='View More Details'
                        arrow
                        placement='right'
                      >
                        <IconButton
                          aria-label='expand row'
                          size='small'
                          onClick={() => setOpen(!open)}
                        >
                          {open ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell align='center'>{row.flightNumber}</TableCell>
                    <TableCell align='center'>{row.departureAirport}</TableCell>
                    <TableCell align='center'>{row.arrivalAirport}</TableCell>
                    <TableCell align='center'>
                      {getDate(row.departureDate)}
                    </TableCell>
                    <TableCell align='center'>
                      {getDate(row.arrivalDate)}
                    </TableCell>
                    <TableCell align='center'>
                      {getPrice(cabinClass, row) + '£'}
                    </TableCell>
                    <TableCell align='center' style={{ fontStyle: 'italic' }}>
                      <Button
                        id={row._id}
                        onClick={() => {
                          isDeparture
                            ? handleDepartureFlight(row._id)
                            : handleArrivalFlight(row._id);
                          const newValue = count + 1;
                          setCount(newValue);
                          nextPage(newValue);
                        }}
                      >
                        Choose Flight
                      </Button>
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={12}
                    >
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
                                <TableCell
                                  align='center'
                                  style={{ fontStyle: 'italic' }}
                                >
                                  Departure Time
                                </TableCell>
                                <TableCell
                                  align='center'
                                  style={{ fontStyle: 'italic' }}
                                >
                                  Duration{' '}
                                </TableCell>
                                <TableCell
                                  align='center'
                                  style={{ fontStyle: 'italic' }}
                                >
                                  Arrival Time
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow key={row._id}>
                                <TableCell
                                  align='center'
                                  style={{ fontStyle: 'italic' }}
                                >
                                  {row.departureTime}
                                </TableCell>
                                <TableCell
                                  align='center'
                                  style={{ fontStyle: 'italic' }}
                                >
                                  {row.duration}
                                </TableCell>
                                <TableCell
                                  align='center'
                                  style={{ fontStyle: 'italic' }}
                                >
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
              ))}
          </TableBody>
        ) : null}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={data.flights ? data.flights.length : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default FlightReservation;
