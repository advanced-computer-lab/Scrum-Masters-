import { React, useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { GridCellParams } from '@mui/x-data-grid';
import emailjs from "emailjs-com"
import axios from "axios";
import {
    Button,
    Box,
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
    Tooltip,
    Typography,
    tableCellClasses,
    styled,
    Paper,
  } from '@mui/material';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
    const [data, getData] = useState([]);
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
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
              <StyledTableCell/>
            <StyledTableCell>Departing date</StyledTableCell>
            <StyledTableCell align="right">Departing time</StyledTableCell>
            <StyledTableCell align="right">Arrival date</StyledTableCell>
            <StyledTableCell align="right">Arrival time</StyledTableCell>
            <StyledTableCell align="right">Depature</StyledTableCell>
            <StyledTableCell align="right">Arrival</StyledTableCell>
            <StyledTableCell align="right">FlightNo.</StyledTableCell>
            <StyledTableCell align="right">Cabin</StyledTableCell>
            <StyledTableCell align="right">   </StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell></TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


// const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('gmail', 'template_ryeq8rf', e.target, 'user_i6KjynhTdTItE6MZB2wkB')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset();
//   };


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




