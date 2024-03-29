import { React, useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import {
  Stack,
  Tooltip,
  IconButton,
  TextField,
  Button,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const theme = createTheme({
    palette: {
      secondary: {
        main: indigo[500],
      },
    },
  });
  const onChange = async (e, name) => {
    if (e) {
      try {
        console.log(e);
        if (e.target) {
          if (e.target.name === "passportNumber") {
            await setValues({
              ...values,
              [e.target.name]: e.target.value.toUpperCase(),
            });
          } else {
            await setValues({ ...values, [e.target.name]: e.target.value });
          }
        } else {
          await setValues({ ...values, [name]: e });
        }
        await console.log("update", values);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const submit = () => {
    axios
      .patch(
        `http://localhost:8081/user/profile/update/61aa2eb9d3eee0b9e4921105`,
        values
      )
      .then((res) => {
        setValues(res.data);
        console.log(res.data);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
    setEdit(!edit);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8081/user/profile/61aa2eb9d3eee0b9e4921105`)
      .then((result) => {
        console.log(result);
        setInfo(result.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 5000);
  }, [edit]);
  const toggleEdit = () => {
    setEdit(!edit);
  };
  return (
    <div>
      {loading && (
        <Loader
          type="Plane"
          color="#4ea8de"
          height={100}
          width={100}
          timeout={5000}
        />
      )}
      {!loading && info && (
        <div>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              style={{ position: "absolute" }}
            >
              Account Information
            </Typography>
            {!edit && (
              <Tooltip title="Edit Information" arrow placement="right">
                <IconButton
                  aria-label="edit"
                  style={{
                    color: "#5390d9",
                    marginLeft: "auto",
                    background: "#f4eff8",
                  }}
                  onClick={toggleEdit}
                  size="large"
                >
                  <EditIcon style={{ fontSize: "28pt" }} />
                </IconButton>
              </Tooltip>
            )}{" "}
            {edit && <div style={{ marginTop: "6%" }}></div>}
          </Stack>
          <ThemeProvider theme={theme}>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={25}
              style={{ marginTop: "1%" }}
            >
              <Stack
                direction="column"
                justifyContent="center"
                spacing={7}
                style={{ marginTop: "1%" }}
              >
                <TextField
                  id="info-firstname"
                  label="First Name"
                  name="firstName"
                  defaultValue={info.firstName}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="standard"
                  color={edit ? "secondary" : ""}
                  focused={edit}
                  onChange={onChange}
                />
                <TextField
                  id="info-email"
                  label="Email"
                  name="email"
                  defaultValue={info.email}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="standard"
                  color={edit ? "secondary" : ""}
                  focused={edit}
                  onChange={onChange}
                />
                <TextField
                  id="info-address"
                  label="Address"
                  name="homeAddress.address"
                  defaultValue={info.homeAddress.address}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="standard"
                  color={edit ? "secondary" : ""}
                  focused={edit}
                  onChange={onChange}
                />
                <TextField
                  id="info-phone"
                  label="Phone Number"
                  name="phoneNumber"
                  defaultValue={info.phoneNumber}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="standard"
                  color={edit ? "secondary" : ""}
                  focused={edit}
                  onChange={onChange}
                />
              </Stack>
              <Stack
                direction="column"
                justifyContent="center"
                spacing={7}
                style={{ marginTop: "1%" }}
              >
                <TextField
                  id="info-lastname"
                  label="Last Name"
                  name="lastName"
                  defaultValue={info.lastName}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="standard"
                  color={edit ? "secondary" : ""}
                  focused={edit}
                  onChange={onChange}
                />
                <TextField
                  id="info-passport"
                  label="Passport Number"
                  name="passportNumber"
                  defaultValue={info.passportNumber}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="standard"
                  color={edit ? "secondary" : ""}
                  focused={edit}
                  onChange={onChange}
                />
                <TextField
                  id="info-city"
                  label="City"
                  name="homeAddress.city"
                  defaultValue={info.homeAddress.city}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="standard"
                  color={edit ? "secondary" : ""}
                  focused={edit}
                  onChange={onChange}
                />
                <TextField
                  id="info-zip"
                  label="Zip Code"
                  name="homeAddress.zipCode"
                  defaultValue={info.homeAddress.zipCode}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="standard"
                  color={edit ? "secondary" : ""}
                  focused={edit}
                  onChange={onChange}
                />
              </Stack>
            </Stack>
            {edit && (
              <Stack
                direction="row"
                justifyContent="right"
                spacing={2}
                style={{ marginTop: "1%" }}
              >
                <Button variant="contained" color="secondary" onClick={submit}>
                  Update
                </Button>
              </Stack>
            )}
            {success && (
              <Alert severity="success" sx={{ background: "#f4eff8" }}>
                You have successfully updated your information.
              </Alert>
            )}
            {error && (
              <Alert severity="error">
                Something went wrong. Please try again later.
              </Alert>
            )}
          </ThemeProvider>
        </div>
      )}
      {/* {
                edit &&()
            } */}
    </div>
  );
};

export default Profile;
