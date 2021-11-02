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
const TopBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      sticky='top'
      variant='dark'
      style={{ backgroundColor: '#7400b8', color: 'white' }}
    >
      <Navbar.Brand
        href='#home'
        style={{
          marginLeft: '2%',
          fontSize: '18pt',
          fontFamily: 'Alegreya',
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
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#pricing' style={{ color: 'white' }}>
              View Schedule
            </Nav.Link>
            <Nav.Link href='#features' style={{ color: 'white' }}>
              Add a New Flight
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>More deets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
