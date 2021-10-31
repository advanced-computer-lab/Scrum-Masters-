import logo from '../logo.svg';
import '../Styles/Header.css';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div>
      <Navbar className='color-nav' variant='dark' sticky='top'>
        <Container>
          <Navbar.Brand className='navbarBrand' href='#home'>
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
            HI
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <test />
    </div>
  );
}

export default Header;
