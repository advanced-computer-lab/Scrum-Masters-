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
import FlightTableContent from './FlightTableContent';

const FlightsTable = ({
  query,
  resId,
  state,
  handleFlightId,
  handleVisibility,
  flightsId,
  cabin,
}) => {
  console.log('state in the flightsTable', state);
  const [page, setPage] = React.useState(0);
  const [isDeparture, setIsDeparture] = React.useState(state);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState(null);
  const [cabinClass, setCabinClass] = useState(null);
  const [departureFlightId, setDepartureFlight] = React.useState();
  const [returnFlightId, setReturnFlight] = React.useState();
  const [chosenFlights, setChosenFlights] = React.useState({
    departureFlightId: '',
    returnFlightId: '',
  });
  const [inputState, setInputState] = React.useState(state);
  const handleNewVisibility = (newVisibility) => {
    handleVisibility(newVisibility);
  };
  const handleFlightIdChange = (newId) => {
    handleFlightId(newId);
  };
  useEffect(() => {
    axios
      .post(`http://localhost:8081/user/edit/search/${resId}`, query)
      .then((res) => {
        // console.log('This is the response awy', res.data);
        setData(res.data);
        setCabinClass(data.details.cabin);
      })
      .catch((err) => console.log('flightsTable'));
  }, []);

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
    <div>
      {data && (
        <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
          <Table aria-label='collapsible table'>
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell
                  align='center'
                  style={{ fontWeight: 'bolder' }}
                >
                  Flight Number
                </StyledTableCell>
                <StyledTableCell
                  align='center'
                  style={{ fontWeight: 'bolder' }}
                >
                  From
                </StyledTableCell>
                <StyledTableCell
                  align='center'
                  style={{ fontWeight: 'bolder' }}
                ></StyledTableCell>
                <StyledTableCell
                  align='center'
                  style={{ fontWeight: 'bolder' }}
                >
                  To
                </StyledTableCell>
                <StyledTableCell
                  align='center'
                  style={{ fontWeight: 'bolder' }}
                >
                  Departure Date
                </StyledTableCell>
                <StyledTableCell
                  align='center'
                  style={{ fontWeight: 'bolder' }}
                >
                  Arrival Date
                </StyledTableCell>
                <StyledTableCell
                  align='center'
                  style={{ fontWeight: 'bolder' }}
                >
                  Price Difference
                </StyledTableCell>
                <StyledTableCell
                  align='center'
                  style={{ fontWeight: 'bolder' }}
                ></StyledTableCell>
              </TableRow>
            </TableHead>
            {data.departingFlights ? (
              <TableBody>
                {state !== '1' ? (
                  <FlightTableContent
                    flights={data.departingFlights}
                    state={state}
                    inputData={data}
                    handleFlightIdChange={handleFlightIdChange}
                    handleNewVisibility={handleNewVisibility}
                    cabin={cabin}
                    flightsId={flightsId}
                  />
                ) : (
                  <FlightTableContent
                    flights={data.returningFlights}
                    inputData={data}
                    handleFlightIdChange={handleFlightIdChange}
                    handleNewVisibility={handleNewVisibility}
                    cabin={cabin}
                    state={state}
                    flightsId={flightsId}
                  />
                )}
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
      )}
      {!isDeparture && (
        <Button
          color='inherit'
          sx={{ mr: 1 }}
          onClick={() => setIsDeparture(true)}
          style={{ float: 'right' }}
        >
          back
        </Button>
      )}
    </div>
  );
};

export default FlightsTable;
