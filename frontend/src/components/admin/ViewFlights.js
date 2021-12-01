import React from 'react';
import { useEffect } from 'react';
import {
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
import FlightCard from './FlightCard';

const ViewFlights = ({ flights, onDelete, onUpdate }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {}, []);
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
              {' '}
              Duration
            </StyledTableCell>
            <StyledTableCell
              align='center'
              style={{ fontWeight: 'bolder' }}
            ></StyledTableCell>
          </TableRow>
        </TableHead>
        {flights ? (
          <TableBody>
            {flights
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <FlightCard
                  key={row._id}
                  row={row}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              ))}
          </TableBody>
        ) : null}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={flights ? flights.length : 0}
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
