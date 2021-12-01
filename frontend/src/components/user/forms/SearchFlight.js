import React from 'react';
import Counter from '../../../utilities/Counter';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import FromToInput from '../../../utilities/FromToInput';
const SearchFlight = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleChange = (event) => {
    setAnchorEl(event.currentTarget);
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
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>
            Select Passengers
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Age'
            onChange={handleChange}
          >
            <MenuItem>
              <ListItemText>Adult (16+)</ListItemText>
              <Counter />
            </MenuItem>
            <MenuItem>
              <ListItemText>Child (2-11)</ListItemText>
              <Counter />
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SearchFlight;
