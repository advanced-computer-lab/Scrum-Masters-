import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { IoIosAirplane, IoIosArrowRoundForward } from "react-icons/io";
//import { Link } from "react-router-dom";
import axios from "axios";

// import { useState, useEffect } from 'react';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditReservationButton = (resId) => {
  //console.log("This is the res", resId.toString());
  const [data, setData] = useState(null);
  const [input, setInput] = useState({noOfChildren: '', 
    noOfAdults: '',
    departureAirport:'', 
    arrivalAirport:'',  
    departureDate: '',
    arrivalDate: '', 
    cabin: ''
  });
  const [cabin, setCabin] = useState();
  const [open, setOpen] = useState(false);
  const [visibility, setVisiblity] = useState({
    departureDate: false,
    returnDate: false,
    cabin: false,
  });

  useEffect(() => {
    //\console.log("ana eesh henna");
    axios
      .get(`http://localhost:8081/user/edit/history/61b0a36e2173f72667abb54a`)
      .then((res) => {
        //console.log("This is the response", res.data);
        setData(res.data);
        setInput(res.data.input);
        setCabin(res.data.input.cabin);
      })
      .catch((err) => console.log("sadddd"));
  }, []);

  const getDate = (input) => {
    const date = new Date(input);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return (
      year +
      "-" +
      (month < 10 ? "0" + month : month) +
      "-" +
      (day < 10 ? "0" + day : day)
    );
  };
  const displayDate = (input) => {
    const date = new Date(input);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return (
      (day < 10 ? "0" + day : day) +
      "-" +
      (month < 10 ? "0" + month : month) +
      "-" +
      year
    );
  };

  const handleVisiblity = (count) => {
    if (count == 0)
      setVisiblity({ departureDate: true, returnDate: false, cabin: true });
    else if (count == 1)
      setVisiblity({ departureDate: false, returnDate: true, cabin: true });
    else setVisiblity({ departureDate: true, returnDate: true, cabin: true });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setVisiblity({ departureDate: false, returnDate: false, cabin: false });
  };

  const generateCabin = (cabin) => {
    return cabin.charAt(0).toUpperCase() + cabin.slice(1);
  };

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const onCabinChange = (e, cabin) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setCabin(cabin);
  };

  const onSubmit = () => {
    //console.log(query);
    axios
      .post("http://localhost:8081/user/edit/search/", input)
      .then((res) => {
        console.log("waiting for message", res.data);
        if (res.data.message) {
          //console.log('it is true');
          // setError(true);
          // setErrorMessage(res.data.message);
          // showAlert();
        } else {
          // setOutput(res.data);
          console.log("search flight", res.data);
          // setSearchDone(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {data && (
        <div>
          <Button onClick={handleOpen}>Edit Reservation</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h4" component="h2">
                Edit Flight
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h3">
                {data.input.departureAirport} <IoIosAirplane />{" "}
                {data.input.arrivalAirport}
                {" , "} {generateCabin(data.input.cabin)}
                {" , "}
                {displayDate(data.input.departureDate)}
                <IoIosArrowRoundForward /> {displayDate(data.input.arrivalDate)}
              </Typography>
              <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                expanded={["1", "2"]}
                sx={{
                  marginBottom: "5%",
                  flexGrow: 1,
                  maxWidth: "auto",
                  overflowY: "auto",
                }}
              >
                <TreeItem
                  nodeId="1"
                  label="Change Flight"
                  sx={{
                    marginTop: "5%",
                    marginBottom: "5%",
                  }}
                >
                  <Link
                    component="button"
                    variant="body2"
                    underline="hover"
                    onClick={() => handleVisiblity(0)}
                  >
                    Change Departure Flight
                  </Link>
                  <br />
                  <Link
                    component="button"
                    variant="body2"
                    underline="hover"
                    onClick={() => handleVisiblity(1)}
                    sx={{
                      marginBottom: "0.5%",
                    }}
                  >
                    Change Return Flight
                  </Link>
                  <br />
                  <Link
                    component="button"
                    variant="body2"
                    underline="hover"
                    onClick={() => handleVisiblity(2)}
                    sx={{
                      marginBottom: "5%",
                    }}
                  >
                    Change Arrival and Departure Flights
                  </Link>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                  >
                    {visibility.departureDate && (
                      <TextField
                        id="outlined-search"
                        label="Departure Date"
                        type="date"
                        required
                        sx={{
                          marginRight: "2%",
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        defaultValue={getDate(data.input.departureDate)}
                        name="departureDate"
                        onChange={onChange}
                      />
                    )}
                    {visibility.returnDate && (
                      <TextField
                        id="outlined-search"
                        label="Return Date"
                        type="date"
                        required
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="arrivalDate"
                        defaultValue={getDate(data.input.arrivalDate)}
                        onChange={onChange}
                      />
                    )}
                  </Grid>
                </TreeItem>

                {visibility.cabin && (
                  <TreeItem nodeId="2" label="Choose Cabin">
                    <FormControl component="fieldset">
                      <RadioGroup defaultValue={data.input.cabin} name="cabin">
                        <FormControlLabel
                          checked={cabin === "first"}
                          value="first"
                          control={<Radio />}
                          onChange={(e) => onCabinChange(e, "first")}
                          label="First Class"
                        />
                        <FormControlLabel
                          checked={cabin === "business"}
                          onChange={(e) => onCabinChange(e, "business")}
                          value="business"
                          control={<Radio />}
                          label="Business"
                        />
                        <FormControlLabel
                          checked={cabin === "economy"}
                          onChange={(e) => onCabinChange(e, "economy")}
                          value="economy"
                          control={<Radio />}
                          label="Economy"
                        />
                      </RadioGroup>
                    </FormControl>
                  </TreeItem>
                )}
              </TreeView>
              <Button href={`/edit/${input.departureAirport}/${input.arrivalAirport}/${input.noOfChildren}/${input.noOfAdults}/${input.arrivalDate}/${input.departureDate}/${input.cabin}`} variant="contained">
                Next
              </Button>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default EditReservationButton;
