import React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FlightLandRounded from "@mui/icons-material/FlightLandRounded";
import axios from "axios";
import { Tooltip } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContentText } from "@mui/material";

const SearchFlight = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8081/user/search/flights")
      .then((res) => {
        setFrom(res.data.from);
        setTo(res.data.to);
        // console.log("from",from);
        // console.log("to",to);
      })
      .catch((err) => console.log(err));
  }, []);

  const cabins = ["economy", "business", "first class"];

  const [query, setQuery] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [error, setError] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [errorMessage,setErrorMessage] = useState("");

  const history = useHistory();


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

  const showAlert = () => {
    setOpen(true);
  };

  const alertClose = () => {
    setOpen(false);
    return false;
  };

  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const onChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
    console.log(typeof e.target.value);
  };

  const onSubmit = () => {
    if(!query.noOfChildren){
      query.noOfChildren = 0;
    }
    if(!query.noOfAdults){
      query.noOfAdults = 0;
    }
    
    if((query.noOfAdults + query.noOfChildren)===0){
      console.log("the total is 0")
      setError(true);
      setErrorMessage("Please choose at least 1 passenger")
      showAlert();
    }
    else{
      //console.log(query);
      history.push({
        pathname: '/flights',
        state:query
      });
    }
    
  };

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
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const menuItemStyling = {
  //   marginLeft: "5px",
  // };
  return (
    <Grid
      container
      rowSpacing={5}
      columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      style={{ marginTop: "20px" }}
    >
      <Grid item xs={6} md={2}>
        <div>
          <Autocomplete
            {...fromProps}
            id="blur-on-select"
            name="departureAirport"
            required
            onChange={(e, newValue) =>
              setQuery({ ...query, ["departureAirport"]: newValue })
            }
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
      <Grid item xs={6} md={2}>
        <div>
          <Autocomplete
            {...toProps}
            id="blur-on-select"
            name="arrivalAirport"
            onChange={(e, newValue) =>
              setQuery({ ...query, ["arrivalAirport"]: newValue })
            }
            required
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
      <Grid item xs={6} md={2}>
        <ButtonGroup disableElevation>
          <IconButton
            onClick={() => {
              decrementAdultCount();
              setQuery({ ...query, ["noOfAdults"]: adultCount + 1 });
            }}
          >
            <RemoveCircleRoundedIcon />
          </IconButton>
          <TextField
            name="noOfAdults"
            label="Adults"
            type="number"
            value={adultCount}
            onChange={onChange}
            style={{ marginTop: "5%", float: "center" }}
            disabled={true}
          >
            {/* {adultCount}{" "} */}
          </TextField>
          <IconButton
            onClick={() => {
              incrementAdultCount();
              setQuery({ ...query, ["noOfAdults"]: adultCount + 1 });
            }}
          >
            <AddCircleIcon />
          </IconButton>
        </ButtonGroup>
      </Grid>
      <Grid item xs={6} md={2}>
        <ButtonGroup disableElevation>
          <IconButton
            onClick={() => {
              decrementChildrenCount();
              setQuery({ ...query, ["noOfChildren"]: childrenCount + 1 });
            }}
          >
            <RemoveCircleRoundedIcon />
          </IconButton>
          <TextField
            name="noOfChildren"
            type="number"
            label="Children"
            value={childrenCount}
            disabled={true}
            style={{ marginTop: "5%", float: "center" }}
          >
            {/* {adultCount}{" "} */}
          </TextField>
          <IconButton
            onClick={() => {
              incrementChildrenCount();
              setQuery({ ...query, ["noOfChildren"]: childrenCount + 1 });
            }}
          >
            <AddCircleIcon />
          </IconButton>
        </ButtonGroup>
      </Grid>

      <Grid item xs={6} md={2}>
        <TextField
          id="outlined-search"
          label="Departure Date"
          type="date"
          InputLabelProps={{
            shrink: true,
            style: {
              // backgroundColor: "white",
              // width: "auto",
              // padding: "1px",
            },
          }}
          name="departureDate"
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={6} md={2}>
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
      </Grid>
      <Grid item xs={6} md={2}>
        <div>
          <Autocomplete
            {...cabinProps}
            id="blur-on-select"
            // name="cabin"
            blurOnSelect
            clearOnEscape
            size="30px"
            onChange={(e, newValue) =>
              setQuery({ ...query, ["cabin"]: newValue })
            }
            renderInput={(params) => (
              <TextField {...params} placeholder="Cabin" />
            )}
          />
        </div>
      </Grid>

      <Grid item xs={6} md={2}>
        <Tooltip title="Search" arrow placement="right">
          <IconButton aria-label="delete" onClick={onSubmit} size="large">
            <SearchIcon size="large" style={{ color: "#48bfe3" }} />
          </IconButton>
        </Tooltip>
      </Grid>
      {error && (
            <Dialog open={open} onClose={alertClose}>
              <DialogTitle
                id="alert-dialog-title"
                color="purple"
                style={{ textAlign: "center" }}
              >
                {"Cannot Search for flight"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {errorMessage}
                </DialogContentText>
              </DialogContent>
              <DialogActions style={{ justifyContent: "center" }}>
                <Button
                  onClick={() => {
                    alertClose();
                    setError(false);
                    window.location.reload(false);
                  }}
                  autoFocus
                >
                  close
                </Button>
              </DialogActions>
            </Dialog>
          )}
    </Grid>
    
  );
};

export default SearchFlight;
