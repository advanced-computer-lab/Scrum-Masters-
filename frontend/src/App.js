import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/layout/navigation/TopBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './pages/admin/Schedule';
import FlightCreation from './pages/admin/FlightCreation';
import SelectSeat from './pages/user/signed/SelectSeat';
//import LandingPage from './pages/user/signed/LandingPage';
import yalla from './components/user/ReservationConfirmation';
import bookTicket from './components/user/ReservationConfirmation';
import BookTicket from './components/user/ReservationConfirmation';
import Itenirary from './pages/user/signed/viewItenirary';
/*import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/layout/navigation/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schedule from "./pages/admin/Schedule";
import FlightCreation from "./pages/admin/FlightCreation";
import SelectSeat from "./pages/user/signed/SelectSeat";
import LandingPage from "./pages/user/signed/LandingPage";*/
import BookingPage from './pages/user/signed/BookingPage';
import FlightReservation from './components/user/FlightReservation';
import SearchingPage from './pages/user/signed/SearchingPage';
import hi from './pages/user/signed/hi';

function App() {
  const user = true;
  return (
    <Router>
      <div className='App'>
        <TopBar isUser={user} />
        <Switch>
          <Route exact path={['/', '/schedule']} component={Schedule}></Route>
          <Route exact path='/addFlight' component={FlightCreation}></Route>
          <Route exact path='/selectSeat' component={SelectSeat}></Route>
          <Route exact path='/user' component={BookingPage}></Route>
          <Route exact path='/confirmation' component={BookTicket}></Route>
          <Route exact path={["/", "/schedule"]} component={Schedule}></Route>
          <Route exact path="/addFlight" component={FlightCreation}></Route>
        </Switch>
        {user && (
          <Switch>
         
          
            <Route exact path="/itenirary" component={Itenirary}></Route>
        
            <Route exact path='/selectSeat' component={SelectSeat}></Route>
            <Route exact path='/user' component={BookingPage}></Route>
            <Route exact path='/search' component={SearchingPage}></Route>
            <Route exact path='/hi' component={hi}></Route>
            
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
