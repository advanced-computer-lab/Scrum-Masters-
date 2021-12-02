import React from 'react';
import { useEffect, useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TablePagination,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  tableCellClasses,
  styled,
  Paper,
} from '@mui/material';
import UserFlightCard from '../../../components/user/UserFlightCard';

const FlightReservation = ({ data, nextPage }) => {
  console.log(data);
  const [page, setPage] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const cabinClass = data.details.cabin ? data.details.cabin : null;
  //useEffect(() => {}, []);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#5e60ce',
      color: theme.palette.common.white,
    },
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const nextPageTable = () => {
    const newValue = count + 1;
    setCount(newValue);
    nextPage(newValue);
  };

  return (
    <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell align='center' style={{ fontWeight: 'bolder' }}>
              Flight Number
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bolder' }}>
              From
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bolder' }}>
              To
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bolder' }}>
              Departure Date
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bolder' }}>
              Arrival Date
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bolder' }}>
              Price
            </StyledTableCell>
            <StyledTableCell
              align='center'
              style={{ fontWeight: 'bolder' }}
            ></StyledTableCell>
          </TableRow>
        </TableHead>
        {data.flights ? (
          <TableBody>
            {data.flights
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <UserFlightCard
                  key={row._id}
                  row={row}
                  cabinClass={cabinClass}
                  nextPage={nextPage}
                />
              ))}
          </TableBody>
        ) : null}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={data.flights ? data.flights.length : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <Button
        onClick={() => {
          const newValue = count + 1;
          setCount(newValue);
          nextPage(newValue);
        }}
      >
        {' '}
        HI
      </Button>
    </TableContainer>
  );
};

export default FlightReservation;
