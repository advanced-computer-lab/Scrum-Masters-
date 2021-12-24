import { React, useEffect, useState } from 'react';
import { GridCellParams } from '@mui/x-data-grid';
import emailjs from 'emailjs-com';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { sizing } from '@mui/system';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import image1 from '../../../images/reservations.jpg';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';
import {
  Button,
  Box,
  Modal,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TablePagination,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Stack,
  Tooltip,
  Typography,
  tableCellClasses,
  styled,
  Divider,
  Paper,
} from '@mui/material';
import FlightLandRounded from '@mui/icons-material/FlightLandRounded';

export default function BasicTable(onDelete) {
  const [open, setOpen] = useState(false);

  const [totalPrice, setTotalPrice] = useState();
  // const [deleteRes, setdeleteRes] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [data, getData] = useState([]);
  const getDate = (input) => {
    const date = new Date(input);
    return (
      date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    );
  };

  // const handleClickOpenDialog = () => {
  //   setOpenDialog(true);
  // };

  // const handleCloseDialog = () => {
  //   setOpenDialog(false);
  // };
  const deleteReservation = (reservationId, price) => {
    setTotalPrice(price);
    handleClose();
    console.log('an hena', reservationId);
    axios
      .delete(`http://localhost:8081/user/delete/reservation/${reservationId}`)
      .then((res) => {
        sendEmail(price);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    //onDelete();
  };
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const sendEmail = (price) => {
    var templateParams = {
      totalPrice: price,
      reply_to: 'Check this out!',
      from_name: 'Cloud 9',
    };
    emailjs
      .send(
        'service_ACL',
        'template_ryeq8rf',
        templateParams,
        'user_i6KjynhTdTItE6MZB2wkB'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);

          window.location.reload(false);
        },
        function (error) {
          console.log('FAILED...', error);
          // window.location.reload(false);
        }
      );
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const ViewReservations = () => {
    useEffect(() => {
      axios
        .get('http://localhost:8081/user/reservations/61aa2eb9d3eee0b9e4921105')
        .then((res) => {
          getData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  };
  ViewReservations();
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const StyledTableElement = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      border: '2px',
      color: theme.palette.common.white,
    },
  }));

  return (
    <Container>
      <div style={{ marginTop: '2%', marginBottom: '2%'}}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table" light="false">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell />
                <StyledTableCell align='center'>Flight Number</StyledTableCell>
                <StyledTableCell align='center'>Depature date</StyledTableCell>
                <StyledTableCell align='center'>Depature time</StyledTableCell>
                <StyledTableCell align='center'>Arrival date</StyledTableCell>
                <StyledTableCell align='center'>Arrival time</StyledTableCell>
                <StyledTableCell align='center'>Cabin</StyledTableCell>
                <StyledTableCell align='center' sx={{ width: '3%' }} ></StyledTableCell>
                <StyledTableCell align='center' sx={{ width: '3%' }}></StyledTableCell>
                <StyledTableCell align='center' sx={{ width: '7%' }}></StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: '0px' } }}
                >
                  <StyledTableCell style={{ width: '13%' }}>
                    <Stack
                      spacing={2}
                      divider={<Divider orientation='horizontal' flexItem />}
                    >
                      <div>Departing Flight <FlightTakeoffIcon color="primary"/></div>
                      <div>Arrival Flight <FlightLandRounded color="error"/></div>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableElement align='center'>
                    <Stack
                      spacing={2}
                      divider={<Divider orientation='horizontal' flexItem />}
                    >
                      <div>{row.departingFlight.flightNumber}</div>
                      <div>{row.arrivalFlight.flightNumber}</div>
                    </Stack>
                  </StyledTableElement>
                  <StyledTableCell align='center'>
                    <Stack
                      spacing={2}
                      divider={<Divider orientation='horizontal' flexItem />}
                    >
                      <div>{getDate(row.departingFlight.departureDate)}</div>
                      <div>{getDate(row.arrivalFlight.departureDate)}</div>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <Stack
                      spacing={2}
                      divider={<Divider orientation='horizontal' flexItem />}
                    >
                      <div>{row.departingFlight.departureTime}</div>
                      <div>{row.arrivalFlight.departureTime}</div>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    {
                      <Stack
                        spacing={2}
                        divider={<Divider orientation='horizontal' flexItem />}
                      >
                        <div>{getDate(row.departingFlight.arrivalDate)}</div>
                        <div>{getDate(row.arrivalFlight.arrivalDate)}</div>
                      </Stack>
                    }
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <Stack
                      spacing={2}
                      divider={<Divider orientation='horizontal' flexItem />}
                    >
                      <div>{row.departingFlight.arrivalTime}</div>
                      <div>{row.arrivalFlight.arrivalTime}</div>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    {row.departingFlight.cabin === 'first'
                      ? 'First Class'
                      : row.departingFlight.cabin.charAt(0).toUpperCase() +
                        row.departingFlight.cabin.substring(1)}
                  </StyledTableCell>
                    <TableCell>
                      <Stack spacing={-0.5} orientation='horizontal'>
                              <IconButton aria-label="edit" color="primary">
                                <EditIcon /> 
                              </IconButton>
                              <small align='center'>edit</small>
                      </Stack>
                    </TableCell>
                  <StyledTableCell>
                    <div>
                    <Stack spacing={-0.5} orientation='horizontal'>
                      <IconButton
                        
                        color='error'
                        variant='outlined'
                        onClick={() => {
                          handleClickOpen();
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <small align='center'>delete</small>
                      </Stack>
                      {open && (
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby='modal-modal-title'
                          aria-describedby='modal-modal-description'
                        >
                          <Box sx={style}>
                            <Typography
                              id='modal-modal-title'
                              variant='h6'
                              component='h2'
                            >
                              Are you sure you want to cancel your reservation?
                            </Typography>
                            <Button onClick={handleClose}>No </Button>
                            <Button
                              onClick={() => {
                                // setTotalPrice(row.totalPrice);
                                deleteReservation(
                                  row.reservationId,
                                  row.totalPrice
                                );
                              }}
                            >
                              Yes
                            </Button>
                          </Box>
                        </Modal>
                      )}
                    </div>
                  </StyledTableCell>
                  <TableCell>
                  <Stack spacing={-0.5} orientation='horizontal'>
                    <IconButton color="success" onClick={handleClickOpenDialog}><AirplaneTicketIcon fontSize='large'/></IconButton>
                    <small align='center'>tickets</small>
                    </Stack>
                    <Dialog
        fullScreen
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Button autoFocus color="inherit" onClick={handleCloseDialog}>
              save
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
                    </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}


