import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Typography } from "@mui/material";
import Loader from "react-loader-spinner";
import { Grid } from "@mui/material";
import { ListItem } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Divider } from "@mui/material";
import { borderLeft } from "@mui/material/node_modules/@mui/system";
import { Box } from "@mui/material";
import { Stack } from "react-bootstrap";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Itenirary = (input1, input2) => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
 //console.log(input1.flight);
 console.log("hehehe");
 console.log(input1.input1.details.departureAirport);
  const rows = [
    
    createData("Departure Airport", input1.input1.details.departureAirport),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <Box >
    <TableContainer
    
      component={Paper}
      divider="vertical"
    >
      <Table
        sx={{
          [`& .${tableCellClasses.root}`]: {},
        }}
      >
        <TableHead>
          <TableRow bgcolor="89CFF0">
            <TableCell>Reservation Number:</TableCell>
            <TableCell align="right">Departure Airport</TableCell>
            <TableCell align="right">Departure Date</TableCell>
            <TableCell align="right">Departure Time</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
         
        </TableBody>
      </Table>
    </TableContainer>
    <div  style={{width:"150px", height:"250px",backgroundColor:"#89CFF0" }}>
      
           <Stack direction="column">
             <div style={{marginTop:"20px"}}>
             Flight Number
             
         </div>
         <div style={{marginTop:"20px"}}>
             Cabin Class
             
         </div>
         <div style={{marginTop:"20px"}}>
             Status
             <div style={{fontSize:"small"}}>
               Confirmed
               </div>
              
         </div>
         <div style={{marginTop:"20px"}}>
             Passenger Type
             
         </div>
         
        
        </Stack> 
        <div style={{width:"500px", height:"30px",backgroundColor:"#89CFF0",transform: "translate(+200% , 0)  " }}> 
        <Stack direction="column">
        <div>
          {input1.input1.flight.flightId}
        </div>
        </Stack>
        </div>
        </div>
       
    </Box>

    /* <Grid container spacing={2} marginTop="16px">
      <Grid item xs={6} >
    <Item>Reservation Number</Item>
  </Grid>
  <Grid item xs={6} >
    <Item> Departure Flight Number</Item>
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
  <Grid item xs={6} >
    <Item>Class Cabin</Item>
  </Grid>

  <Grid item xs={6}>
    <Item>Chosen Seats</Item>
  </Grid>
  <Grid item xs={6} >
    <Item>Total Price:</Item>
  </Grid>
 

</Grid>
*/
  );
};
export default Itenirary;
