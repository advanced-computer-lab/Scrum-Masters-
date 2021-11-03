import React from 'react';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Tooltip,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import EditIcon from '@material-ui/icons/Edit';
import DeleteButton from '@material-ui/icons/Delete';

const FlightCard = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': {} }}>
        <TableCell>
          <Tooltip title='More Details'>
            <IconButton
              aria-label='expand row'
              size='small'
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </Tooltip>
        </TableCell>
        <TableCell component='th'>{row.flightNumber}</TableCell>
        <TableCell align='left'>{row.departureAirport}</TableCell>
        <TableCell align='left'>{row.fat}</TableCell>
        <TableCell align='left'>{row.arrivalAirport}</TableCell>
        <TableCell align='center'>{row.departureDate}</TableCell>
        <TableCell align='left'>{row.arrivalDate}</TableCell>
        <TableCell align='center'>
          <Tooltip title='Edit'>
            <IconButton aria-label='edit' id={row._id}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Delete'>
            <IconButton aria-label='delete' id={row._id}>
              <DeleteButton />
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={100}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Details
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Economy Seats</TableCell>
                    <TableCell align='center'>Business Seats</TableCell>
                    <TableCell align='center'>First Class Seats</TableCell>
                    <TableCell align='center'>Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row._uid}>
                    <TableCell align='center'>{row.noOfEconomy}</TableCell>
                    <TableCell align='center'>{row.noOfBusiness}</TableCell>
                    <TableCell align='center'>{row.noOfFirstClass}</TableCell>
                    <TableCell align='center'></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default FlightCard;
