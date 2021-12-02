import * as React from 'react';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import InputAdornment from '@mui/material/InputAdornment';
import FlightLandRounded from '@mui/icons-material/FlightLandRounded';

const FromToInput = ({ label }) => {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };
  const [value, setValue] = React.useState(null);
  function getLabel(label) {
    return label === 'From' ? (
      <InputAdornment position='start'>
        <FlightTakeoffRoundedIcon />
      </InputAdornment>
    ) : (
      <InputAdornment position='start'>
        <FlightLandRounded />
      </InputAdornment>
    );
  }
  return (
    <div>
      <Autocomplete
        {...defaultProps}
        id='blur-on-select'
        blurOnSelect
        clearOnEscape
        size='30px'
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={label}
            InputProps={{
              ...params.InputProps,
              startAdornment: getLabel(label),
              disableUnderline: true,
            }}
          />
        )}
      />
    </div>
  );
};
const top100Films = [

];

export default FromToInput;
