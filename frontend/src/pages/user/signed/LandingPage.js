import { React, useEffect, useState } from 'react';
import axios from 'axios';

import SearchFlight from '../../../components/user/forms/SearchFlight';
import { Container } from 'react-bootstrap';
import FlightReservation from './FlightReservation';

const LandingPage = () => {
  const [data, setData] = useState();

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

  return (
    <Container>
      <SearchFlight />
      <br />
      <FlightReservation data={res} />
    </Container>
  );
};

export default LandingPage;
