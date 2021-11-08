import * as React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

export default function FormPropsTextFields({ onSubmit, onChange }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = () => (event, isExpanded) => {
    setExpanded(isExpanded);
  };
  return (
    <Accordion expanded={expanded} onChange={handleChange()}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="search-bar-header"
      >
        <SearchIcon size="large" style={{ color: "#48bfe3" }} />
        <Typography
          sx={{ color: "text.secondary", textAlign: "center", width: "20%" }}
        >
          Advanced Search
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          direction="column"
          spacing={2}
          style={{ marginTop: "10px" }}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-search"
              label="Flight Number"
              type="number"
              name="flightNumber"
              onChange={onChange}
              InputLabelProps={{
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "1px",
                },
              }}
            />
            <TextField
              id="outlined-search"
              label="From"
              type="search"
              name="departureAirport"
              InputLabelProps={{
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "1px",
                },
              }}
              onChange={onChange}
            />
            <TextField
              id="outlined-search"
              label="To"
              type="search"
              name="arrivalAirport"
              InputLabelProps={{
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "1px",
                },
              }}
              onChange={onChange}
            />
          </div>
          <div>
            <TextField
              id="outlined-search"
              label="Departure Date"
              type="date"
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "1px",
                },
              }}
              name="departureDate"
              onChange={onChange}
            />
            <TextField
              id="outlined-search"
              label="Arrival Date"
              type="date"
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "1px",
                },
              }}
              name="arrivalDate"
              onChange={onChange}
            />
            <TextField
              id="outlined-search"
              label="Departure Time"
              type="time"
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "1px",
                },
              }}
              name="departureTime"
              onChange={onChange}
            />
            <TextField
              id="outlined-search"
              label="Arrival Time"
              type="time"
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "1px",
                },
              }}
              name="arrivalTime"
              onChange={onChange}
            />
            <Tooltip title="Search" arrow placement="right">
              <IconButton
                aria-label="delete"
                onClick={() => {
                  setExpanded(!expanded);
                  onSubmit();
                }}
                size="large"
                style={{ color: "#56cfe1" }}
              >
                <ArrowRightAltIcon style={{ fontSize: 45 }} />
              </IconButton>
            </Tooltip>
          </div>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
