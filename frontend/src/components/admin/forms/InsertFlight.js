import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContentText } from "@mui/material";
//import  Error  from "../../snackbars/Error";


const axios = require("axios").default;

const InsertFlight = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [noOfEconomy, setNoOfEconomy] = useState("");
  const [noOfBusiness, setNoOfBusiness] = useState("");
  const [noOfFirstClass, setNoOfFirstClass] = useState("");
  const [flight, setFlight] = useState();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [economyPrice,setEconomyPrice]=useState(0);
  const [businessPrice,setBusinessPrice]=useState(0);
  const [firstPrice,setFirstPrice]=useState(0);

  var Data = {};
  const history = useHistory();
  const showAlert = () => {
    setOpen(true);
  };
  const getDate = (input) => {
    const date = new Date(input);
    return (
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    );
  };
  const alertClose = () => {
    setOpen(false);
    return false;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    Data = {
      flightNumber,
      departureTime,
      arrivalTime,
      departureDate,
      arrivalDate,
      departureAirport,
      arrivalAirport,
      economy: { noOfSeats: noOfEconomy },
      business: { noOfSeats: noOfBusiness },
      firstClass: { noOfSeats: noOfFirstClass },
      business:{adultPrice:businessPrice},
      economy:{adultPrice:economyPrice},
      firstClass:{adultPrice:firstPrice}


    };

    axios
      .post("http://localhost:8081/admin/create", Data)
      .then((res) => {
        console.log("this is the res", res);
        console.log("This is the res data object", res.data);
        if (res.data.message) {
          setError(true);
          setMessage(res.data.message);
          showAlert();
        } else {
          setFlight(res.data);
          showAlert();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Box
        component="form"
        id="insert-form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <Stack
          direction="row"
          spacing={5}
          style={{ marginTop: "10px", marginLeft: "30%", marginRight: "35%" }}
        >
          <Stack direction="column" spacing={3} style={{ marginTop: "10px" }}>
            <div>
              <TextField
                required
                type="Number"
                // placeholder='Flight Number'
                variant="standard"
                label="Flight Number"
                name="flightNumber"
                value={flightNumber}
                onChange={(event) => {
                  setFlightNumber(event.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <div>
              <TextField
                required
                type="time"
                // placeholder='Departure Time'
                label="Departure Time"
                variant="standard"
                name="departureTime"
                value={departureTime}
                onChange={(event) => {
                  setDepartureTime(event.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <div>
              <TextField
                required
                type="time"
                label="Arrival Time"
                variant="standard"
                // placeholder='Arrival Time'
                name="arrivalTime"
                value={arrivalTime}
                onChange={(event) => {
                  setArrivalTime(event.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <div>
              <TextField
                required
                type="Date"
                // placeholder='Departure Date'
                name="departureDate"
                variant="standard"
                label="Departure Date"
                value={departureDate}
                onChange={(event) => {
                  setDepartureDate(event.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <div>
              <TextField
                required
                type="Date"
                placeholder="Arrival Date"
                variant="standard"
                label="Arrival Date"
                name="arrivalDate"
                value={arrivalDate}
                onChange={(event) => {
                  setArrivalDate(event.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </Stack>

          <Stack direction="column" spacing={3} style={{ marginTop: "10px" }}>
            <div>
              <TextField
                required
                type="String"
                // placeholder="Departure Airport"
                variant="standard"
                label="Departure Airport"
                name="departureAirport"
                value={departureAirport}
                onChange={(event) => {
                  setDepartureAirport(event.target.value.toUpperCase());
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <TextField
                required
                type="String"
                // placeholder='Arrival Airport'
                variant="standard"
                label="Arrival Airport"
                name="arrivalAirport"
                value={arrivalAirport}
                onChange={(event) => {
                  setArrivalAirport(event.target.value.toUpperCase());
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <TextField
                required
                variant="standard"
                label="Number of Economy Seats"
                type="Number"
                // placeholder='Number of Economy'
                name="noOfEconomy"
                value={noOfEconomy}
                onChange={(event) => {
                  setNoOfEconomy(event.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <TextField
                required
                type="Number"
                variant="standard"
                label="Number of Business Seats"
                // placeholder='Number of Business'
                name="noOfBusiness"
                value={noOfBusiness}
                onChange={(event) => {
                  setNoOfBusiness(event.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <div>
              <TextField
                required
                type="Number"
                variant="standard"
                label="Number of First Class Seats"
                // placeholder='Number of First Class'
                name="noOfFirstClass"
                value={noOfFirstClass}
                onChange={(event) => {
                  setNoOfFirstClass(event.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <Stack direction="column">
            <div>
            <TextField
                required
                type="Number"
                label="Economy Price"
                variant="standard"
                // placeholder='Arrival Time'
                name="economyPrice"
                value={economyPrice}
                onChange={(event) => {
                  setEconomyPrice(event.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
               </div>
               <div>
            <TextField
                required
                type="Number"
                label="First Class Price"
                variant="standard"
                // placeholder='Arrival Time'
                name="firstPrice"
                value={firstPrice}
                onChange={(event) => {
                  setFirstPrice(event.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
               </div>
               <div>
            <TextField
                required
                type="Number"
                label="Business Price"
                variant="standard"
                // placeholder='Arrival Time'
                name="businessPrice"
                value={businessPrice}
                onChange={(event) => {
                  setBusinessPrice(event.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
               </div>
              </Stack>
           
          </Stack>
        </Stack>
        <React.Fragment>
          <Button
            type="SUBMIT"
            aria-label="Add"
            style={{
              padding: "5px",
              label: "add flight",

              backgroundColor: "#5e60ce",
              border: "0 none",
              cursor: "pointer",
              borderBlock: "5px",
              color: "white",
              fontFamily: "cursive",
              fontSize: "5",
              width: "135px",
              height: "60px",

              margin: 0,

              align: "center",
              location: "center",
              position: "relative",
              top: "25px",
              right: "60%",
              left: "1%",
              variant: "fill",
            }}
          >
            {" "}
            Add Flight{" "}
          </Button>
          {flight && !error && (
            <Dialog open={open} onClose={alertClose}>
              <DialogTitle
                id="alert-dialog-title"
                color="purple"
                style={{ textAlign: "center" }}
              >
                {"Flight has been successfully added."}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Flight Number: <b>{flight.flightNumber}</b>. <br />
                  Departing From: <b>{flight.departureAirport}</b>&nbsp;on:{" "}
                  <b>{getDate(flight.departureDate)}</b>&nbsp;at:{" "}
                  <b>{flight.departureTime}</b>. <br />
                  Arriving To: <b>{flight.arrivalAirport}</b>&nbsp;on:{" "}
                  <b>{getDate(flight.arrivalDate)}</b>&nbsp;at:{" "}
                  <b>{flight.arrivalTime}</b>
                  . <br />
                  Flight Duration: <b>{flight.duration}</b>. <br />
                  Economy Seats: <b>{flight.economy.noOfSeats}</b>.
                  <br />
                  Business Class Seats: <b>{flight.business.noOfSeats}</b>.{" "}
                  <br />
                  First Class Seats:<b> {flight.firstClass.noOfSeats}</b>.{" "}
                  <br />
                  Economy Ticket Price:<b>{flight.economy.adultPrice}</b>
                  <br />
                  First Class Ticket Price:<b>{flight.firstClass.adultPrice}</b>
                  <br />
                 Business Ticket Price:<b>{flight.business.adultPrice}</b>
                 <br />
                  Total Seats: <b>{flight.noOfSeats}</b>.
               
                </DialogContentText>
              </DialogContent>
              <DialogActions style={{ justifyContent: "center" }}>
                <Button onClick={() => history.push("/schedule")}>
                  View Schedule
                </Button>
                <Button
                  onClick={() => {
                    alertClose();
                    window.location.reload(false);
                  }}
                  autoFocus
                >
                  Add More Flights
                </Button>
              </DialogActions>
            </Dialog>
          )}

          {/* handling error */}

          {error && (
            <Dialog open={open} onClose={alertClose}>
              <DialogTitle
                id="alert-dialog-title"
                color="purple"
                style={{ textAlign: "center" }}
              >
                {"Cannot insert Flight."}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {message}
                </DialogContentText>
              </DialogContent>
              <DialogActions style={{ justifyContent: "center" }}>
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
        </React.Fragment>
      </Box>
    </Container>
  );
};

export default InsertFlight;
