import { React, useEffect, useState } from "react";
import EditReservationButton from "./buttons/EditReservationButton";
import { GridCellParams } from "@mui/x-data-grid";
import emailjs from "emailjs-com";
import axios from "axios";
import { Container } from "react-bootstrap";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { sizing } from "@mui/system";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import image1 from "../../../images/reservations.jpg";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FlightIcon from "@mui/icons-material/Flight";
import { IoAirplaneOutline } from "react-icons/io5";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import LinearScaleOutlinedIcon from "@mui/icons-material/LinearScaleOutlined";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AirplanemodeActive from "@mui/icons-material/AirplanemodeActiveRounded";
import FlightClassTwoToneIcon from "@mui/icons-material/FlightClassTwoTone";
import CardMedia from "@mui/material/CardMedia";
import { positions } from "@mui/system";
import jwt_decode from "jwt-decode";
import {
  Button,
  Box,
  Modal,
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
  Stack,
  Tooltip,
  Typography,
  tableCellClasses,
  Divider,
  Paper,
} from "@mui/material";
import FlightLandRounded from "@mui/icons-material/FlightLandRounded";
import LinearScaleOutlined from "@mui/icons-material/LinearScaleOutlined";

export default function BasicTable(onDelete) {
  //   const tickets = [
  //     {
  //         "_id": "61c61d76806c2bd5679f9406",
  //         "seatNum": "3D",
  //         "ticketType": "departing",
  //         "passengerType": "adult",
  //         "firstName": "Maram",
  //         "lastName": "Benamer",
  //         "cabin": "economy",
  //         "flightId": {
  //             "economy": {
  //                 "baggageAllowance": 2,
  //                 "noOfSeats": 78,
  //                 "childPrice": 0,
  //                 "adultPrice": 0,
  //                 "availableSeats": 71
  //             },
  //             "business": {
  //                 "baggageAllowance": 2,
  //                 "noOfSeats": 5,
  //                 "childPrice": 0,
  //                 "adultPrice": 0,
  //                 "availableSeats": -1
  //             },
  //             "firstClass": {
  //                 "baggageAllowance": 3,
  //                 "noOfSeats": 5,
  //                 "childPrice": 0,
  //                 "adultPrice": 0,
  //                 "availableSeats": 5
  //             },
  //             "_id": "61a3e0ec766320f267156a54",
  //             "flightNumber": 128,
  //             "departureTime": "16:04",
  //             "arrivalTime": "10:04",
  //             "departureDate": "2021-11-01T00:00:00.000Z",
  //             "arrivalDate": "2021-11-02T00:00:00.000Z",
  //             "departureAirport": "JPN",
  //             "arrivalAirport": "JFK",
  //             "__v": 0,
  //             "noOfSeats": 88,
  //             "availableSeats": 75,
  //             "duration": "18h 0m",
  //             "id": "61a3e0ec766320f267156a54"
  //         },
  //         "reservationId": "61c61d76806c2bd5679f9402",
  //         "price": 0,
  //         "passportNumber": "54",
  //         "__v": 0,
  //         "id": "61c61d76806c2bd5679f9406"
  //     },
  //     {
  //         "_id": "61c61d76806c2bd5679f9408",
  //         "seatNum": "6E",
  //         "ticketType": "return",
  //         "passengerType": "adult",
  //         "firstName": "Maram",
  //         "lastName": "Benamer",
  //         "cabin": "economy",
  //         "flightId": {
  //             "economy": {
  //                 "noOfSeats": 100,
  //                 "childPrice": 750,
  //                 "adultPrice": 1000,
  //                 "baggageAllowance": 2,
  //                 "availableSeats": 93
  //             },
  //             "business": {
  //                 "noOfSeats": 10,
  //                 "childPrice": 1100,
  //                 "adultPrice": 1800,
  //                 "baggageAllowance": 2,
  //                 "availableSeats": 99
  //             },
  //             "firstClass": {
  //                 "noOfSeats": 10,
  //                 "childPrice": 1500,
  //                 "adultPrice": 3000,
  //                 "baggageAllowance": 3,
  //                 "availableSeats": 100
  //             },
  //             "_id": "61aa7405de15788ef7e9e362",
  //             "flightNumber": 895233,
  //             "departureTime": "21:46",
  //             "arrivalTime": "21:47",
  //             "departureDate": "2021-11-03T00:00:00.000Z",
  //             "arrivalDate": "2021-11-03T00:00:00.000Z",
  //             "departureAirport": "JFK",
  //             "arrivalAirport": "JPN",
  //             "__v": 0,
  //             "noOfSeats": 120,
  //             "availableSeats": 292,
  //             "duration": "0h 1m",
  //             "id": "61aa7405de15788ef7e9e362"
  //         },
  //         "reservationId": "61c61d76806c2bd5679f9402",
  //         "price": 1000,
  //         "passportNumber": "54",
  //         "__v": 0,
  //         "id": "61c61d76806c2bd5679f9408"
  //     },
  //     {
  //         "_id": "61c61d76806c2bd5679f940a",
  //         "seatNum": "3C",
  //         "ticketType": "departing",
  //         "passengerType": "adult",
  //         "firstName": "SeifEldien",
  //         "lastName": "Maged",
  //         "cabin": "economy",
  //         "flightId": {
  //             "economy": {
  //                 "baggageAllowance": 2,
  //                 "noOfSeats": 78,
  //                 "childPrice": 0,
  //                 "adultPrice": 0,
  //                 "availableSeats": 71
  //             },
  //             "business": {
  //                 "baggageAllowance": 2,
  //                 "noOfSeats": 5,
  //                 "childPrice": 0,
  //                 "adultPrice": 0,
  //                 "availableSeats": -1
  //             },
  //             "firstClass": {
  //                 "baggageAllowance": 3,
  //                 "noOfSeats": 5,
  //                 "childPrice": 0,
  //                 "adultPrice": 0,
  //                 "availableSeats": 5
  //             },
  //             "_id": "61a3e0ec766320f267156a54",
  //             "flightNumber": 128,
  //             "departureTime": "16:04",
  //             "arrivalTime": "10:04",
  //             "departureDate": "2021-11-01T00:00:00.000Z",
  //             "arrivalDate": "2021-11-02T00:00:00.000Z",
  //             "departureAirport": "JPN",
  //             "arrivalAirport": "JFK",
  //             "__v": 0,
  //             "noOfSeats": 88,
  //             "availableSeats": 75,
  //             "duration": "18h 0m",
  //             "id": "61a3e0ec766320f267156a54"
  //         },
  //         "reservationId": "61c61d76806c2bd5679f9402",
  //         "price": 0,
  //         "__v": 0,
  //         "id": "61c61d76806c2bd5679f940a"
  //     },
  //     {
  //         "_id": "61c61d76806c2bd5679f940c",
  //         "seatNum": "21D",
  //         "ticketType": "return",
  //         "passengerType": "adult",
  //         "firstName": "SeifEldien",
  //         "lastName": "Maged",
  //         "cabin": "economy",
  //         "flightId": {
  //             "economy": {
  //                 "noOfSeats": 100,
  //                 "childPrice": 750,
  //                 "adultPrice": 1000,
  //                 "baggageAllowance": 2,
  //                 "availableSeats": 93
  //             },
  //             "business": {
  //                 "noOfSeats": 10,
  //                 "childPrice": 1100,
  //                 "adultPrice": 1800,
  //                 "baggageAllowance": 2,
  //                 "availableSeats": 99
  //             },
  //             "firstClass": {
  //                 "noOfSeats": 10,
  //                 "childPrice": 1500,
  //                 "adultPrice": 3000,
  //                 "baggageAllowance": 3,
  //                 "availableSeats": 100
  //             },
  //             "_id": "61aa7405de15788ef7e9e362",
  //             "flightNumber": 895233,
  //             "departureTime": "21:46",
  //             "arrivalTime": "21:47",
  //             "departureDate": "2021-11-03T00:00:00.000Z",
  //             "arrivalDate": "2021-11-03T00:00:00.000Z",
  //             "departureAirport": "JFK",
  //             "arrivalAirport": "JPN",
  //             "__v": 0,
  //             "noOfSeats": 120,
  //             "availableSeats": 292,
  //             "duration": "0h 1m",
  //             "id": "61aa7405de15788ef7e9e362"
  //         },
  //         "reservationId": "61c61d76806c2bd5679f9402",
  //         "price": 1000,
  //         "__v": 0,
  //         "id": "61c61d76806c2bd5679f940c"
  //     }
  // ]
  const [tickets, setTickets] = useState([]);
  const [open, setOpen] = useState(false);

  const [totalPrice, setTotalPrice] = useState();
  // const [deleteRes, setdeleteRes] = useState(true);
  const token = window.sessionStorage.getItem("token");
  var decodedToken;
  if (token) decodedToken = jwt_decode(token);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const [data, getData] = useState([]);
  const getDate = (input) => {
    const date = new Date(input);
    return (
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    );
  };

  // const handleClickOpenDialog = () => {
  //   setOpenDialog(true);
  // };

  // const handleCloseDialog = () => {
  //   setOpenDialog(false);
  // };
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));
  const deleteReservation = (reservationId, price) => {
    setTotalPrice(price);
    handleClose();
    // console.log('an hena', reservationId);
    axios
      .delete(`http://localhost:8081/user/delete/reservation/${reservationId}`)
      .then((res) => {
        sendEmail(price);
        console.log("deleted");
      })
      .catch((err) => {
        console.log(err);
      });
    //onDelete();
  };
  const getTickets = (reservationId) => {
    console.log("an hena", reservationId);
    axios
      .get(`http://localhost:8081/user/tickets/${reservationId}`)
      .then((res) => {
        console.log(res);
        setTickets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //onDelete();
  };
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const sendEmail = (price) => {
    var templateParams = {
      totalPrice: price,
      reply_to: "Check this out!",
      from_name: "Cloud 9",
    };
    emailjs
      .send(
        "service_ACL",
        "template_ryeq8rf",
        templateParams,
        "user_i6KjynhTdTItE6MZB2wkB"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);

          setTimeout(() => {}, 3000);
          window.location.reload(false);
        },
        function (error) {
          console.log("FAILED...", error);
          // window.location.reload(false);
        }
      );
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const ViewReservations = () => {
    useEffect(() => {
      axios
        .get(`http://localhost:8081/user/reservations/${decodedToken.id}`)
        .then((res) => {
          getData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  };
  ViewReservations();
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const StyledTableElement = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      border: "2px",
      color: theme.palette.common.white,
    },
  }));

  return (
    <Container>
      <div style={{ marginTop: "2%", marginBottom: "2%" }}>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="customized table"
            light="false"
          >
            <TableHead>
              <StyledTableRow>
                <StyledTableCell />
                <StyledTableCell align="center">Flight Number</StyledTableCell>
                <StyledTableCell align="center">Depature date</StyledTableCell>
                <StyledTableCell align="center">Depature time</StyledTableCell>
                <StyledTableCell align="center">Arrival date</StyledTableCell>
                <StyledTableCell align="center">Arrival time</StyledTableCell>
                <StyledTableCell align="center">Cabin</StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ width: "3%" }}
                ></StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ width: "3%" }}
                ></StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ width: "7%" }}
                ></StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: "0px" } }}
                >
                  <StyledTableCell style={{ width: "15%" }}>
                    <Stack
                      spacing={2}
                      divider={<Divider orientation="horizontal" flexItem />}
                    >
                      <div>
                        Departing Flight <FlightTakeoffIcon color="primary" />{" "}
                        {row.departingFlight.from}
                      </div>
                      <div>
                        Retrun Flight <FlightLandRounded color="error" />{" "}
                        {row.arrivalFlight.from}
                      </div>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableElement align="center">
                    <Stack
                      spacing={2}
                      divider={<Divider orientation="horizontal" flexItem />}
                    >
                      <div>{row.departingFlight.flightNumber}</div>
                      <div>{row.arrivalFlight.flightNumber}</div>
                    </Stack>
                  </StyledTableElement>
                  <StyledTableCell align="center">
                    <Stack
                      spacing={2}
                      divider={<Divider orientation="horizontal" flexItem />}
                    >
                      <div>{getDate(row.departingFlight.departureDate)}</div>
                      <div>{getDate(row.arrivalFlight.departureDate)}</div>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Stack
                      spacing={2}
                      divider={<Divider orientation="horizontal" flexItem />}
                    >
                      <div>{row.departingFlight.departureTime}</div>
                      <div>{row.arrivalFlight.departureTime}</div>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {
                      <Stack
                        spacing={2}
                        divider={<Divider orientation="horizontal" flexItem />}
                      >
                        <div>{getDate(row.departingFlight.arrivalDate)}</div>
                        <div>{getDate(row.arrivalFlight.arrivalDate)}</div>
                      </Stack>
                    }
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Stack
                      spacing={2}
                      divider={<Divider orientation="horizontal" flexItem />}
                    >
                      <div>{row.departingFlight.arrivalTime}</div>
                      <div>{row.arrivalFlight.arrivalTime}</div>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.departingFlight.cabin === "first"
                      ? "First Class"
                      : row.departingFlight.cabin.charAt(0).toUpperCase() +
                        row.departingFlight.cabin.substring(1)}
                  </StyledTableCell>
                  <TableCell>
                    <EditReservationButton resId={row.reservationId} />
                  </TableCell>
                  <StyledTableCell>
                    <div>
                      <Stack spacing={-0.5} orientation="horizontal">
                        <IconButton
                          color="error"
                          variant="outlined"
                          onClick={() => {
                            handleClickOpen();
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <small align="center">delete</small>
                      </Stack>
                      {open && (
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Are you sure you want to cancel your reservation?
                            </Typography>
                            <Button onClick={handleClose}>No </Button>
                            <Button
                              onClick={() => {
                                // setTotalPrice(row.totalPrice);
                                deleteReservation(
                                  row.reservationId,
                                  row.totalPrice
                                );
                              }}
                            >
                              Yes
                            </Button>
                          </Box>
                        </Modal>
                      )}
                    </div>
                  </StyledTableCell>
                  <TableCell>
                    <Stack spacing={-0.5} orientation="horizontal">
                      <IconButton
                        color="success"
                        onClick={() => {
                          // setTotalPrice(row.totalPrice);
                          getTickets(row.reservationId);
                          handleClickOpenDialog();
                        }}
                      >
                        <AirplaneTicketIcon fontSize="large" />
                      </IconButton>
                      <small align="center">tickets</small>
                    </Stack>
                    <Dialog
                      fullScreen
                      open={openDialog}
                      onClose={handleCloseDialog}
                      TransitionComponent={Transition}
                    >
                      <AppBar sx={{ position: "relative" }}>
                        <Toolbar>
                          <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleCloseDialog}
                            aria-label="close"
                          >
                            <CloseIcon />
                          </IconButton>
                        </Toolbar>
                      </AppBar>
                      <Container>
                        {tickets.map((ticket) => (
                          <Card
                            sx={{
                              minWidth: 275,
                              marginTop: "2%",
                              background: image1,
                            }}
                          >
                            <CardContent>
                              <AppBar
                                position="static"
                                border
                                sx={{ borderRadius: 1, padding: 0 }}
                              >
                                <Toolbar variant="dense">
                                  <Typography>Ticket preview</Typography>
                                </Toolbar>
                              </AppBar>
                              <Stack spacing={2} sx={{ alignItems: "center" }}>
                                <Stack
                                  direction="row"
                                  spacing={8}
                                  // sx={{ pl: "35%" }}
                                >
                                  <Typography sx={{ fontSize: 60 }}>
                                    {ticket.flightId.departureAirport}
                                  </Typography>
                                  <IoAirplaneOutline size={100} />
                                  <Typography sx={{ fontSize: 60 }}>
                                    {ticket.flightId.arrivalAirport}
                                  </Typography>
                                </Stack>
                                <Stack direction="row" spacing={28}>
                                  <Stack spacing={2}>
                                    <Typography sx={{ fontSize: 20 }}>
                                      {getDate(ticket.flightId.departureDate)}
                                      <CalendarTodayTwoToneIcon />
                                    </Typography>
                                    <Typography>
                                      {ticket.flightId.departureTime}
                                      <AccessTimeTwoToneIcon />
                                    </Typography>
                                  </Stack>
                                  <Stack spacing={2}>
                                    <Typography sx={{ fontSize: 20 }}>
                                      {getDate(ticket.flightId.arrivalDate)}
                                      <CalendarTodayTwoToneIcon />
                                    </Typography>
                                    <Typography>
                                      {ticket.flightId.arrivalTime}
                                      <AccessTimeTwoToneIcon />
                                    </Typography>
                                  </Stack>
                                </Stack>
                                <Stack
                                  direction={"row"}
                                  spacing={16}
                                  // sx={{ pl: "35%" }}
                                >
                                  <Typography sx={{ fontSize: 20 }}>
                                    {ticket.flightId.flightNumber}
                                    <AirplanemodeActive />
                                  </Typography>
                                  <Typography sx={{ fontSize: 20 }}>
                                    {ticket.seatNum}
                                    <AirlineSeatReclineExtraIcon />
                                  </Typography>
                                  <Typography sx={{ fontSize: 20 }}>
                                    {ticket.cabin}
                                  </Typography>
                                </Stack>
                              </Stack>
                            </CardContent>
                          </Card>
                        ))}
                      </Container>
                    </Dialog>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}
