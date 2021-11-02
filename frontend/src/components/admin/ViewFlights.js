import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import Row from './Row';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

const ViewFlights = (props) => {
  props = rows;
  const [data, setData] = useState();

  const sendGetRequest = async () => {
    try {
      const res = await axios.get('http://localhost:8081/admin/search');
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  useEffect(sendGetRequest, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Flight Number</TableCell>
            <TableCell align='center'>From</TableCell>
            <TableCell align='center'>Duration</TableCell>
            <TableCell align='center'>To</TableCell>
            <TableCell align='center'>Departure Date</TableCell>
            <TableCell align='center'>Departure Date</TableCell>
            <TableCell align='center'>Departure Date</TableCell>
            <TableCell align='center'>Departure Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ViewFlights;
