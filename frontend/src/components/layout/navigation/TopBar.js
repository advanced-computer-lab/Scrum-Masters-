<<<<<<< HEAD
import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import logo from "../../../images/logo-white.png";
import ProfileButton from "../../admin/buttons/ProfileButton";
// import "@fontsource/alegreya";
// import "@fontsource/ceviche-one";
import "@fontsource/henny-penny";
import "../../../styles/custom.css";
=======
import React from 'react';
import {
  Nav,
  Offcanvas,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Navbar,
} from 'react-bootstrap';
import logo from '../../../images/logo-white.png';
import '@fontsource/alegreya';
>>>>>>> ahmed
const TopBar = () => {
  return (
    <Navbar
      collapseOnSelect
<<<<<<< HEAD
      expand="lg"
      sticky="top"
      variant="dark"
      style={{ backgroundColor: "#7400b8", color: "white" }}
      className="container-fluid"
=======
      expand='lg'
      sticky='top'
      variant='dark'
      style={{ backgroundColor: '#7400b8', color: 'white' }}
>>>>>>> ahmed
    >
      <Navbar.Brand
        href='#home'
        style={{
<<<<<<< HEAD
          // marginLeft: "2%",
          fontSize: "21pt",
          fontFamily: "Henny Penny",
=======
          marginLeft: '2%',
          fontSize: '18pt',
          fontFamily: 'Alegreya',
>>>>>>> ahmed
        }}
      >
        <img
          src={logo}
          width='65'
          height='40'
          className='d-inline-block align-top'
          alt='logo'
          style={{ marginRight: '3%' }}
        />
        Cloud 9
      </Navbar.Brand>
      <Container>
<<<<<<< HEAD
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              href="#pricing"
              style={{ color: "white" }}
            >
=======
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#pricing' style={{ color: 'white' }}>
>>>>>>> ahmed
              View Schedule
            </Nav.Link>
            <Nav.Link href='#features' style={{ color: 'white' }}>
              Add a New Flight
            </Nav.Link>
<<<<<<< HEAD
            <ProfileButton />
=======
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>More deets</Nav.Link>
>>>>>>> ahmed
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
