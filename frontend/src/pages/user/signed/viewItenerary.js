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
import { Box,Stack } from "@mui/material";
import Ticket from "../../../components/user/existing/Ticket";
// import { Stack } from "react-bootstrap";


const Itenerary = (props) => {
 const [loading,setLoading]=useState(true);
 //console.log(input1.flight);
 console.log("hehehe");
 useEffect(() => {
   console.log("itenerary",props);
   setTimeout(() => {setLoading(false)}, 4000);
}, [loading]);

const dynamicTickets=()=>{
  var result=[]
  props.departureTickets.forEach((ticket,index)=>{
    result.push(<Ticket ticket={ticket} flight={props.departureFlight}/>)
    result.push(<div style={{marginTop:"5px"}}></div>)
    result.push(<Ticket ticket={props.returnTickets[index]} flight={props.returnFlight}/>)
})
return result;
}

  return (
    <div>
    {loading && (
      <Loader
        type="Plane"
        color="#4ea8de"
        height={100}
        width={100}
         timeout={5000}
      />)}
   {!loading && 
   (
     <div>
 
 <Typography
        variant="h6"
        gutterBottom
        component="header"
        align="left"
        fontStyle="italic"
        style={{ marginTop: "1%", marginLeft: "2%" }}
      >
       Reservation Number:  {props.departureTickets[0].reservationId}
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        component="header"
        align="right"
        fontStyle="italic"
        style={{ marginTop: "1%", marginLeft: "2%" }}
      >
       Total Price:  {props.totalPrice} EGP
      </Typography>

     
     
  
     {dynamicTickets()}
     </div>)}
   </div>
  );
};
export default Itenerary;
