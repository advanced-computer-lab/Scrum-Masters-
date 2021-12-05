import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Typography } from "@mui/material";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SeatMap from "../../../components/user/existing/SeatMap";

<<<<<<< HEAD
const SelectSeat = () => {
=======
const SelectSeat = (props) => {
>>>>>>> dev
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
<<<<<<< HEAD
      list.map((passenger) => ({
        id: passenger.id, //user
=======
      list.map((passenger, index) => ({
        id: "pas_" + (index + 1), //user
>>>>>>> dev
        name: passenger.firstName + " " + passenger.lastName, //user
        cabin: passenger.cabin, //cabin
        type: passenger.type, //passed from search/reservation
      }))
    );
  };
<<<<<<< HEAD

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
=======
  const handleSeats = (seats) => {
     seats.forEach((y) => {
       console.log(y.innerText); //seat number
     });
    var travellers = props.passengers;
    travellers.forEach((traveller, index) => {
       traveller.departureSeat= seats[index].innerText
       traveller.returnSeat= seats[index+props.numberPassengers].innerText
    })
    console.log("ttt", travellers);
    props.handleTravellers(travellers);
  }

  useEffect(() => {
    console.log("props", props);
    console.log("props departure flight", props.departureFlight.flight);
    setDepartureFlight(props.departureFlight.flight);
    setReturnFlight(props.returnFlight.flight);
    axios
      .get(`http://localhost:8081/user/reserved/${props.departureId}`)
      .then((result) => {
        console.log("departure flight seats", result.data);
>>>>>>> dev
        setDepartureSeats(result.data);
      })
      .catch((err) => console.log(err));
    axios
<<<<<<< HEAD
      .get(`http://localhost:8081/user/reserved/61a67c48e60d868d8b93a41c`)
      .then((result) => {
        console.log("return flight", result.data);
        setReturnSeats(result.data);
      })
      .catch((err) => console.log(err));
    createPassengers(list);
    // setTimeout(() => setLoading(false), 5000);
=======
      .get(`http://localhost:8081/user/reserved/${props.returnId}`)
      .then((result) => {
        console.log("return flight seats", result.data);
        setReturnSeats(result.data);
      })
      .catch((err) => console.log(err));
    createPassengers(props.passengers);
   // setTimeout(() => {}, 4000);
>>>>>>> dev
  }, []);
  const onFetch = () => {
    setLoading(false);
  };
  return (
<<<<<<< HEAD
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
            color="#4ea8de"
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
=======
    // <Container>
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
        color="dimgrey"
        fontStyle="italic"
        style={{ marginTop: "1%", marginLeft: "2%" }}
      >
        Select your preferred seats.
      </Typography>
      {loading && (
        <Loader
          type="Plane"
          color="#4ea8de"
          height={100}
          width={100}
          // timeout={5000}
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
            departureCabin={props.cabin}
            returnCabin={props.cabin}
            passengers={passengers}
            loading={loading}
          onFetch={onFetch}
          handleSeats={handleSeats}
          />
        )}
    </div>
    // </Container>
  );
};

export default SelectSeat;
>>>>>>> dev
