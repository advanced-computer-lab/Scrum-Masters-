import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Typography } from "@mui/material";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SeatMap from "../../../components/user/existing/SeatMap";

const SelectSeat = () => {
  const [departureFlight, setDepartureFlight] = useState();
  const [returnFlight, setReturnFlight] = useState();
  const [departureSeats, setDepartureSeats] = useState();
  const [returnSeats, setReturnSeats] = useState();
  const [passengers, setPassengers] = useState();
  const [loading, setLoading] = useState(true);
  var list = [
    {
      id: "pas_1",
      firstName: "Gigi",
      lastName: "Gawanty",
      cabin: "economy",
      type: "adult",
    },
    {
      id: "pas_2",
      firstName: "Gigi",
      lastName: "Hadid",
      cabin: "economy",
      type: "adult",
    },
  ];
  const createPassengers = (list) => {
    //passengers are the users with their details
    setPassengers(
      list.map((passenger) => ({
        id: passenger.id, //user
        name: passenger.firstName + " " + passenger.lastName, //user
        cabin: passenger.cabin, //cabin
        type: passenger.type, //passed from search/reservation
      }))
    );
  };

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
        console.log("departure flight", result.data);
        setDepartureSeats(result.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:8081/user/reserved/61a67c48e60d868d8b93a41c`)
      .then((result) => {
        console.log("return flight", result.data);
        setReturnSeats(result.data);
      })
      .catch((err) => console.log(err));
    createPassengers(list);
    // setTimeout(() => setLoading(false), 5000);
  }, []);
  const onFetch = () => {
    setLoading(false);
  };
  return (
    <Container>
      <div
        style={{
          boxShadow: "0 3px 10px rgb(105 48 195 / 60%)",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          component="header"
          align="left"
          // fontWeight="lighter"
          color="dimgrey"
          fontStyle="italic"
          style={{ marginTop: "1%", marginLeft: "2%" }}
        >
          Select your preferred seats.
        </Typography>
        {loading && (
          <Loader
            type="Plane"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={5000}
          />
        )}
        {departureFlight &&
          returnFlight &&
          departureSeats &&
          returnSeats &&
          passengers && (
            <SeatMap
              flights={[departureFlight, returnFlight]}
              departureSeats={departureSeats}
              returnSeats={returnSeats}
              departureCabin="business"
              returnCabin="economy"
              passengers={passengers}
              loading={loading}
              onFetch={onFetch}
            />
          )}
      </div>
    </Container>
  );
};

export default SelectSeat;
