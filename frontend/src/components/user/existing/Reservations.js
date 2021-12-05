/*import { React, useEffect, useState } from "react";

import { GridCellParams } from '@mui/x-data-grid';
import emailjs from "emailjs-com"
import axios from "axios";
import { Container } from "react-bootstrap";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
    TableRow,Stack,
    Tooltip,
    Typography,
    tableCellClasses,
    styled,
    Divider,
    Paper,
  } from '@mui/material';
// export default function AlertDialog() {
//     const [open, setOpen] = React.useState(false);
  
//     const handleClickOpen = () => {
//       setOpen(true);
//     };
  
//     const handleClose = () => {
//       setOpen(false);
//     };
export default function BasicTable(onDelete) {
    const [open, setOpen] = useState(false);
    const [totalPrice, setTotalPrice] = useState();
    // const [deleteRes, setdeleteRes] = useState(true);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }
    const [data, getData] = useState([]);
    const getDate = (input) => {
        const date = new Date(input);
        return (
          date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
        );
      };
      const deleteReservation = (reservationId) => {
          console.log("an hena" , reservationId)
            axios
          .delete(`http://localhost:8081/user/delete/reservation/${reservationId}`)
          .then((res) => {
            sendEmail();
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        //onDelete();

        window.location.reload(false);
 
        const sendEmail = () => {
            //e.preventDefault();
        
            emailjs.sendForm('gmail', 'template_ryeq8rf', totalPrice, 'user_i6KjynhTdTItE6MZB2wkB')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
             // e.target.reset();
          };    
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
              .get("http://localhost:8081/user/reservations/61aa2eb9d3eee0b9e4921105")
              .then((res) => {
                getData(res.data);
                console.log(res.data);
              })
              .catch((err) => console.log(err));
          },[])
    }
    ViewReservations();
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#5e60ce',
          color: theme.palette.common.white,
        },
      }));
      const StyledTableElement = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            border:'2px',
            color: theme.palette.common.white,
        },
      }));
      
  return (
    <Container>
    <div style={{ marginTop: '2%' ,marginBottom:'2%'}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
              <StyledTableCell/>
            <StyledTableCell align="center">Flight Number</StyledTableCell>
            <StyledTableCell align="center">Depature date</StyledTableCell>
            <StyledTableCell align="center">Depature time</StyledTableCell>
            <StyledTableCell align="center">Arrival date</StyledTableCell>
            <StyledTableCell align="center">Arrival time</StyledTableCell>
            <StyledTableCell align="center">Cabin</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: '0px' } }}
            >
              <TableCell style={{width: '12%'}}>
              <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
                            <div>Departing Flight</div>
                            <div>Arrival Flight</div>
                            </Stack>
              </TableCell>
              <StyledTableElement align="center"><Stack spacing={2}
                                        divider={<Divider orientation="horizontal" flexItem />}>
                                        <div>{row.departingFlight.flightNumber}</div>
                                        <div>{row.arrivalFlight.flightNumber}</div>
                                        </Stack></StyledTableElement>
              <TableCell align="center"><Stack spacing={2}
                                        divider={<Divider orientation="horizontal" flexItem />}>
                                        <div>{getDate(row.departingFlight.departureDate)}</div>
                                        <div>{getDate(row.arrivalFlight.departureDate)}</div>
                                        </Stack></TableCell>
              <TableCell align="center"><Stack spacing={2}
                                        divider={<Divider orientation="horizontal" flexItem />}>
                                        <div>{row.departingFlight.departureTime}</div>
                                        <div>{row.arrivalFlight.departureTime}</div>
                                        </Stack></TableCell>
              <TableCell align="center">{<Stack spacing={2}
                                        divider={<Divider orientation="horizontal" flexItem />}>
                                        <div>{getDate(row.departingFlight.arrivalDate)}</div>
                                        <div>{getDate(row.arrivalFlight.arrivalDate)}</div>
                                        </Stack>}</TableCell>
              <TableCell align="center"><Stack spacing={2}
                                        divider={<Divider orientation="horizontal" flexItem />}>
                                        <div>{row.departingFlight.arrivalTime}</div>
                                        <div>{row.arrivalFlight.arrivalTime}</div>
                                        </Stack></TableCell>
              <TableCell align="center">{row.departingFlight.cabin==='first'?'First Class':row.departingFlight.cabin.charAt(0).toUpperCase()+row.departingFlight.cabin.substring(1)}</TableCell>

              <TableCell style={{width: '7%'}}><div>
      <Button color='error' variant="outlined" onClick={()=>{
          handleClickOpen();
          }}>
        Cancel
      </Button>
     { open && (<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to cancel your reservation?
          </Typography>
          <Button onClick={()=>{setTotalPrice(row.totalPrice);deleteReservation(row.reservationId);}}>Yes</Button>
        </Box>
      </Modal>)
}
    </div></TableCell>
            </TableRow>
            
            
            
          ))}
        
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </Container>
  );
}
*/




// const columns = [
//   { field: 'id', headerName: 'Date', width: 90 },
//   {
//     field: 'lastName',
//     headerName: 'Time',
//     width: 150,
//     onclick:(()=>{console.log("el enta 3ayzo")})
//   },
//   {
//     field: 'firstName',
//     headerName: 'Depature',
//     width: 150,
//   },
//   {
//     field: 'age',
//     headerName: 'Arrival',
//     width: 150,
//   },
//   {
//     field: 'FlightNo',
//     headerName: 'FlightNo',
//     width: 150,
//   },
//   {
//     field: 'Cabin',
//     headerName: 'Cabin',
//     width: 150,
//   },
  
    

// ];

// const rows = [
//   { id: 1, lastName: 'ayhaga', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//  ];
//const data = axios.get("http://localhost:8081/user/reservations/618939b25ac9e1af44ded417") ;


// export default function DataGridDemo() {
//     const [data, getData] = useState([]);
//     const ViewReservations = () => {
//         useEffect(() => {
//             axios
//               .get("http://localhost:8081/user/reservations/61aa2eb9d3eee0b9e4921105")
//               .then((res) => {
//                 getData(res.data);
//                 console.log(res.data);
//               })
//               .catch((err) => console.log(err));
//           },[])
//     }
//     ViewReservations();
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }




