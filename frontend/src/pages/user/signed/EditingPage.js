import React, { Children } from 'react';
import { useParams } from 'react-router-dom';
import EditReservationButton from '../../../components/user/existing/buttons/EditReservationButton';
import FlightsTable from '../../../components/editing/FlightsTable';
import { Container } from 'react-bootstrap';

const EditingPage = () => {
  var {
    departureAirport,
    arrivalAirport,
    noOfChildren,
    noOfAdults,
    arrivalDate,
    departureDate,
    cabin,
  } = useParams();
  console.log('children', typeof children);
  const query = {
    departureAirport,
    arrivalAirport,
    noOfChildren: parseInt(noOfChildren),
    noOfAdults: parseInt(noOfAdults),
    arrivalDate,
    departureDate,
    cabin,
  };
  console.log('the query', query);
  return (
    <Container>
      <FlightsTable query={query} resId='61b0a36e2173f72667abb54a' />
    </Container>
  );
};

export default EditingPage;
