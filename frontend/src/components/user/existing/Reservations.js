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
import CardMedia from "@mui/material/CardMedia";
import { positions } from "@mui/system";
import jwt_decode from "jwt-decode";
import QRCODE from '../../../images/QRcode.png';
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
  styled,
  Divider,
  Paper,
} from "@mui/material";

export default function BasicTable(onDelete) {
  const [tickets, setTickets] = useState([]);
  const [open, setOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState();
  const [email, setEmail] = useState("");
  const[deleteFlight,setDelete]=useState(false);
  // const [deleteRes, setdeleteRes] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [data, getData] = useState([]);
  const getDate = (input) => {
    const date = new Date(input);
    return (
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    );
  };
  var token;
  var decodedToken;
  if (JSON.parse(window.sessionStorage.getItem("existing"))) {
    token = window.sessionStorage.getItem("token");
    decodedToken = jwt_decode(window.sessionStorage.getItem("token"));
  }

  const deleteReservation = (reservationId, price) => {
    setTotalPrice(price);
    var toto = price;
    const sendCancelMail = (toto) => {
      // decodedToken.props = props;
      decodedToken.email = email;
      decodedToken.price = price;

      console.log(
        "ANA EL cancelation emaillllllll!!!!" +
          JSON.stringify(decodedToken.email)
      );
      // const lol = props.departureFlight.arrivalAirport;
      axios
        .post("http://localhost:8081/user/cancelMail", decodedToken)
        .then(result=>
          {
            //console.log("done!!" +"ELI RAYEH LEL BACKEND HOWA" +JSON.stringify(decodedToken));
            //setDelete(!deleteFlight);
            
        }
        );
    };
    handleClose();
    // console.log('an hena', reservationId);
    axios
      .delete(`http://localhost:8081/user/delete/reservation/${reservationId}`)
      .then((res) => {
        sendEmail(price);
        console.log("deleted");
        //sendEmail(price);
        sendCancelMail();
       //setDelete(!deleteFlight);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    //onDelete();
  };

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
        .get(`http://localhost:8081/user/profile/${decodedToken.id}`)
        .then((result) => {
          console.log("axios get", result);
          console.log("el email ahuuu!!!!!", result.data.email);
          setEmail(result.data.email);
        })
        .catch((err) => console.log(err));
      axios
        .get("http://localhost:8081/user/reservations/61aa2eb9d3eee0b9e4921105")
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
      backgroundColor: "#5e60ce",
      color: theme.palette.common.white,
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
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell align="center">Flight Number</StyledTableCell>
                <StyledTableCell align="center">Depature date</StyledTableCell>
                <StyledTableCell align="center">Depature time</StyledTableCell>
                <StyledTableCell align="center">Arrival date</StyledTableCell>
                <StyledTableCell align="center">Arrival time</StyledTableCell>
                <StyledTableCell align="center">Cabin</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: "0px" } }}
                >
                  <TableCell style={{ width: "12%" }}>
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
                  </TableCell>
                  <StyledTableElement align="center">
                    <Stack
                      spacing={2}
                      divider={<Divider orientation="horizontal" flexItem />}
                    >
                      <div>{row.departingFlight.flightNumber}</div>
                      <div>{row.arrivalFlight.flightNumber}</div>
                    </Stack>
                  </StyledTableElement>
                  <TableCell align="center">
                    <Stack
                      spacing={2}
                      divider={<Divider orientation="horizontal" flexItem />}
                    >
                      <div>{getDate(row.departingFlight.departureDate)}</div>
                      <div>{getDate(row.arrivalFlight.departureDate)}</div>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Stack
                      spacing={2}
                      divider={<Divider orientation="horizontal" flexItem />}
                    >
                      <div>{row.departingFlight.departureTime}</div>
                      <div>{row.arrivalFlight.departureTime}</div>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    {
                      <Stack
                        spacing={2}
                        divider={<Divider orientation="horizontal" flexItem />}
                      >
                        <div>{getDate(row.departingFlight.arrivalDate)}</div>
                        <div>{getDate(row.arrivalFlight.arrivalDate)}</div>
                      </Stack>
                    }
                  </TableCell>
                  <TableCell align="center">
                    <Stack
                      spacing={2}
                      divider={<Divider orientation="horizontal" flexItem />}
                    >
                      <div>{row.departingFlight.arrivalTime}</div>
                      <div>{row.arrivalFlight.arrivalTime}</div>
                    </Stack>
                  </TableCell>
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
                      <Button
                        color="error"
                        variant="outlined"
                        onClick={() => {
                          handleClickOpen();
                        }}
                      >
                        Cancel
                      </Button>
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
                            }}
                          >
                            <CardContent
                              sx={{
                                paddingTop: 0,
                                paddingLeft: 0,
                                paddingRight: 0,
                                pr:'10px'
                                
                              }}
                            >
                             
                              <AppBar
                                position="static"
                                border
                                sx={{ borderRadius: 1, padding: 0 }}
                              >
                                <Toolbar variant="dense">
                                  <Typography>Ticket preview</Typography>
                                </Toolbar>
                              </AppBar>
                              
                              <Stack spacing={5} direction="row" >
                                <Stack
                                  spacing={2}
                                  sx={{  }}
                                >
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
                                <Stack spacing={2}>
                                  <Typography>Passenger Name</Typography>
                                  <Typography>
                                    {ticket.firstName} {ticket.lastName}
                                  </Typography>
                                  <Typography>Ticket price</Typography>
                                  <Typography>{ticket.price}</Typography>
                                  <Typography>Type</Typography>
                                  <Typography>
                                    {ticket.passengerType}
                                  </Typography>
                                </Stack>
                                <CardMedia
                                  component="img"
                                  sx={{ width: '15%' }}
                                  image={QRCODE}
                                  alt="Live from space album cover"
                                />
                              </Stack>
                              
                              {/* <Divider orientation="vertical" flexItem/> */}
                            </CardContent>
                          </Card>
                        ))}
                      </Container>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}

// const columns = [
//   { field: 'id', headerName: 'Date', width: 90 },
//   {
//     field: 'lastName',
//     headerName: 'Time',
//     width: 150,
//     onclick:(()=>{console.log("el enta 3ayzo")})
//   },
//   {
//     field: 'firstName',
//     headerName: 'Depature',
//     width: 150,
//   },
//   {
//     field: 'age',
//     headerName: 'Arrival',
//     width: 150,
//   },
//   {
//     field: 'FlightNo',
//     headerName: 'FlightNo',
//     width: 150,
//   },
//   {
//     field: 'Cabin',
//     headerName: 'Cabin',
//     width: 150,
//   },

// ];

// const rows = [
//   { id: 1, lastName: 'ayhaga', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//  ];
//const data = axios.get("http://localhost:8081/user/reservations/618939b25ac9e1af44ded417") ;

// export default function DataGridDemo() {
//     const [data, getData] = useState([]);
//     const ViewReservations = () => {
//         useEffect(() => {
//             axios
//               .get("http://localhost:8081/user/reservations/61aa2eb9d3eee0b9e4921105")
//               .then((res) => {
//                 getData(res.data);
//                 console.log(res.data);
//               })
//               .catch((err) => console.log(err));
//           },[])
//     }
//     ViewReservations();
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }
