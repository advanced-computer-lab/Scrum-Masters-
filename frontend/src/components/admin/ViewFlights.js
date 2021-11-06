import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableFooter,
  TablePagination,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
  styled,
  Paper,
} from "@mui/material";
import FlightCard from "./FlightCard";
import { Container } from "react-bootstrap";

const ViewFlights = ({ flights }) => {
  // const [data, setData] = useState(flights);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#5390d9",
      color: theme.palette.common.white,
    },
  }));

  useEffect(() => {}, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell align="center" style={{ fontWeight: "bolder" }}>
              Flight Number
            </StyledTableCell>
            <StyledTableCell align="center" style={{ fontWeight: "bolder" }}>
              From
            </StyledTableCell>
            {/* <TableCell align="left">Duration</TableCell> */}
            <StyledTableCell align="center" style={{ fontWeight: "bolder" }}>
              To
            </StyledTableCell>
            <StyledTableCell align="center" style={{ fontWeight: "bolder" }}>
              Departure Date
            </StyledTableCell>
            <StyledTableCell align="center" style={{ fontWeight: "bolder" }}>
              Arrival Date
            </StyledTableCell>
            <StyledTableCell align="center" style={{ fontWeight: "bolder" }}>
              {" "}
              Duration
            </StyledTableCell>
            <StyledTableCell
              align="center"
              style={{ fontWeight: "bolder" }}
            ></StyledTableCell>
            {/* <TableCell align="center" style={{ fontWeight: "bolder" }}>
              Delete Flight
            </TableCell> */}
          </TableRow>
        </TableHead>
        {flights ? (
          <TableBody>
            {flights
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
