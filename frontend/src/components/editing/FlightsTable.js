import React from "react";
import { useEffect, useState } from "react";
import { IoIosAirplane } from "react-icons/io";
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
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "axios";

// const data = {
//   departingFlights: [
//     {
//       economy: {
//         baggageAllowance: 2,
//         noOfSeats: 78,
//         childPrice: 0,
//         adultPrice: 0,
//         availableSeats: 74,
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
//       availableSeats: 84,
//       duration: '18h 0m',
//       id: '61a3e0ec766320f267156a54',
//     },
//     {
//       economy: {
//         noOfSeats: 100,
//         childPrice: 750,
//         adultPrice: 1000,
//         baggageAllowance: 2,
//         availableSeats: 78,
//       },
//       business: {
//         noOfSeats: 20,
//         childPrice: 1100,
//         adultPrice: 1800,
//         baggageAllowance: 2,
//         availableSeats: 7,
//       },
//       firstClass: {
//         noOfSeats: 10,
//         childPrice: 1500,
//         adultPrice: 3000,
//         baggageAllowance: 3,
//         availableSeats: 8,
//       },
//       _id: '61aa788fd08900b12612c04b',
//       flightNumber: 1234,
//       departureTime: '22:04',
//       arrivalTime: '13:04',
//       departureDate: '2021-11-01T00:00:00.000Z',
//       arrivalDate: '2021-11-03T00:00:00.000Z',
//       departureAirport: 'JPN',
//       arrivalAirport: 'JFK',
//       __v: 0,
//       noOfSeats: 130,
//       availableSeats: 93,
//       duration: '15h 0m',
//       id: '61aa788fd08900b12612c04b',
//     },
//   ],
//   returningFlights: [
//     {
//       economy: {
//         noOfSeats: 30,
//         childPrice: 750,
//         adultPrice: 1000,
//         baggageAllowance: 2,
//         availableSeats: 4,
//       },
//       business: {
//         noOfSeats: 30,
//         childPrice: 1100,
//         adultPrice: 1800,
//         baggageAllowance: 2,
//         availableSeats: 17,
//       },
//       firstClass: {
//         noOfSeats: 30,
//         childPrice: 1500,
//         adultPrice: 3000,
//         baggageAllowance: 3,
//         availableSeats: 28,
//       },
//       _id: '61ad2748c1007c4cf2ed1fb2',
//       flightNumber: 1233123,
//       departureTime: '22:55',
//       arrivalTime: '22:56',
//       departureDate: '2021-11-03T00:00:00.000Z',
//       arrivalDate: '2021-11-03T00:00:00.000Z',
//       departureAirport: 'JFK',
//       arrivalAirport: 'JPN',
//       __v: 0,
//       noOfSeats: 90,
//       availableSeats: 49,
//       duration: '0h 1m',
//       id: '61ad2748c1007c4cf2ed1fb2',
//     },
//   ],
//   details: {
//     noOfChildren: 0,
//     noOfAdults: 2,
//     departureAirport: 'JPN',
//     arrivalAirport: 'JFK',
//     departureDate: '2021-11-01T00:00:00.000Z',
//     arrivalDate: '2021-11-03T00:00:00.000Z',
//     cabin: 'economy',
//   },
//   oldReservation: {
//     _id: '61b0a36e2173f72667abb54a',
//     userId: '61aa2eb9d3eee0b9e4921105',
//     cabinClass: 'economy',
//     departingFlightId: {
//       economy: {
//         noOfSeats: 100,
//         childPrice: 750,
//         adultPrice: 1000,
//         baggageAllowance: 2,
//         availableSeats: 78,
//       },
//       business: {
//         noOfSeats: 20,
//         childPrice: 1100,
//         adultPrice: 1800,
//         baggageAllowance: 2,
//         availableSeats: 7,
//       },
//       firstClass: {
//         noOfSeats: 10,
//         childPrice: 1500,
//         adultPrice: 3000,
//         baggageAllowance: 3,
//         availableSeats: 8,
//       },
//       _id: '61aa788fd08900b12612c04b',
//       flightNumber: 1234,
//       departureTime: '22:04',
//       arrivalTime: '13:04',
//       departureDate: '2021-11-01T00:00:00.000Z',
//       arrivalDate: '2021-11-03T00:00:00.000Z',
//       departureAirport: 'JPN',
//       arrivalAirport: 'JFK',
//       __v: 0,
//       noOfSeats: 130,
//       availableSeats: 93,
//       duration: '15h 0m',
//       id: '61aa788fd08900b12612c04b',
//     },
//     returnFlightId: {
//       economy: {
//         noOfSeats: 30,
//         childPrice: 750,
//         adultPrice: 1000,
//         baggageAllowance: 2,
//         availableSeats: 4,
//       },
//       business: {
//         noOfSeats: 30,
//         childPrice: 1100,
//         adultPrice: 1800,
//         baggageAllowance: 2,
//         availableSeats: 17,
//       },
//       firstClass: {
//         noOfSeats: 30,
//         childPrice: 1500,
//         adultPrice: 3000,
//         baggageAllowance: 3,
//         availableSeats: 28,
//       },
//       _id: '61ad2748c1007c4cf2ed1fb2',
//       flightNumber: 1233123,
//       departureTime: '22:55',
//       arrivalTime: '22:56',
//       departureDate: '2021-11-03T00:00:00.000Z',
//       arrivalDate: '2021-11-03T00:00:00.000Z',
//       departureAirport: 'JFK',
//       arrivalAirport: 'JPN',
//       __v: 0,
//       noOfSeats: 90,
//       availableSeats: 49,
//       duration: '0h 1m',
//       id: '61ad2748c1007c4cf2ed1fb2',
//     },
//     totalPrice: 4000,
//     __v: 0,
//     id: '61b0a36e2173f72667abb54a',
//   },
// };

