import { React, useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Stack, Typography, TextField } from "@mui/material";
import jwt_decode from "jwt-decode";
const Password = () => {
  const [edit, setEdit] = useState(false);
  const [currentPassword, setCurrentPassword] = useState();
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [match, setMatch] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const token = window.sessionStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  // useEffect(() => {
  //   // axios
  //   //   .get(`http://localhost:8081/user/profile/${decodedToken.id}`)
  //   //   .then((result) => {
  //   //     console.log(result);
  //   //     setCurrentPassword(result.data.password);
  //   //     setLoading(false);
  //   //   })
  //   //   .catch((err) => console.log(err));
  //   setTimeout(() => {
  //     setSuccess(false);
  //     setError(false);
  //   }, 5000);
  // }, []);

  const onChange = async (e, name) => {
    if (e) {
      try {
        console.log(e);
        if (e.target) {
          await setValues({ ...values, [e.target.name]: e.target.value });
          if (values.newPassword !== values.confirmPassword) {
            setEdit(true);
            setMatch(false);
          } else if (
            edit === true &&
            values.newPassword === values.currentPassword
          )
            setMatch(true);
        } else {
          await setValues({ ...values, [name]: e });
        }
        await console.log("update", values);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          style={{ position: "absolute" }}
        >
          Change Password
        </Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        spacing={7}
        style={{ marginTop: "4%" }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          style={{ marginTop: "1%" }}
        ></Stack>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          style={{ marginTop: "1%" }}
        >
          <Typography
            variant="button"
            gutterBottom
            sx={{ alignSelf: "center" }}
          >
            Original Password:&nbsp;
          </Typography>
          <TextField
            hiddenLabel
            id="info-oldpass"
            name="oldPassword"
            // InputProps={{
            //   readOnly: !edit,
            // }}
            // variant="outlined"

            InputLabelProps={{ shrink: false }}
            color="secondary"
            // focused={edit}
            // label="Original Password"
            size="small"
            type="password"
            onChange={onChange}
          />
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          style={{ marginTop: "1%" }}
        ></Stack>
      </Stack>
    </div>
  );
};

export default Password;
