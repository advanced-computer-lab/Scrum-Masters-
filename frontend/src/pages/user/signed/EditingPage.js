import React from 'react';
import EditReservationButton from '../../../components/user/existing/buttons/EditReservationButton';
import FlightsTable from '../../../components/editing/FlightsTable';
import { Container } from 'react-bootstrap';

const EditingPage = () => {
  
  return (
    <Container>
      <EditReservationButton resId="61b0a36e2173f72667abb54a"/>
      <FlightsTable />
    </Container>
  );
};

export default EditingPage;
