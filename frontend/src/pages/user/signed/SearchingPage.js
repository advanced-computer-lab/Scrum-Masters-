import React from 'react';
import { Container } from 'react-bootstrap';
import SearchFlight from '../../../components/user/forms/SearchFlight';
import Carousel from "../../../components/layout/navigation/Carousel"

const SearchingPage = () => {
  return (
    <Container>
      <Carousel/>
      <SearchFlight />
    </Container>
  );
};

export default SearchingPage;
