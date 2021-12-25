import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Typography } from "@mui/material";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SeatMap from "../../../components/user/existing/SeatMap";

const SelectSeat = (props) => {
  const [departureFlight, setDepartureFlight] = useState();
  const [returnFlight, setReturnFlight] = useState({});
  const [departureSeats, setDepartureSeats] = useState();
  const [returnSeats, setReturnSeats] = useState([]);
  const [passengers, setPassengers] = useState();
  const [loading, setLoading] = useState(true);

  const [departureTickets, setDepartureTickets] = useState();
  const [returnTickets, setReturnTickets] = useState([]);

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
  const oldTicket = [
    {
      _id: {
        $oid: "61a397588a78e73125836658",
      },
      seatNum: "1D",
      ticketType: "departing",
      passengerType: "adult",
      cabin: "first",
      firstName: "Donia",
      lastName: "Sharaf",
      flightId: {
        $oid: "61a67c27e60d868d8b93a41a",
      },
      reservationId: {
        $oid: "619ed9e949f05686f3d77d5e",
      },
      price: 10000,
      __v: 0,
    },
    {
      _id: {
        $oid: "61a397588a78e73125836658",
      },
      seatNum: "1C",
      ticketType: "departing",
      passengerType: "adult",
      cabin: "first",
      firstName: "Donia",
      lastName: "Sharaf",
      flightId: {
        $oid: "61a67c27e60d868d8b93a41a",
      },
      reservationId: {
        $oid: "619ed9e949f05686f3d77d5e",
      },
      price: 10000,
      __v: 0,
    },
  ];
  const createPassengers = (list) => {
    setPassengers(
      list.map((passenger, index) => ({
        id: "pas_" + (index + 1), //user
        name: passenger.firstName + " " + passenger.lastName, //user
        cabin: passenger.cabin, //cabin
        type: passenger.type, //passed from search/reservation
      }))
    );
  };
  const handleSeats = (seats) => {
    //props.edit???
    seats.forEach((y) => {
      console.log(y.innerText); //seat number
    });
    var travellers = props.passengers;
    travellers.forEach((traveller, index) => {
      traveller.departureSeat = seats[index].innerText;
      traveller.returnSeat = seats[index + props.numberPassengers].innerText;
    });
    console.log("pre");
    if (!props.edit) props.handleReservation(travellers);
    console.log("ttt", travellers);
  };

  useEffect(() => {
    console.log("props", props);
    console.log("props departure flight", props.departureFlight.flight);
    setDepartureFlight(props.departureFlight.flight);
    setReturnFlight(props.returnFlight.flight); //props + return tickets
    axios
      .get(`http://localhost:8081/user/reserved/${props.departureId}`)
      .then((result) => {
        console.log("departure flight seats", result.data);
        setDepartureSeats(result.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:8081/user/reserved/${props.returnId}`)
      .then((result) => {
        console.log("return flight seats", result.data);
        setReturnSeats(result.data);
      })
      .catch((err) => console.log(err));
    // if (props.edit === true) {
    //   if(oldTicket.length>0)
    //     createPassengers(oldTicket);
    //   else if (returnTickets.length > 0)
    //     createPassengers(returnTickets);
    // }
    // //edit: pass either tickets
    // else
    createPassengers(props.passengers);
    // setTimeout(() => {}, 4000);
  }, []);
  const onFetch = () => {
    setLoading(false);
  };
  return (
    // <Container>
    <div
      style={{
        boxShadow: "0 3px 10px rgb(105 48 195 / 60%)",
      }}
    >
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
            edit={false}
          />
        )}
    </div>
    // </Container>
  );
};

export default SelectSeat;
