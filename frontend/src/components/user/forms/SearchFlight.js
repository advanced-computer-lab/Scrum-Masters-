import React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
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
import { DialogTitle, Alert } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContentText } from "@mui/material";
import BookingPage from "../../../pages/user/signed/BookingPage";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const SearchFlight = (props) => {
  const [error, setError] = useState(
    JSON.parse(window.sessionStorage.getItem("loginError")) || false
  );
  const [errorMessage, setErrorMessage] = useState(
    window.sessionStorage.getItem("errorMessage") || ""
  );
  useEffect(() => {
    window.sessionStorage.setItem("admin", false);
    window.sessionStorage.setItem("hideTopbar", false);
    var e = new Event("storage");
    e.originalEvent = {
      key: "hideTopbar",
      oldValue: true,
      newValue: false,
    };
    console.log(e);
    window.dispatchEvent(e);
    e = new Event("storage");
    e.originalEvent = {
      key: "admin",
      oldValue: true,
      newValue: false,
    };
    console.log(e);
    window.dispatchEvent(e);
    axios
      .get("http://localhost:8081/user/search/flights")
      .then((res) => {
        setFrom(res.data.from);
        setTo(res.data.to);
        window.sessionStorage.removeItem("errorMessage");
        window.sessionStorage.removeItem("loginError");
        // console.log("from",from);
        // console.log("to",to);
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      setError(false);
    }, 5000);
  }, [error]);
  //
  const cabins = ["Economy", "Business", "First Class"];

  const [query, setQuery] = useState({});
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [output, setOutput] = useState();
  const [searchDone, setSearchDone] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [returnDate, setReturnDate] = React.useState(null);
  const [departureDate, setDepartureDate] = React.useState(null);

  const history = useHistory();
  const getDate = (input) => {
    const date = new Date(input);
    return (
      date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear()
    );
  };
  const cabinProps = {
    options: cabins,
    // getOptionLabel: (option) => option,
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

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const onChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
    console.log('this is the query', query);
  };

  const onSubmit = () => {
    //console.log(query);
    axios
      .post("http://localhost:8081/user/search/", query)
      .then((res) => {
        console.log("waiting for message", res.data);
        if (res.data.message) {
          console.log("it is true");
          setError(true);
          setErrorMessage(res.data.message);
          showAlert();
        } else {
          setOutput(res.data);
          console.log('search flight', res.data);
          setSearchDone(true);
        }

        // history.push({
        //   pathname: '/user',
        //   state: res.data,
        // });

        //console.log(output);
        // console.log("from",from);
        // console.log("to",to);
      })
      .catch((err) => console.log(err));
  };

  function decrementAdultCount() {
    //console.log(adultCount);
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
    <div>
      {searchDone && <BookingPage props={output} />}
      {error && <Alert severity="error">{errorMessage}</Alert>}
      {!searchDone && (
        <Grid
          container
          rowSpacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          style={{ marginTop: "20px" }}
        >
          <Grid item xs={1} md={2}>
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
                    required
                    placeholder="From"
                    label="From"
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
                    label="To"
                    {...params}
                    placeholder="To"
                    required
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
          <Grid item xs={2} md={2}>
            <ButtonGroup disableElevation>
              <IconButton
                onClick={() => {
                  decrementAdultCount();
                  setQuery({ ...query, ["noOfAdults"]: adultCount - 1 });
                }}
              >
                <RemoveCircleRoundedIcon />
              </IconButton>
              <TextField
                required
                name="noOfAdults"
                label="Adults"
                type="number"
                value={adultCount}
                onChange={onChange}
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
          <Grid item xs={1} md={2}>
            <ButtonGroup disableElevation>
              <IconButton
                onClick={() => {
                  decrementChildrenCount();
                  setQuery({ ...query, ["noOfChildren"]: childrenCount - 1 });
                }}
              >
                <RemoveCircleRoundedIcon />
              </IconButton>
              <TextField
                required
                name="noOfChildren"
                type="number"
                label="Children"
                value={childrenCount}
                disabled={true}
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

          <Grid item xs={1} md={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              {/* <DatePicker */}
              <TextField
                id="outlined-search"
                label="Departure Date"
                type="date"
                required
                InputLabelProps={{
                  shrink: true,
                  style: {
                    // backgroundColor: "white",
                    // width: "auto",
                    // padding: "1px",
                  },
                }}
                name="departureDate"
                onChange={(e) => {
                  setDepartureDate(e.target.value);
                  setQuery({
                    ...query,
                    ["departureDate"]: e.target.value,
                  });
                  console.log("this is the value", e.target.value);
                }}
                value={departureDate}
                // format='MM-DD-YYYY'
                maxDate={new Date()}
                // renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={1} md={2}>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker */}
            <TextField
              id="outlined-search"
              label="Return date"
              size="large"
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
              onChange={(e) => {
                setReturnDate(e.target.value);
                setQuery({
                  ...query,
                  ["arrivalDate"]: e.target.value,
                });
                console.log(
                  "this is the Date",
                  query,
                  "This is the date value format",
                  typeof getDate(e.target.value)
                );
              }}
              // onChangeDate={(newValue) => {
              //   setDate(newValue);
              //   console.log("MY NEW DATE VALUE"+newValue)
              // }}

              value={returnDate}
              format="MM-DD-YYYY"
              required
              variant="outlined"
              // maxDate={new Date()}
              // renderInput={(params) => <TextField {...params} />}
            />
            {/* </LocalizationProvider> */}
          </Grid>
          <Grid item xs={1} md={2}>
            {/* {console.log(cabinProps)} */}
            <div>
              <Autocomplete
                {...cabinProps}
                id="blur-on-select"
                label="Cabin"
                required
                blurOnSelect
                clearOnEscape
                size="30px"
                InputLabelProps={{
                  shrink: true,
                  style: {
                    backgroundColor: "white",
                    width: "auto",
                    padding: "1px",
                  },
                }}
                onChange={(e, newValue) =>
                  setQuery({
                    ...query,
                    ["cabin"]:
                      newValue === "First Class"
                        ? "first"
                        : newValue.toLowerCase(),
                  })
                }
                renderInput={(params) => (
                  <TextField {...params} placeholder="Cabin" label="Cabin" />
                )}
              />
            </div>
          </Grid>

          <Grid item xs={6} md={2}>
            <Tooltip title="Search" arrow placement="right">
              <IconButton
                aria-label="delete"
                onClick={onSubmit}
                size="large"
                type="SUBMIT"
                style={{ float: "left" }}
              >
                <SearchIcon size="large" style={{ color: "#48bfe3" }} />
              </IconButton>
            </Tooltip>
          </Grid>
          {/* {error && (
            <Dialog open={open} onClose={alertClose}>
              <DialogTitle
                id="alert-dialog-title"
                color="purple"
                style={{ textAlign: "center" }}
              >
                {"Cannot search for flight."}
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
          )} */}
        </Grid>
      )}
    </div>
  );
};

export default SearchFlight;
