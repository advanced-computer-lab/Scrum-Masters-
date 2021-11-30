import React from 'react';
import Counter from '../../../utilities/Counter';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import FromToInput from '../../../utilities/FromToInput';
import PassengersButton from '../../../utilities/PassengersButton';

const SearchFlight = () => {
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  function decrementAdultCount() {
    setAdultCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1));
  }
  function incrementAdultCount() {
    setAdultCount((prevCount) => prevCount + 1);
  }
  function decrementChildrenCount() {
    setChildrenCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1));
  }
  function incrementChildrenCount() {
    setChildrenCount((prevCount) => prevCount + 1);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItemStyling = {
    marginLeft: '5px',
  };
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      style={{ marginTop: '10px' }}
    >
      <Grid item xs={6} md={2.5}>
        <FromToInput label='From' />
      </Grid>
      <Grid item xs={6} md={2.5}>
        <FromToInput label='To' />
      </Grid>
      <Grid item xs={6} md={2.5}>
        <PassengersButton onClick={handleClick} />
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem disableGutters style={menuItemStyling}>
            <ListItemText>
              Adult (16+) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </ListItemText>
            <ButtonGroup
              disableElevation
              //variant='contained'
              style={{ float: 'right' }}
            >
              <IconButton onClick={decrementChildrenCount}>
                <RemoveCircleRoundedIcon />
              </IconButton>
              <div style={{ marginTop: '5%', textAlign: 'center' }}>
                {adultCount}{' '}
              </div>
              <IconButton onClick={incrementAdultCount}>
                <AddCircleIcon />
              </IconButton>
            </ButtonGroup>
          </MenuItem>
          <MenuItem disableGutters>
            <ListItemText>Child (2-16)</ListItemText>
            <ButtonGroup
              disableElevation
              //variant='contained'
              style={{ float: 'right' }}
            >
              <IconButton onClick={decrementChildrenCount}>
                <RemoveCircleRoundedIcon />
              </IconButton>
              <div style={{ marginTop: '5%', textAlign: 'center' }}>
                {childrenCount}{' '}
              </div>
              <IconButton onClick={incrementChildrenCount}>
                <AddCircleIcon />
              </IconButton>
            </ButtonGroup>
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};

export default SearchFlight;
