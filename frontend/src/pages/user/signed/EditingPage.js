import React, { Children } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import EditReservationButton from '../../../components/user/existing/buttons/EditReservationButton';
import FlightsTable from '../../../components/editing/FlightsTable';
import { Container } from 'react-bootstrap';

const EditingPage = () => {
  const [flightId, setFlightId] = React.useState();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState({
    noOfChildren: '',
    noOfAdults: '',
    departureAirport: '',
    arrivalAirport: '',
    departureDate: '',
    arrivalDate: '',
    cabin: '',
  });
  //const [cabin, setCabin] = useState();
  const [open, setOpen] = useState(false);
  const [visibility, setVisiblity] = useState({
    flightsTable: true,
    seatMap: false,
  });
  //    const [state, setState] = useState();

  var {
    departureAirport,
    arrivalAirport,
    noOfChildren,
    noOfAdults,
    arrivalDate,
    departureDate,
    cabin,
    state,
    resId,
  } = useParams();
  const query = {
    departureAirport,
    arrivalAirport,
    noOfChildren: parseInt(noOfChildren),
    noOfAdults: parseInt(noOfAdults),
    arrivalDate,
    departureDate,
    cabin,
  };
  const handleFlightId = (id) => {
    setFlightId(id);
  };
  const handleVisibility = (newVisibility) => {
    setVisiblity(newVisibility);
  };
  useEffect(() => {
    function fetchData() {
      axios
        .get(`http://localhost:8081/user/edit/history/${resId}`)
        .then((res) => {
          setData(res.data);
          setInput(res.data.input);
          //setCabin(res.data.input.cabin);
          setLoading(false);
          console.log('this is the input of the button', res.data);
        })
        .catch((err) => console.log('editPage'));
    }
    if (visibility.seatMap) fetchData();
  }, [visibility.seatMap]);
  return (
    <Container>
      {visibility.flightsTable && (
        <FlightsTable
          query={query}
          resId='61b0a36e2173f72667abb54a'
          state={state}
          handleFlightId={handleFlightId}
          handleVisibility={handleVisibility}
          cabin={cabin}
        />
      )}
      {visibility.seatMap && !loading && <>{resId}</>}
    </Container>
  );
};

export default EditingPage;
