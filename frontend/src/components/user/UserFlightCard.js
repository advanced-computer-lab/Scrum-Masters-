import React from 'react';
import { useState } from 'react';
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
  styled,
} from '@mui/material/';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@material-ui/core';

const UserFlightCard = (props) => {
  const row = props.row;
  const cabinClass = props.cabinClass;
  const nextPage = props.nextPage;
  const [count, setCount] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(4n-3)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:nth-of-type(4n-2)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const getDate = (input) => {
    const date = new Date(input);
    return (
      date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    );
  };
  const getPrice = (cabinClass, row) => {
    return cabinClass === 'economy'
      ? row.economy.adultPrice
      : cabinClass === 'first'
      ? row.firstClass.adultPrice
      : row.business.adultPrice;
  };
  return (
    <React.Fragment>
      <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <Tooltip title='View More Details' arrow placement='right'>
            <IconButton
              aria-label='expand row'
              size='small'
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </Tooltip>
        </TableCell>
        <TableCell align='center'>{row.flightNumber}</TableCell>
        <TableCell align='center'>{row.departureAirport}</TableCell>
        <TableCell align='center'>{row.arrivalAirport}</TableCell>
        <TableCell align='center'>{getDate(row.departureDate)}</TableCell>
        <TableCell align='center'>{getDate(row.arrivalDate)}</TableCell>
        <TableCell align='center'>{getPrice(cabinClass, row) + '£'}</TableCell>
        <TableCell align='center' style={{ fontStyle: 'italic' }}>
          {/* <Button
            onClick={() => {
              const newValue = count + 1;
              setCount(newValue);
              nextPage(newValue);
            }}
          >
            {' '}
            HI{' '}
          </Button> */}
        </TableCell>
      </StyledTableRow>
      <StyledTableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant='h6'
                gutterBottom
                component='div'
                fontStyle='italic'
              >
                Details
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='center' style={{ fontStyle: 'italic' }}>
                      Departure Time
                    </TableCell>
                    <TableCell align='center' style={{ fontStyle: 'italic' }}>
                      Duration{' '}
                    </TableCell>
                    <TableCell align='center' style={{ fontStyle: 'italic' }}>
                      Arrival Time
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row._id}>
                    <TableCell align='center' style={{ fontStyle: 'italic' }}>
                      {row.departureTime}
                    </TableCell>
                    <TableCell align='center' style={{ fontStyle: 'italic' }}>
                      {row.duration}
                    </TableCell>
                    <TableCell align='center' style={{ fontStyle: 'italic' }}>
                      {row.arrivalTime}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </StyledTableRow>
    </React.Fragment>
  );
};

export default UserFlightCard;
