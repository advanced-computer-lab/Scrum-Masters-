import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const Date = ({ onChange, label, name }) => {
  const [value, setValue] = React.useState(null);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
<<<<<<< HEAD
        name= {name}
        onChange={(newValue) => {
          setValue(newValue);
          console.log("in date");
          onChange(newValue,name)
=======
        name={name}
        onChange={(e, newValue) => {
          setValue(newValue);
          console.log("in date");
          {
            onChange(e);
          }
>>>>>>> 17c58f72c014ae8569ac036f3559f1eb024d3884
        }}
        renderInput={(params) => <TextField {...params} />}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </LocalizationProvider>
  );
};

export default Date;
