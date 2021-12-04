import * as React from 'react';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

const CabinSelect = () => {
  const defaultProps = {
    options: cabins,
    getOptionLabel: (option)=>option,
  };
  
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
            placeholder="Cabin"
          />
        )}
      />
    </div>
  );
};
const cabins = [
    "economy",
    "business",
    "first class"
];

export default CabinSelect;
