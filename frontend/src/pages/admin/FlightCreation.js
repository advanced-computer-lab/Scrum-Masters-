import React from "react";
import { Container } from "react-bootstrap";
import InsertFlight from "../../components/admin/forms/InsertFlight";
import Typography from "@mui/material/Typography";

const FlightCreation = () => {
  return (
    <Container>
      <Typography
        variant="h5"
        gutterBottom
        component="header"
        style={{ marginTop: "1%" }}
      >
        Add a Flight
      </Typography>
      <div style={{ marginTop: "2%" }}>
        <InsertFlight />
      </div>
    </Container>
  );
};

export default FlightCreation;
