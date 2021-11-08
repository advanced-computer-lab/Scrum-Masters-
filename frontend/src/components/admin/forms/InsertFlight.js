import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Stack from "@mui/material/Stack";

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

  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Hello Lajaleejo");
    let Data = {
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
      //noOfSeats
    };
    console.log(Data);

    axios
      .post("http://localhost:8081/admin/create", Data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      component="form"
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
              placeholder="Flight Number"
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
              placeholder="Departure Time"
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
              placeholder="Arrival Time"
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
              placeholder="Departure Date"
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
              placeholder="Departure Airport"
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
              placeholder="Arrival Airport"
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
              label="Economy Class Seats"
              type="Number"
              placeholder="Economy Class Seats"
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
              label="Business Class Seats"
              placeholder="Business Class Seats"
              name="noOfBusiness"
              value={noOfBusiness}
              multiline
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
              label="First Class Seats"
              placeholder="First Class Seats"
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

      <input
        type="submit"
        style={{
          padding: "5px",
          backgroundColor: "#5e60ce",
          border: "0 none",
          borderRadius: "5px",
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
          right: "50%",
          left: "45%",
          variant: "fill",
        }}
        
      />
    </Box>
  );
};

export default InsertFlight;