const FlightsTable = (query, resId) => {
  const [page, setPage] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState(null);
  const [cabinClass,setCabinClass] =  useState(null);
  useEffect(() => {
    console.log("this is props", query.query);
    console.log("this is resId", query.resId);

    axios
      .post(`http://localhost:8081/user/edit/search/${query.resId}`, query.query)
      .then((res) => {
        console.log("This is the response", res.data);
        setData(res.data);
        setCabinClass(data.details.cabin);
      })
      .catch((err) => console.log("sadddd"));
  }, []);

  //const cabinClass = data.details.cabin ? data.details.cabin : null;
  function getPrice(cabinClass, row) {
    if (cabinClass === "economy")
      return (
        row.economy.adultPrice * data.details.noOfAdults +
        row.economy.childPrice * data.details.noOfChildren
      );
    else if (cabinClass === "first")
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
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    );
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(4n-3)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:nth-of-type(4n-2)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#5e60ce",
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
        <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell
                  align="center"
                  style={{ fontWeight: "bolder" }}
                >
                  Flight Number
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ fontWeight: "bolder" }}
                >
                  From
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ fontWeight: "bolder" }}
                ></StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ fontWeight: "bolder" }}
                >
                  To
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ fontWeight: "bolder" }}
                >
                  Departure Date
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ fontWeight: "bolder" }}
                >
                  Arrival Date
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ fontWeight: "bolder" }}
                >
                  Price Difference
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ fontWeight: "bolder" }}
                ></StyledTableCell>
              </TableRow>
            </TableHead>
            {data.departingFlights ? (
              <TableBody>
                {data.departingFlights
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <React.Fragment>
                      <StyledTableRow
                        sx={{ "& > *": { borderBottom: "unset" } }}
                      >
                        <TableCell>
                          <Tooltip
                            title="View More Details"
                            arrow
                            placement="right"
                          >
                            <IconButton
                              aria-label="expand row"
                              size="small"
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
                        <TableCell align="center">{row.flightNumber}</TableCell>
                        <TableCell align="center">
                          {row.departureAirport}
                        </TableCell>
                        <TableCell align="center">
                          <IoIosAirplane />
                        </TableCell>
                        <TableCell align="center">
                          {row.arrivalAirport}
                        </TableCell>
                        <TableCell align="center">
                          {getDate(row.departureDate)}
                        </TableCell>
                        <TableCell align="center">
                          {getDate(row.arrivalDate)}
                        </TableCell>
                        <TableCell align="center">
                          {getPrice(cabinClass, row) -
                            data.oldReservation.totalPrice +
                            "£"}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ fontStyle: "italic" }}
                        >
                          <Button id={row._id}>Choose Flight</Button>
                        </TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell
                          style={{ paddingBottom: 0, paddingTop: 0 }}
                          colSpan={12}
                        >
                          <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                              <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                                fontStyle="italic"
                              >
                                Details
                              </Typography>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell
                                      align="center"
                                      style={{ fontStyle: "italic" }}
                                    >
                                      Departure Time
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ fontStyle: "italic" }}
                                    >
                                      Duration{" "}
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ fontStyle: "italic" }}
                                    >
                                      Arrival Time
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow key={row._id}>
                                    <TableCell
                                      align="center"
                                      style={{ fontStyle: "italic" }}
                                    >
                                      {row.departureTime}
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ fontStyle: "italic" }}
                                    >
                                      {row.duration}
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ fontStyle: "italic" }}
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
      )}
    </div>
  );
};

export default FlightsTable;
