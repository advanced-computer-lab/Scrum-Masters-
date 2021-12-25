import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EditSeat from "./EditSeat";
import axios from "axios";

const EditingSeatsPage = () => {
  var { resId, firstFlightId, secondFlightId, cabin, edit, state } =
    useParams();
  const [data, setData] = React.useState();
  const [firstPrice, setFirstPrice] = React.useState(0);
  const [secondPrice, setSecondPrice] = React.useState(0);

  const [firstFlight, setFirstFlight] = React.useState();
  const [secondFlight, setSecondFlight] = React.useState();
  const [loading, setLoading] = React.useState(true);
  console.log("state", state);
  function getPrice(row, cabinClass) {
    if (cabinClass === "economy")
      return (
        row.economy.adultPrice * data.oldDepartingTickets.length
      );
    else if (cabinClass === "first")
      return (
        row.firstClass.adultPrice *  data.oldDepartingTickets.length
      );
    else
      return (
        row.business.adultPrice *  data.oldDepartingTickets.length
      );
  }
  useEffect(() => {
    console.log(resId);
    axios
      .get(`http://localhost:8081/user/edit/history/${resId}`)
      .then((res) => {
        setLoading(true);
        setData(res.data);
        setLoading(false);
        console.log("this is the input of the button", res.data);
      })
      .catch((err) => console.log("editSeatPage"));
    axios
      .get(`http://localhost:8081/user/flight/${firstFlightId}`)
      .then((res) => {
        setLoading(true);
        setFirstFlight(res.data);
        setFirstPrice(getPrice(res.data, cabin));
        console.log(getPrice(res.data, cabin))
        setLoading(false);
      })
      .catch((err) => console.log(err));
    if (secondFlightId !== "0") {
      axios
        .get(`http://localhost:8081/user/flight/${secondFlightId}`)
        .then((res) => {
          setLoading(true);
          setSecondFlight(res.data);
          setSecondPrice(getPrice(res.data, cabin));
          console.log(getPrice(res.data, cabin))
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const submitReservation = async() => {
    const query = {
      firstFlightId,
      secondFlightId,
      cabin,
      totalPrice: firstPrice + secondPrice,
      state
    };

    try {
      console.log("the query",query);
      await axios.patch(`http://localhost:8081/user/reservation/${resId}`, query);

    } catch (error) {
      console.log(error)
    }
  };
  return (
    //case changing seats of same flights
    <div>
      {!loading && edit === "1" && (
        <EditSeat
          numberOfPassengers={data.oldDepartingTickets.length}
          firstFlight={data.oldReservation.departingFlightId}
          secondFlight={data.oldReservation.returnFlightId}
          firstTickets={data.oldDepartingTickets}
          secondTickets={data.oldReturningTickets}
          cabin={cabin}
          edit={true}
          state={state}
          resId={resId}
          onTicketsDone={submitReservation}
        />
      )}
      {!loading && edit === "0" && secondFlightId === "0" && data && (
        //case changing one flight (either one)
        <EditSeat
          numberOfPassengers={data.oldDepartingTickets.length}
          firstFlight={firstFlight}
          firstTickets={data.oldDepartingTickets}
          cabin={cabin}
          edit={false}
          onTicketsDone={submitReservation}
          state={state}
          resId={resId}
          one={true}
        />
      )}
      {!loading && edit === "0" && secondFlightId !== "0" && data && (
        <EditSeat
          numberOfPassengers={data.oldDepartingTickets.length}
          firstFlight={firstFlight}
          firstTickets={data.oldDepartingTickets}
           secondTickets={data.oldReturningTickets}
          secondFlight={secondFlight}
          cabin={cabin} //new cabin
          edit={false}
          onTicketsDone={submitReservation}
          state={state}
          resId={resId}
        />
      )}
    </div>
  );
};
export default EditingSeatsPage;
