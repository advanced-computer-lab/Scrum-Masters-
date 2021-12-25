import { React, useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Stack, Typography, TextField, Button, Alert } from "@mui/material";
import {
  Form,
  Col,
  Row,
  Container,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";
import jwt_decode from "jwt-decode";
const Password = () => {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [match, setMatch] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState();
  const token = window.sessionStorage.getItem("token");
   var decodedToken;
   if (token) decodedToken = jwt_decode(token);

  const theme = createTheme({
    palette: {
      secondary: {
        main: indigo["A200"],
      },
    },
  });
  const submit = () => {
    console.log("submit values", values, match);
    axios
      .post("http://localhost:8081/auth/password", {
        ...values,
        userId: decodedToken.id,
      })
      .then((result) => {
        if (result.data.success === true) {
          axios
            .patch(
              `http://localhost:8081/user/profile/update/${decodedToken.id}`,
              { password: values.confirmPassword }
            )
            .then((result) => {
              setSuccess(true);
            })
            .catch((err) => console.log(err));
        } else {
          setErrMessage(result.data.message);
          setError(true);
          return;
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 7000);
  }, [error, success]);
  const onChange = async (e, name) => {
    if (e) {
      try {
        if (e.target) {
          await setValues({ ...values, [e.target.name]: e.target.value });
          if (!edit && values.oldPassword !== "") {
            setEdit(true);
          }
          if (e.target.name === "confirmPassword") {
            if (edit === true && values.newPassword === e.target.value) {
              setMatch(true);
              console.log("match should be true");
            } else if (edit === true && values.newPassword !== e.target.value) {
              setMatch(false);
            }
          }
          if (e.target.name === "newPassword") {
            if (edit === true && values.confirmPassword === e.target.value) {
              setMatch(true);
              console.log("match should be true");
            } else if (
              edit === true &&
              values.confirmPassword !== e.target.value
            ) {
              setMatch(false);
            }
          }
        } else {
          await setValues({ ...values, [name]: e });
        }
        await console.log("change", values);
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
      {success && (
        <Alert
          severity="success"
          sx={{ background: "#f4eff8", marginTop: "4%" }}
        >
          You have successfully updated your password.
        </Alert>
      )}
      {error && (
        <Alert severity="error" style={{ marginTop: "4%" }}>
          {errMessage}
        </Alert>
      )}
      <Container>
        <Stack
          direction="column"
          justifyContent="center"
          spacing={5}
          width="70%"
          style={{ marginTop: "5%", display: "inline-block" }}
        >
          <Form.Group
            as={Row}
            className="mb-4 g-0"
            controlId="formPlaintextPassword1"
          >
            <Form.Label column sm="4" style={{ textAlign: "left" }}>
              Original Password
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                onChange={onChange}
                name="oldPassword"
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-4 g-0"
            controlId="formPlaintextPassword2"
          >
            <Form.Label column sm="4" style={{ textAlign: "left" }}>
              New Password
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                onChange={onChange}
                name="newPassword"
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-4 g-0"
            controlId="formPlaintextPassword3"
          >
            <Form.Label column sm="4" style={{ textAlign: "left" }}>
              Confirm New Password
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                onChange={onChange}
                name="confirmPassword"
                isInvalid={!match}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ textAlign: "initial" }}
              >
                Passwords do not match.
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
        </Stack>
        <Stack
          direction="row"
          justifyContent="right"
          spacing={2}
          style={{ marginTop: "1%" }}
        >
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="secondary"
              onClick={submit}
              disabled={!match || !edit || values.newPassword === ""}
              // style={{ marginLeft: "auto" }}
            >
              Change
            </Button>
          </ThemeProvider>
        </Stack>
      </Container>
    </div>
  );
};

export default Password;
