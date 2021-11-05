import React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  tableRowClasses,
  styled,
} from "@mui/material/";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import EditIcon from "@material-ui/icons/Edit";
import DeleteButton from "@material-ui/icons/Delete";
import { Container } from "react-bootstrap";

const FlightCard = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(4n-3)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:nth-of-type(4n-2)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  
  return (
    <React.Fragment>
      <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <Tooltip title="View More Details" arrow placement="right">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </Tooltip>
        </TableCell>
        <TableCell align="center">{row.flightNumber}</TableCell>
        <TableCell align="center">{row.departureAirport}</TableCell>
        {/* <TableCell align="left">{row.fat}</TableCell> */}
        <TableCell align="center">{row.arrivalAirport}</TableCell>
        <TableCell align="center">{row.departureDate}</TableCell>
        <TableCell align="center">{row.arrivalDate}</TableCell>
        <TableCell align="center">{row.duration}</TableCell>
        <TableCell align="right">
          <Tooltip title="Edit" arrow placement="right">
            <IconButton
              aria-label="edit"
              style={{ color: "#e0d615", marginRight: "10px" }}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" arrow placement="right">
            <IconButton aria-label="delete" style={{ color: "red" }}>
              <DeleteButton />
            </IconButton>
          </Tooltip>
        </TableCell>
        {/* <TableCell align="center">
          <Tooltip title="Delete" arrow placement="right">
            <IconButton aria-label="delete" style={{ color: "red" }}>
              <DeleteButton />
            </IconButton>
          </Tooltip>
        </TableCell> */}
      </StyledTableRow>
      <StyledTableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                fontStyle="italic"
              >
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ fontStyle: "italic" }}>
                      Departure Time
                    </TableCell>
                    <TableCell align="center" style={{ fontStyle: "italic" }}>
                      Arrival Time
                    </TableCell>
                    <TableCell align="center" style={{ fontStyle: "italic" }}>
                      Economy Seats
                    </TableCell>
                    <TableCell align="center" style={{ fontStyle: "italic" }}>
                      Business Seats
                    </TableCell>
                    <TableCell align="center" style={{ fontStyle: "italic" }}>
                      First Class Seats
                    </TableCell>
                    <TableCell align="center" style={{ fontStyle: "italic" }}>
                      Total Available Seats
                    </TableCell>
                    {/* <TableCell align="center">Total price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row._id}>
                    <TableCell align="center" style={{ fontStyle: "italic" }}>
                      {row.departureTime}
                    </TableCell>
                    <TableCell align="center" style={{ fontStyle: "italic" }}>
                      {row.arrivalTime}
                    </TableCell>
                    <TableCell align="center" style={{ fontStyle: "italic" }}>
                      {row.noOfEconomy}
                    </TableCell>
                    <TableCell align="center" style={{ fontStyle: "italic" }}>
                      {row.noOfBusiness}
                    </TableCell>
                    <TableCell align="center" style={{ fontStyle: "italic" }}>
                      {row.noOfFirstClass}
                    </TableCell>
                    <TableCell align="center" style={{ fontStyle: "italic" }}>
                      {row.noOfSeats}
                    </TableCell>
                  </TableRow>
                </TableBody>{" "}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </StyledTableRow>
    </React.Fragment>
  );
};

export default FlightCard;
