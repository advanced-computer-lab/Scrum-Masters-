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
import FlightCard from './FlightCard';

const ViewFlights = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:5000/admin/search')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Flight Number</TableCell>
            <TableCell align='left'>From</TableCell>
            <TableCell align='left'>Duration</TableCell>
            <TableCell align='left'>To</TableCell>
            <TableCell align='center'>Departure Date</TableCell>
            <TableCell align='left'>Arrival Date</TableCell>
            <TableCell align='center'>Departure Date</TableCell>
          </TableRow>
        </TableHead>
        {data ? (
          <TableBody>
            {data.map((row) => (
              <FlightCard key={row.name} row={row} />
            ))}
          </TableBody>
        ) : null}
      </Table>
    </TableContainer>
  );
};

export default ViewFlights;
