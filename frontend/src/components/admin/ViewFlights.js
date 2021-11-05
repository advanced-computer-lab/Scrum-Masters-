import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
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

const ViewFlights = (props) => {
  const [data, setData] = useState();
  
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#5390d9",
    color: theme.palette.common.white,
  },
}));

  useEffect(() => {
    axios
      .post("http://localhost:8081/admin/search")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
