import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Typography } from "@mui/material";
import SeatMap from "../../../components/user/existing/SeatMap";

const SelectSeat = () => {
  const [departureFlight, setDepartureFlight] = useState();
  const [returnFlight, setReturnFlight] = useState();
  const [departureSeats, setDepartureSeats] = useState();
  const [returnSeats, setReturnSeats] = useState();
  useEffect(() => {
    axios
      .post("http://localhost:8081/user/search", {
        _id: "61a67c27e60d868d8b93a41a",
      })
      .then((res) => {
        setDepartureFlight(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .post("http://localhost:8081/user/search", {
        _id: "61a67c48e60d868d8b93a41c",
      })
      .then((res) => {
        setReturnFlight(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:8081/user/reserved/61a67c27e60d868d8b93a41a`)
      .then((result) => {
        console.log(result.data);
        setDepartureSeats(result.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:8081/user/reserved/61a67c48e60d868d8b93a41c`)
      .then((result) => {
        console.log(result.data);
        setReturnSeats(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Typography
        variant="h6"
        gutterBottom
        component="header"
        align="left"
        // fontWeight="lighter"
        color="dimgrey"
        fontStyle="italic"
        style={{ marginTop: "1%" }}
      >
        Select your preferred seat(s).
      </Typography>
      <div
        style={{
          boxShadow: "0 3px 10px rgb(105 48 195 / 60%)",
        }}
      >
        <SeatMap
          flights={[departureFlight, returnFlight]}
          departureSeats={departureSeats}
          returnSeats={returnSeats}
          departureCabin="first"
          returnCabin="first"
        />
      </div>
    </Container>
  );
};

export default SelectSeat;
