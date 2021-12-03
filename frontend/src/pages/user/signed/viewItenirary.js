import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Typography } from "@mui/material";
import Loader from "react-loader-spinner";
import { Grid } from "@mui/material";
import { ListItem } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Itenirary = () => {




    return(

    <Grid container spacing={2} marginTop="32px">
      <Grid item xs={6} >
    <Item>Reservation Number</Item>
  </Grid>
  <Grid item xs={6} >
    <Item>Flight Number</Item>
  </Grid>
  <Grid item xs={6} >
    <Item>Departing Flight Departure Time</Item>
  </Grid>
  <Grid item xs={6} >
    <Item>Departing Flight Arrival Time</Item>
  </Grid>
  <Grid item xs={6} >
    <Item>Departing Flight Departure date</Item>
  </Grid>
  <Grid item xs={6} >
    <Item>Departing Flight Arrival Date</Item>
  </Grid>

  <Grid item xs={6} >
    <Item>Return Flight Departure Time</Item>
  </Grid>
  <Grid item xs={6} >
    <Item>Return Flight Arrival Time</Item>
  </Grid>
  <Grid item xs={6} >
    <Item>Return Flight Departure date</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>Return Flight Arrival Date</Item>
  </Grid>
  <Grid item xs={6} >
    <Item>Number of Tickets</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>Chosen Seats</Item>
  </Grid>
  <Grid item xs={6} >
    <Item>Total Price:</Item>
  </Grid>
 

</Grid>
)
}
export default Itenirary;