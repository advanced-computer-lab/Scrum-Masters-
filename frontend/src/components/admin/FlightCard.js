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
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th'>{row.flightNumber}</TableCell>
        <TableCell align='left'>{row.departureAirport}</TableCell>
        <TableCell align='left'>{row.fat}</TableCell>
        <TableCell align='left'>{row.arrivalAirport}</TableCell>
        <TableCell align='center'>{row.departureDate}</TableCell>
        <TableCell align='left'>{row.arrivalDate}</TableCell>
        <TableCell align='center'>
          <IconButton aria-label='edit'>
            <EditIcon />
          </IconButton>
          <IconButton aria-label='delete'>
            <DeleteButton />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Details
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Economy Seats</TableCell>
                    <TableCell>Business Seats</TableCell>
                    <TableCell align='center'>First Class Seats</TableCell>
                    <TableCell align='center'>Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row._uid}>
                    <TableCell component='th' scope=''>
                      {row.noOfEconomy}
                    </TableCell>
                    <TableCell>{row.noOfBusiness}</TableCell>
                    <TableCell align='center'>{row.noOfFirstClass}</TableCell>
                    <TableCell align='center'></TableCell>
                  </TableRow>
                </TableBody>{' '}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default FlightCard;
