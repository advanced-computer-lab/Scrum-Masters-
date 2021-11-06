import TimePicker from '@mui/lab/TimePicker';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

export default function ResponsiveTimePickers({label,name,onChange}) {
    const [value, setValue] = React.useState(null);
    const handleOnChange = (e)=>{
        setValue(e);
        onChange(e,name)    }
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            label = {label}
            name = {name}
            value={value}
            onChange={handleOnChange}
            renderInput={(params) => <TextField {...params} />}
          />
      </LocalizationProvider>
    );
  }