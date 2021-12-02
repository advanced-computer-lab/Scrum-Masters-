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
  const res = {
    flights: [
      {
        economy: {
          baggageAllowance: 2,
          noOfSeats: 78,
          childPrice: 0,
          adultPrice: 10,
          availableSeats: 78,
        },
        business: {
          baggageAllowance: 2,
          noOfSeats: 5,
          childPrice: 0,
          adultPrice: 0,
          availableSeats: 5,
        },
        firstClass: {
          baggageAllowance: 3,
          noOfSeats: 5,
          childPrice: 0,
          adultPrice: 0,
          availableSeats: 5,
        },
        _id: '61a3e0ec766320f267156a54',
        flightNumber: 128,
        departureTime: '16:04',
        arrivalTime: '10:04',
        departureDate: '2021-11-01T00:00:00.000Z',
        arrivalDate: '2021-11-02T00:00:00.000Z',
        departureAirport: 'JPN',
        arrivalAirport: 'JFK',
        __v: 0,
        noOfSeats: 88,
        availableSeats: 88,
        duration: '18h 0m',
        id: '61a3e0ec766320f267156a54',
      },
    ],
    details: {
      noOfAdults: 3,
      noOfChildren: 0,
      departureAirport: 'JPN',
      arrivalAirport: 'JFK',
      departureDate: '2021-11-01T00:00:00.000Z',
      arrivalDate: '2021-11-02T00:00:00.000Z',
      cabin: 'economy',
    },
  };
  //setData(res);
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
      <br />
      <FlightReservation data={res} />
    </Container>
  );
};

export default LandingPage;
