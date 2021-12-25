import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
  TextField,
  Stack,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import axios from "axios";
const UpdateFlight = ({ flight, onUpdate }) => {
  const flightData = flight;
  const [values, setValues] = React.useState();
  const [open, setOpen] = React.useState(false);

  const showAlert = () => {
    setOpen(true);
  };

  const alertClose = () => {
    setOpen(false);
    return false;
  };

  const onChange = async (e, name) => {
    if (e) {
      try {
        console.log(e);
        if (e.target) {
          if (
            e.target.name === "departureAirport" ||
            e.target.name === "arrivalAirport"
          )
            await setValues({
              ...values,
              [e.target.name]: e.target.value.toUpperCase(),
            });
          else await setValues({ ...values, [e.target.name]: e.target.value });
        } else {
          await setValues({ ...values, [name]: e });
        }
        await console.log("update", values);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onSubmit = () => {
    console.log("printing");
    axios
      .patch(`http://localhost:8081/admin/update/${flightData.id}`, values)
      .then((res) => {
        setValues(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    onUpdate();
  };
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

  return (
    <React.Fragment>
      <Tooltip title="Edit" arrow placement="right">
        <IconButton
          aria-label="edit"
          style={{ color: "#4ea8de", marginRight: "10px" }}
          onClick={showAlert}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={alertClose}
        maxWidth="xl"
        component="form"
        onSubmit={() => onSubmit()}
        autoComplete="off"
      >
        <DialogTitle id="alert-dialog-title">{"Update Flight"}</DialogTitle>
        <DialogContent>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            style={{ marginTop: "1%" }}
          >
            <TextField
              disabled
              id="outlined-search"
              label="Flight Number"
              type="number"
              name="flightNumber"
              defaultValue={flightData.flightNumber}
              style={{ width: "auto" }}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "2px",
                },
              }}
            />
            <TextField
              required
              id="outlined-search"
              label="From"
              type="search"
              name="departureAirport"
              defaultValue={flightData.departureAirport}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "2px",
                },
              }}
            />
            <TextField
              required
              id="outlined-search"
              label="To"
              type="search"
              name="arrivalAirport"
              defaultValue={flightData.arrivalAirport}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "2px",
                },
              }}
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            style={{ marginTop: "3%" }}
          >
            <TextField
              required
              id="outlined-search"
              label="Departure Date"
              type="Date"
              name="departureDate"
              defaultValue={getDate(flightData.departureDate)}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "2px",
                },
              }}
            />
            <TextField
              required
              id="outlined-search"
              label="Arrival Date"
              type="Date"
              name="arrivalDate"
              defaultValue={getDate(flightData.arrivalDate)}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "2px",
                },
              }}
            />
            <TextField
              required
              id="outlined-search"
              label="Departure Time"
              type="Time"
              name="departureTime"
              defaultValue={flightData.departureTime}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "2px",
                },
              }}
            />
            <TextField
              required
              id="outlined-search"
              label="Arrival Time"
              type="Time"
              name="arrivalTime"
              defaultValue={flightData.arrivalTime}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "2px",
                },
              }}
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            style={{ marginTop: "3%" }}
          >
            <TextField
              required
              label="Economy Class Seats"
              type="number"
              placeholder="Economy Class Seats"
              name="economy.noOfSeats"
              defaultValue={flightData.economy.noOfSeats}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "2px",
                },
              }}
            />
            <TextField
              required
              type="number"
              label="Business Class Seats"
              placeholder="Business Class Seats"
              name="business.noOfSeats"
              defaultValue={flightData.business.noOfSeats}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "2px",
                },
              }}
            />
            <TextField
              required
              type="number"
              label="First Class Seats"
              placeholder="First Class Seats"
              name="firstClass.noOfSeats"
              defaultValue={flightData.firstClass.noOfSeats}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  width: "auto",
                  padding: "2px",
                },
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Update</Button>
          <Button onClick={alertClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default UpdateFlight;
