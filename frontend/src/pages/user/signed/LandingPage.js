import { React, useEffect, useState } from 'react';
import axios from 'axios';

import SearchFlight from '../../../components/user/forms/SearchFlight';
import UserFlightCard from '../../../components/user/UserFlightCard';
import { Container } from 'react-bootstrap';
import FlightReservation from './FlightReservation';

const LandingPage = () => {
  const [data, setData] = useState();
  const [values, setValues] = useState();
  const [submit, setSubmit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [update, setUpdate] = useState(false);

  const onChange = async (e) => {
    if (e) {
      try {
        console.log(
          'this is the target value ' +
            e.target.value +
            ' with length ' +
            e.target.value.length
        );
        if (e.target.value.length !== 0) {
          if (
            e.target.name === 'departureAirport' ||
            e.target.name === 'arrivalAirport'
          )
            await setValues({
              ...values,
              [e.target.name]: e.target.value.toUpperCase(),
            });
          else await setValues({ ...values, [e.target.name]: e.target.value });
        } else {
          let name = e.target.name;
          delete values[name];
        }
        await console.log(values);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onDelete = () => {
    setRemove(!remove);
  };
  const onUpdate = () => {
    setUpdate(!update);
  };
  const onSubmit = () => {
    setSubmit(!submit);
  };
  useEffect(() => {
    axios
      .post('http://localhost:8081/admin/search', values)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [submit, remove, update]);
  return (
    <Container>
      <SearchFlight />
      <FlightReservation flights={data} />
    </Container>
  );
};

export default LandingPage;
