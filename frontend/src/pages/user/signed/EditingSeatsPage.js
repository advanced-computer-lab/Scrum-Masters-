import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EditSeat from './EditSeat';
import axios from 'axios';

const EditingSeatsPage = () => {
  var { resId, firstFlightId, secondFlightId, cabin, edit } = useParams();
  const [data, setData] = React.useState();
  const [firstFlight, setFirstFlight] = React.useState();
  const [secondFlight, setSecondFlight] = React.useState();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    console.log(resId);
    axios
      .get(`http://localhost:8081/user/edit/history/${resId}`)
      .then((res) => {
        setLoading(true);
        setData(res.data);
        setLoading(false);
        console.log('this is the input of the button', res.data);
      })
      .catch((err) => console.log('editSeatPage'));
    axios
      .get(`http://localhost:8081/user/flight/${firstFlightId}`)
      .then((res) => {
        setLoading(true);
        setFirstFlight(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    if (secondFlightId !== '0') {
      axios
        .get(`http://localhost:8081/user/flight/${secondFlightId}`)
        .then((res) => {
          setLoading(true);
          setSecondFlight(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    //case changing seats of same flights
    <div>
      {!loading && edit === '1' && (
        <EditSeat
          numberOfPassengers={data.oldDepartingTickets.length}
          firstFlight={data.oldReservation.departingFlightId}
          secondFlight={data.oldReservation.returnFlightId}
          firstTickets={data.oldDepartingTickets}
          secondTickets={data.oldReturningTickets}
          cabin={cabin}
          edit={true}
        />
      )}
      {!loading && edit === '0' && secondFlightId === '0' && data && (
        //case changing one flight (either one)
        <EditSeat
          numberOfPassengers={data.oldDepartingTickets.length}
          firstFlight={firstFlight}
          firstTickets={data.oldDepartingTickets}
          cabin={cabin}
          edit={false}
        />
      )}
      {!loading && edit === '0' && secondFlightId !== '0' && data && (
        <EditSeat
          numberOfPassengers={data.oldDepartingTickets.length}
          firstFlight={firstFlight}
          firstTickets={data.oldDepartingTickets}
          secondFlight={secondFlight}
          cabin={cabin} //new cabin
          edit={false}
        />
      )}
    </div>
  );
};
export default EditingSeatsPage;
