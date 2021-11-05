import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Date from "../forms/textFields/Date";
import Time from "../forms/textFields/Time";
import axios from "axios";
import Search from "../buttons/Search";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export default function FormPropsTextFields() {
  const [values, setValues] = React.useState();
  const onChange = async (e) => {
    console.log("in onchange in search flight", e);
    if (e) {
      try {
        
        await setValues({ ...values, [e.target.name]: e.target.value });
        await console.log(values);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onSubmit = () => {
    console.log("printing");
    axios
      .post("http://localhost:8081/admin/search", values)
      .then((res) => {
        //setValues(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookList");
      });
  };
  return (
    <Stack direction="row" spacing={2} style={{ marginTop: "10px" }}>
      {/* component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "20ch" },
      }}
      noValidate
      autoComplete="off"
    > */}

      <TextField
        id="outlined-search"
        label="Flight Num"
        type="number"
        name="flightNumber"
        onChange={onChange}
        //defaultValue="Hello World"
      />
      <TextField
        id="outlined-search"
        label="From"
        type="search"
        name="departureAirport"
        /*InputLabelProps={{
            shrink: true,
          }}*/
        onChange={onChange}
      />
      <TextField
        id="outlined-search"
        label="To"
        type="search"
        name="arrivalAirport"
        onChange={onChange}
      />

      <Date label={"Departure"} name={"departureDate"} onChange={(e)=>onChange(e)} />
      <Date label={"Arrival"} name={"arrivalDate"} onChange={(e)=>onChange(e)} />

      <Time label={"Departure"} name={"departureTime"} onChange={onChange} />
      <Time label={"Arrival"} name={"arrivalTime"} onChange={onChange} />

      <Button
        variant="contained"
        color="success"
        onClick={onSubmit}
        style={{ height: "auto" }}
        size="small"
        type="submit"
      >
        Search
      </Button>
    </Stack>
  );
}
