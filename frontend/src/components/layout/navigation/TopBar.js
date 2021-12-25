import { React, useState, useEffect } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import logo from "../../../images/logo-white.png";
import ProfileButton from "../../admin/buttons/ProfileButton";
import "@fontsource/henny-penny";
import "../../../styles/custom.css";
import UserProfile from "../../user/existing/buttons/UserProfile";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
const TopBar = (props) => {
  const [admin, setAdmin] = useState(
    JSON.parse(window.sessionStorage.getItem("admin")) || false
  );
  const [existing, setExisting] = useState(
    JSON.parse(window.sessionStorage.getItem("existing")) || false
  );
  const [error, setError] = useState(false);
  const [values, setValues] = useState();
  const history = useHistory();
  const guestClick = () => {
    axios
      .post("http://localhost:8081/auth/login", values)
      .then((result) => {
        console.log("result", result);
        if (result.data.message === "Success") {
          window.sessionStorage.setItem("token", result.data.token);
          props.onSignIn();
          setExisting(true);
          setAdmin(false);
          handleClose();
        }
        //else error alert incorrect credentials
        else {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      })
      .catch((err) => console.log(err));

    // props.onSignIn();
  };

  function checkUserData() {
    const flag = JSON.parse(window.sessionStorage.getItem("existing"));
    const flag2 = JSON.parse(window.sessionStorage.getItem("admin"));
    console.log("calleddd listener");
    setExisting(flag);
    setAdmin(flag2);
  }
  useEffect(() => {
    window.addEventListener("storage", checkUserData);

    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);
  const logOutClick = () => {
    setExisting(false);
    setAdmin(false);
    props.onSignOut();
    history.push("/");
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onChange = async (e, name) => {
    if (e) {
      try {
        console.log(e);
        if (e.target) {
          await setValues({ ...values, [e.target.name]: e.target.value });
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
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      variant="dark"
      style={{ backgroundColor: "#5f2daf", color: "white" }}
      className="container-fluid"
    >
      <Container>
        <Navbar.Brand
          to="/"
          style={{
            fontSize: "21pt",
            fontFamily: "Henny Penny",
          }}
        >
          <img
            src={logo}
            width="65"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
            style={{ marginRight: "3%" }}
          />
          Cloud 9
        </Navbar.Brand>
        <Container style={{ paddingRight: 0 }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {admin && (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Link
                  to="/schedule"
                  style={{
                    color: "white",
                    alignSelf: "center",
                    marginRight: "15px",
                  }}
                  className="link-decoration"
                  exact
                >
                  View Schedule
                </Link>
                <Link
                  to="/addFlight"
                  style={{ color: "white", alignSelf: "center" }}
                  className="link-decoration"
                  exact
                >
                  Add a New Flight
                </Link>
                <ProfileButton />
              </Nav>
            </Navbar.Collapse>
          )}
          {!existing && !admin && (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Link
                  to="/"
                  style={{
                    color: "white",
                    alignSelf: "center",
                  }}
                  className="link-decoration"
                  exact
                >
                  Book a Flight
                </Link>
                {/* <Nav.Link href="/user"> */}
                <Button
                  onClick={handleClickOpen}
                  variant="contained"
                  style={{ marginLeft: "30px" }}
                  sx={{
                    color: "#7400b8",
                    backgroundColor: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#e9e9e9",
                      color: "#7400b8",
                    },
                  }}
                >
                  {" "}
                  Sign In{" "}
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>SIGN IN</DialogTitle>
                  <DialogContent>
                    {error && (
                      <Alert severity="error">Invalid Credentials.</Alert>
                    )}
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Address"
                      type="email"
                      name="email"
                      fullWidth
                      variant="standard"
                      onChange={onChange}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Password"
                      name="password"
                      type="password"
                      fullWidth
                      variant="standard"
                      onChange={onChange}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} variant="outlined">
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        guestClick();
                      }}
                      variant="contained"
                      color="primary"
                    >
                      Sign in
                    </Button>
                  </DialogActions>
                  <DialogContent>
                    Don't have an account?{" "}
                    <Link to="/signup" onClick={handleClose}>
                      Sign up
                    </Link>
                  </DialogContent>
                </Dialog>
              </Nav>
            </Navbar.Collapse>
          )}
          {existing && (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Link
                  to="/"
                  style={{
                    color: "white",
                    alignSelf: "center",
                    marginRight: "15px",
                  }}
                  className="link-decoration"
                  exact
                >
                  Book a Flight
                </Link>
                <Link
                  to="/reservations"
                  style={{ color: "white", alignSelf: "center" }}
                  className="link-decoration"
                  exact
                >
                  My Bookings
                </Link>
                <UserProfile logOutClick={logOutClick} />
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Container>
    </Navbar>
  );
};

export default TopBar;
