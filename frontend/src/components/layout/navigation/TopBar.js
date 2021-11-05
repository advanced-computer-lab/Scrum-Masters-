import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import logo from "../../../images/logo-white.png";
import ProfileButton from "../../admin/buttons/ProfileButton";
import "@fontsource/henny-penny";
import "../../../Styles/custom.css";
const TopBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      variant="dark"
      style={{ backgroundColor: "#7400b8", color: "white" }}
      className="container-fluid"
    >
      <Container>
        <Navbar.Brand
          href="#"
          style={{
            // marginLeft: "2%",
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
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/schedule" style={{ color: "white" }}>
                View Schedule
              </Nav.Link>
              <Nav.Link href="/addFlight" style={{ color: "white" }}>
                Add a New Flight
              </Nav.Link>
              <ProfileButton />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
};

export default TopBar;
