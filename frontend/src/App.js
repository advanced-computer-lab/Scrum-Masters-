<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/layout/navigation/TopBar";
import { BrowserRouter as Router } from "react-router-dom";

=======
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/layout/navigation/TopBar';
import { BrowserRouter as Router } from 'react-router-dom';
import ViewFlights from './components/admin/ViewFlights';
import { Container } from 'react-bootstrap';
>>>>>>> ahmed

function App() {
  return (
    <Router>
      <div className='App'>
        <TopBar />
<<<<<<< HEAD
        <div className="container">
        </div>
=======
        <Container>
          <ViewFlights />
        </Container>
>>>>>>> ahmed
      </div>
    </Router>
  );
}

export default App;
