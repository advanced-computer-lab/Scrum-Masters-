import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

const Ticket = (props) => {
  return (
    <Box>
      <Accordion
        expanded={expanded}
        onChange={handleChange("panel1")}
        spacing={4}
        sx={{
          margin: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {/* <Typography
          sx={{
            width: "6%",
            flexShrink: 0,
            fontWeight: "bold",
            display: "inline",
          }}
        >
          {props.type.charAt(0).toUpperCase() + props.type.substring(1)},
        </Typography>
        <Typography
          sx={{
            width: "5%",
            flexShrink: 0,
            display: "inline",
          }}
        >
          {props.cabin.charAt(0).toUpperCase() + props.cabin.substring(1)}
        </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
            <Stack direction="row" spacing={5}>
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
                     Ticket Price
                    </div>
                    <div>
                        {props.ticket.price}
                    </div>
                    <div>
                        {props.ticket.seatNum}
                    </div>
                    </Stack>
                <Stack direction="column" spacing={3}>
                    <div>
                        
                        Departure Airport
                    </div>
                    <div>
                      {props.ticket.departureAirport}
                    </div>
                    <div>
                        Arrival Airport
                    </div>
                    <div>
                        {props.ticket.arrivalAirport}
                    </div>
                    <div>

                    </div>
                    </Stack>
                <Stack direction="column" spacing={3}>

                    </Stack>

            </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Ticket;
