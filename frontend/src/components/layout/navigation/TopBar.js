import { React, useState } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import logo from "../../../images/logo-white.png";
import ProfileButton from "../../admin/buttons/ProfileButton";
import "@fontsource/henny-penny";
import "../../../styles/custom.css";
import UserProfile from "../../user/existing/buttons/UserProfile";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
const TopBar = (props) => {
  const [admin, setAdmin] = useState(props.admin);
  const [existing, setExisting] = useState(props.existing);
  const [values, setValues] = useState();
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
        }
        //else error alert incorrect credentials
      })
      .catch((err) => console.log(err));

    // props.onSignIn();
  };
  const logOutClick = () => {
    setExisting(false);
    setAdmin(false);
    props.onSignOut();
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
          href="/"
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
                <Nav.Link href="/schedule" style={{ color: "white" }} exact>
                  View Schedule
                </Nav.Link>
                <Nav.Link href="/addFlight" style={{ color: "white" }} exact>
                  Add a New Flight
                </Nav.Link>
                <ProfileButton />
              </Nav>
            </Navbar.Collapse>
          )}
          {!(JSON.parse(window.sessionStorage.getItem('existing'))) && !admin && (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="/search" style={{ color: "white" }} exact>
                  Book a Flight
                </Nav.Link>
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
                        handleClose();
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
          { (JSON.parse(window.sessionStorage.getItem('existing'))) && (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="/" style={{ color: "white" }} exact>
                  Book a Flight
                </Nav.Link>
                <Nav.Link href="/reservations" style={{ color: "white" }} exact>
                  My Bookings
                </Nav.Link>
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
