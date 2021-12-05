import { React, useState } from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { Button } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-white.png';
import ProfileButton from '../../admin/buttons/ProfileButton';
import '@fontsource/henny-penny';
import '../../../styles/custom.css';
import UserProfile from '../../user/existing/buttons/UserProfile';
const TopBar = (props) => {
  const [admin, setAdmin] = useState(props.admin);
  const [existing, setExisting] = useState(props.existing);
  const guestClick = () => {
    setExisting(true);
    setAdmin(false);
    props.onSignIn();
  };
  const logOutClick = () => {
    setExisting(false);
    setAdmin(false);
    props.onSignOut();
  };
  const adminClick = () => {
    setAdmin(true);
    setExisting(false);
    props.onAdmin();
  };
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      sticky='top'
      variant='dark'
      style={{ backgroundColor: '#5f2daf', color: 'white' }}
      className='container-fluid'
    >
      <Container>
        <Navbar.Brand
          href='/'
          style={{
            fontSize: '21pt',
            fontFamily: 'Henny Penny',
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
        <Container style={{ paddingRight: 0 }}>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          {admin && (
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'></Nav>
              <Nav>
                <Nav.Link href='/schedule' style={{ color: 'white' }} exact>
                  View Schedule
                </Nav.Link>
                <Nav.Link href='/addFlight' style={{ color: 'white' }} exact>
                  Add a New Flight
                </Nav.Link>
                <ProfileButton />
              </Nav>
            </Navbar.Collapse>
          )}
          {!existing && !admin && (
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'></Nav>
              <Nav>
                <Nav.Link href='/search' style={{ color: 'white' }} exact>
                  Book a Flight
                </Nav.Link>
                {/* <Nav.Link href="/user"> */}
                <Button
                  variant='contained'
                  style={{ marginLeft: '30px' }}
                  sx={{
                    color: '#7400b8',
                    backgroundColor: '#ffffff',
                    '&:hover': {
                      backgroundColor: '#e9e9e9',
                      color: '#7400b8',
                    },
                  }}
                  onClick={guestClick}
                  href='/search'
                >
                  {' '}
                  Sign In{' '}
                </Button>
                {/* <Button
                  variant='contained'
                  style={{ marginLeft: '30px' }}
                  sx={{
                    color: '#7400b8',
                    backgroundColor: '#ffffff',
                    '&:hover': {
                      backgroundColor: '#e9e9e9',
                      color: '#7400b8',
                    },
                  }}
                  onClick={adminClick}
                  href='/'
                >
                  {' '}
                  Admin Sign In{' '}
                </Button> */}
                {/* </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          )}
          {existing && (
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'></Nav>
              <Nav>
                <Nav.Link href='/search' style={{ color: 'white' }} exact>
                  Book a Flight
                </Nav.Link>
                <Nav.Link href='/reservation' style={{ color: 'white' }} exact>
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
