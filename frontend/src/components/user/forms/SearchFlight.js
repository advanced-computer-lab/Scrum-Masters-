import React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import FromToInput from "../../../utilities/FromToInput";
import PassengersButton from "../../../utilities/PassengersButton";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import InputAdornment from "@mui/material/InputAdornment";
import FlightLandRounded from "@mui/icons-material/FlightLandRounded";
import axios from "axios";

const SearchFlight = () => {
  
  var from = []
  var to = []
  useEffect(() => {
    axios
      .get("http://localhost:8081/user/search/flights")
      .then((res) => {
         from = res.data.from;
         to = res.data.to;
        console.log("from",from);
        console.log("to",to);
      })
      .catch((err) => console.log(err));
  }, []);

  const cabins = ["economy", "business", "first class"];

  const cabinProps = {
    options: cabins,
    getOptionLabel: (option) => option,
  };

  const fromProps = {
    options: from,
    getOptionLabel: (option) => option,
  };

  const toProps = {
    options: to,
    getOptionLabel: (option) => option,
  };

  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  function decrementAdultCount() {
    setAdultCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1));
  }
  function incrementAdultCount() {
    setAdultCount((prevCount) => prevCount + 1);
  }
  function decrementChildrenCount() {
    setChildrenCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1));
  }
  function incrementChildrenCount() {
    setChildrenCount((prevCount) => prevCount + 1);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItemStyling = {
    marginLeft: "5px",
  };
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      style={{ marginTop: "10px" }}
    >
      <Grid item xs={6} md={2.5}>
        <div>
          <Autocomplete
            {...fromProps}
            id="blur-on-select"
            blurOnSelect
            clearOnEscape
            size="30px"
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="from"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <FlightTakeoffRoundedIcon />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />
            )}
          />
        </div>
      </Grid>
      <Grid item xs={6} md={2.5}>
        <div>
          <Autocomplete
            {...toProps}
            id="blur-on-select"
            blurOnSelect
            clearOnEscape
            size="30px"
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="to"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <FlightLandRounded></FlightLandRounded>
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />
            )}
          />
        </div>
      </Grid>
      <Grid item xs={6} md={2.5}>
        <PassengersButton onClick={handleClick} />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem disableGutters style={menuItemStyling}>
            <ListItemText>
              Adult (16+) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </ListItemText>
            <ButtonGroup disableElevation style={{ float: "right" }}>
              <IconButton onClick={decrementAdultCount}>
                <RemoveCircleRoundedIcon />
              </IconButton>
              <div style={{ marginTop: "5%", textAlign: "center" }}>
                {adultCount}{" "}
              </div>
              <IconButton onClick={incrementAdultCount}>
                <AddCircleIcon />
              </IconButton>
            </ButtonGroup>
          </MenuItem>
          <MenuItem disableGutters>
            <ListItemText>Child (2-16)</ListItemText>
            <ButtonGroup disableElevation style={{ float: "right" }}>
              <IconButton onClick={decrementChildrenCount}>
                <RemoveCircleRoundedIcon />
              </IconButton>
              <div style={{ marginTop: "5%", textAlign: "center" }}>
                {childrenCount}{" "}
              </div>
              <IconButton onClick={incrementChildrenCount}>
                <AddCircleIcon />
              </IconButton>
            </ButtonGroup>
          </MenuItem>
        </Menu>
      </Grid>
      <Grid item xs={6} md={2.5}>
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
          // onChange={onChange}
        />
      </Grid>
      <Grid iteam xs={6} md={2.5}>
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
          // onChange={onChange}
        />
      </Grid>
      <Grid item xs={6} md={2.5}>
        <div>
          <Autocomplete
            {...cabinProps}
            id="blur-on-select"
            blurOnSelect
            clearOnEscape
            size="30px"
            renderInput={(params) => (
              <TextField {...params} placeholder="Cabin" />
            )}
          />
        </div>
      </Grid>

      <Grid item xs={6} md={2.5}></Grid>
    </Grid>
  );
};

export default SearchFlight;
