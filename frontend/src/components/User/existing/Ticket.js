import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";

const Ticket = (props) => {
    const [expanded, setExpanded] = useState(true); //props.index===0
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(!expanded);
      };
      useEffect(() => {
        console.log("ticket",props);
     }, []);
     const getDate = (input) => {
        const date = new Date(input);
        return (
          date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
        );
      };
      
  return (
    <Box>
      <Accordion
        expanded={expanded}
        onChange={handleChange("panel1")}
        justifyContent="center"
        spacing={1}
        sx={{
          margin: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
          sx={{
            // width: "6%",
            flexShrink: 0,
            fontWeight: "bold",
            display: "contents",
            textAlign:"left"
          }}
        >
          {props.ticket.firstName} {props.ticket.lastName},&nbsp;
        </Typography>
        <Typography
          sx={{
            // width: "5%",
            flexShrink: 0,
            display: "contents",
          
          }}
        >
          {props.ticket.passengerType.charAt(0).toUpperCase() + props.ticket.passengerType.substring(1)}
        </Typography>
        <Typography
          sx={{
            // width: "5%",
            flexShrink: 0,
            
            marginLeft:"auto"
          }}
        >
          {props.ticket.ticketType.charAt(0).toUpperCase() + props.ticket.ticketType.substring(1)}
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Stack direction="row" spacing={12} justifyContent="center">
                <Stack direction="column" spacing={3}>
                    <div>
                        Flight Number
                    </div>
                    <div>
                        {props.flight.flightNumber}
                    </div>
                    <div >
                        Cabin Class
                    </div>
                    <div>
                     {props.ticket.cabin}
                    </div>
                    <div>
                     Price
                    </div>
                    <div>
                        {props.ticket.price}
                    </div>
                    </Stack>
                <Stack direction="column" spacing={3}>
                    <div>
                        
                        Departure Airport
                    </div>
                    <div>
                      {props.flight.departureAirport}
                    </div>
                    <div>
                        Arrival Airport
                    </div>
                    <div>
                        {props.flight.arrivalAirport}
                    </div>
                    <div>
                        Seat Number
                        </div>
                    <div>
                        {props.ticket.seatNum}
                    </div>
                    </Stack>
                <Stack direction="column" spacing={3}>
                    <div>
                        Departure Date
                    </div>
                    <div>
                        {getDate(props.flight.departureDate)}, {props.flight.departureTime}

                    </div>
                    <div>
                       Arrival Date
                    </div>
                    <div>
                        {getDate(props.flight.arrivalDate)}, {props.flight.arrivalTime}

                    </div>
                    <div>
                       Status
                    </div>
                    <div>
                        Confirmed

                    </div>

                    </Stack>

            </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Ticket;
