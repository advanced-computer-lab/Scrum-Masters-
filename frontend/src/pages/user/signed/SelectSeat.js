import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { autocompleteClasses, Typography } from "@mui/material";
import SeatMap from "../../../components/user/SeatMap";

const SelectSeat = () => {

  return (
    <Container>
      <Typography
        variant="h6"
        gutterBottom
        component="header"
        align="left"
        // fontWeight="lighter"
        color="dimgrey"
        fontStyle="italic"
        style={{ marginTop: "1%" }}
      >
        Select your preferred seat(s).
      </Typography>
      <div
        style={{
          boxShadow: "0 3px 10px rgb(105 48 195 / 60%)",
        }}
      >
        <SeatMap/>
      </div>
    </Container>
  );
};

export default SelectSeat;
