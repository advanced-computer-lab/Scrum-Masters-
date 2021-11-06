import * as React from 'react';
import Button from '@material-ui/material/Button';
import Dialog from '@material-ui/material/Dialog';
import DialogActions from '@material-ui/material/DialogActions';
import DialogContent from '@material-ui/material/DialogContent';
import DialogContentText from '@material-ui/material/DialogContentText';
import DialogTitle from '@material-ui/material/DialogTitle';

const AlertDialog = (open) => {

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  );
}
export default AlertDialog;