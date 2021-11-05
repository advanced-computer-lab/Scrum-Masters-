import * as React from 'react';
import Button from '@material-ui/core/Button';
import DeleteButton from '@material-ui/icons/Delete'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
const DeleteFlightButton = (flight) => {
    const flightData = flight.flight
    const [open, setOpen] = React.useState(false);
    
    const showAlert = () => {
        setOpen(true);
    };

    const alertClose = () => {
        setOpen(false);
        return false;
    };
    const DeleteFlight = () => {
        axios.delete(`http://localhost:5000/admin/delete/${flightData.id}`)
        .then((res) => {
            console.log(res)
        }).catch( err => {
            console.log(err)
        })
        setTimeout(() => {
            window.location.reload();
        }, 500)
    };
    return (
        <div>
            <div onClick={showAlert}>
            <DeleteButton />
            </div>
            <Dialog
                open={open}
                onClose={alertClose}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete this flight?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Flight Number: {flightData.flightNumber}, Departing From: {flightData.departureAirport}, Arriving To: {flightData.arrivalAirport}, Departing On: {flightData.departureDate}, Arriving On: {flightData.arrivalDate} 
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    
                <Button onClick={DeleteFlight}>Yes</Button>
                <Button onClick={alertClose} autoFocus>
                    No
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    ) ;
}

export default DeleteFlightButton;