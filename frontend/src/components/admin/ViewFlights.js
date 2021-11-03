import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from '@material-ui/core';
import FlightCard from './FlightCard';

const ViewFlights = (props) => {
  const [data, setData] = useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    axios
      .get('http://localhost:8081/admin/search')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} style={{ margin: '5% 0%' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align='left'>Flight Number</TableCell>
            <TableCell align='left'>From</TableCell>
            <TableCell align='left'>Duration</TableCell>
            <TableCell align='left'>To</TableCell>
            <TableCell align='center'>Departure Date</TableCell>
            <TableCell align='left'>Arrival Date</TableCell>
            <TableCell align='center'></TableCell>
          </TableRow>
        </TableHead>
        {data ? (
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <FlightCard key={row._id} row={row} />
              ))}
          </TableBody>
        ) : null}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={data ? data.length : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default ViewFlights;
