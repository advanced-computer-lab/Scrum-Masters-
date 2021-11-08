import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DatePicker from "react-date-picker";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Axios } from "axios";
import { Input } from "@mui/material";
import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import { positions } from "@mui/system";
import { makeStyles } from "@mui/material";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { Redirect } from "react-router";

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
  var Data = {};
  const history = useHistory();
  const showAlert = () => {
    setOpen(true);
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
      noOfEconomy,
      noOfBusiness,
      noOfFirstClass,
    };

    axios
      .post("http://localhost:8081/admin/create", Data)
      .then((res) => {
        console.log(res.data);
        setFlight(res.data);
        showAlert();
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
          {flight && (
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
                  <b>{flight.departureDate}</b>&nbsp;at:{" "}
                  <b>{flight.departureTime}</b>. <br />
                  Arriving To: <b>{flight.arrivalAirport}</b>&nbsp;on:{" "}
                  <b>{flight.arrivalDate}</b>&nbsp;at:{" "}
                  <b>{flight.arrivalTime}</b>
                  . <br />
                  Flight Duration: <b>{flight.duration}</b>. <br />
                  Economy Seats: <b>{flight.noOfEconomy}</b>,.
                  <br />
                  Business Class Seats: <b>{flight.noOfBusiness}</b>. <br />
                  First Class Seats:<b> {flight.noOfFirstClass}</b>. <br />
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
        </React.Fragment>
      </Box>
    </Container>
  );
};

export default InsertFlight;
