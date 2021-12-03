import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/layout/navigation/TopBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './pages/admin/Schedule';
import FlightCreation from './pages/admin/FlightCreation';
import SelectSeat from './pages/user/signed/SelectSeat';
import LandingPage from './pages/user/signed/LandingPage';
import FlightReservation from './components/user/FlightReservation';

function App() {
  return (
    <Router>
      <div className='App'>
        <TopBar />
        <Switch>
          <Route exact path={['/', '/schedule']} component={Schedule}></Route>
          <Route exact path='/addFlight' component={FlightCreation}></Route>
          <Route exact path='/selectSeat' component={SelectSeat}></Route>
          <Route exact path='/user' component={LandingPage}></Route>
          <Route exact path='/flights' component={FlightReservation}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
