/*import { React, useEffect, useState } from "react";

import { GridCellParams } from '@mui/x-data-grid';
import emailjs from "emailjs-com"
import axios from "axios";

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


const columns = [
  { field: 'id', headerName: 'Date', width: 90 },
  {
    field: 'lastName',
    headerName: 'Time',
    width: 150,
    onclick:(()=>{console.log("el enta 3ayzo")})
  },
  {
    field: 'firstName',
    headerName: 'Depature',
    width: 150,
  },
  {
    field: 'age',
    headerName: 'Arrival',
    width: 150,
  },
  {
    field: 'FlightNo',
    headerName: 'FlightNo',
    width: 150,
  },
  {
    field: 'Cabin',
    headerName: 'Cabin',
    width: 150,
  },
  
    

];

const rows = [
  { id: 1, lastName: 'ayhaga', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
 ];
//const data = axios.get("http://localhost:8081/user/reservations/618939b25ac9e1af44ded417") ;
export default function DataGridDemo() {
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
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
*/



