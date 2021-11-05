import React from "react";
import { Container } from "react-bootstrap";
import SearchFlight from "../../components/admin/forms/SearchFlight";
import ViewFlights from "../../components/admin/ViewFlights";

const Schedule = () => {
  return (
    <Container>
      <div style={{ marginTop: "2%" }}>
        <SearchFlight />
      </div>
      <div style={{ marginTop: "2%" }}>
        <ViewFlights />
      </div>
    </Container>
  );
};

export default Schedule;
