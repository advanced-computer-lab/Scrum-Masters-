import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
  IconButton,
} from "@mui/material";
import DeleteButton from "@mui/icons-material/Delete";
import axios from "axios";
const DeleteFlight = ({ flight, onDelete }) => {
  const flightData = flight;
  const [open, setOpen] = React.useState(false);

  const showAlert = () => {
    setOpen(true);
  };

  const alertClose = () => {
    setOpen(false);
    return false;
  };
  const deleteFlight = async () => {
    axios
      .delete(`http://localhost:8081/admin/delete/${flightData.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    onDelete();
  };
  const getDate = (input) => {
    const date = new Date(input);
    return (
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    );
  };
  return (
    <React.Fragment>
      <Tooltip title="Delete" arrow placement="right">
        <IconButton
          aria-label="delete"
          style={{ color: "red" }}
          onClick={showAlert}
        >
          <DeleteButton />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={alertClose}>
        <DialogTitle id="alert-dialog-title" color="red">
          {"Are you sure you want to delete this flight?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Flight Number: <b>{flightData.flightNumber}</b>. <br />
            Departing From: <b>{flightData.departureAirport}</b>&nbsp;on:{" "}
            <b>{getDate(flightData.departureDate)}</b>&nbsp;at:{" "}
            <b>{flightData.departureTime}</b>. <br />
            Arriving To: <b>{flightData.arrivalAirport}</b>&nbsp;on:{" "}
            <b>{getDate(flightData.arrivalDate)}</b>&nbsp;at:{" "}
            <b>{flightData.arrivalTime}</b>. <br />
            Flight Duration: <b>{flightData.duration}</b>. <br />
            Economy Seats: <b>{flightData.economy.noOfSeats}</b>.
            <br />
            Business Class Seats: <b>{flightData.business.noOfSeats}</b>. <br />
            First Class Seats:<b> {flightData.firstClass.noOfSeats}</b>. <br />
            Total Seats: <b>{flightData.noOfSeats}</b>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => deleteFlight()}>Yes</Button>
          <Button onClick={alertClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default DeleteFlight;
