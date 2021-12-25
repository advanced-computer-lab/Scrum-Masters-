import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Typography } from "@mui/material";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SeatMap from "../../../components/user/existing/SeatMap";
const EditSeat = (props) => {
  const [firstFlight, setFirstFlight] = useState();
  const [secondFlight, setSecondFlight] = useState();
  const [firstSeats, setFirstSeats] = useState();
  const [secondSeats, setSecondSeats] = useState([]);
  const [secondTickets, setSecondTickets] = useState(props.secondTickets || []);
  const [passengers, setPassengers] = useState();
  const [loading, setLoading] = useState(true);
  const [inputFlights, setInputFlights] = useState([]);
  //just a place holder
  const oldTickets = [
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
  const [firstTickets, setFirstTickets] = useState(props.firstTickets);
  const createPassengers = (list) => {
    //passengers are the users with their details
    console.log("boolean", firstTickets);
    //pass departure & arrival tickets, use either one to generate info, use both and sort them from BE
    setPassengers(
      list.map((passenger, index) => ({
        id: "pas_" + (index + 1),
        name: passenger.firstName + " " + passenger.lastName,
        cabin: passenger.cabin,
        type: passenger.passengerType,
        ...(firstTickets.length > 0 &&
          props.edit && {
            departureSeat: firstTickets[index].seatNum,
          }),
        ...(secondTickets.length > 0 &&
          props.edit && {
            returnSeat: secondTickets[index].seatNum,
          }),
      }))
    );
  };

  const handleSeats = (seats) => {
    seats.forEach((y) => {
      console.log(y.innerText); //seat number
    });
    firstTickets.forEach((traveller, index) => {
      traveller.departureSeat = seats[index].innerText;

      if (secondTickets.length > 0)
        secondTickets.returnSeat =
          seats[index + props.numberPassengers].innerText;
    });
    //now first tickets and second tickets contains the old departure (and return) tickets with the new seats only,
    //if the flight number is changed, that's not handled yet
  };
  useEffect(() => {
    console.log("props", props);
    var input = [];
    setFirstFlight(props.firstFlight);
    input.push(props.firstFlight);
    console.log(secondTickets, secondTickets.length);
    if (secondTickets.length > 0 || props.secondFlight) {
      input.push(props.secondFlight);
    }
    axios
      .get(`http://localhost:8081/user/reserved/${props.firstFlight.id}`)
      .then((result) => {
        console.log("first flight seats", result.data);
        setFirstSeats(result.data);
      })
      .catch((err) => console.log(err));
    if (secondTickets.length > 0 || props.secondFlight) {
      axios
        .get(`http://localhost:8081/user/reserved/${props.secondFlight.id}`)
        .then((result) => {
          console.log("second flight seats", result.data);
          setSecondSeats(result.data);
        })
        .catch((err) => console.log(err));
    }
    createPassengers(firstTickets); //firstTickets , whateveer they are
    setInputFlights(input);
  }, []);
  const onFetch = () => {
    setLoading(false);
  };
  return (
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
      {firstFlight && firstSeats && passengers && (
        <SeatMap
          flights={inputFlights}
          departureSeats={firstSeats}
          returnSeats={secondSeats}
          departureCabin={props.cabin} //check
          returnCabin={props.cabin} //check
          passengers={passengers}
          loading={loading}
          onFetch={onFetch}
          handleSeats={handleSeats}
          edit={props.edit}
        />
      )}
    </div>
  );
};

export default EditSeat;
