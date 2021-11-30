import React from 'react';
import { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import IconButton from '@mui/material/IconButton';

const Counter = () => {
  const [count, setCount] = useState(0);
  function decrementCount() {
    setCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1));
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <ButtonGroup
      disableElevation
      variant='contained'
      style={{ float: 'right' }}
    >
      <IconButton onClick={decrementCount}>
        <RemoveCircleRoundedIcon />
      </IconButton>
      <div style={{ marginTop: '5%', textAlign: 'center' }}>{count} </div>
      <IconButton onClick={incrementCount}>
        <AddCircleIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default Counter;
