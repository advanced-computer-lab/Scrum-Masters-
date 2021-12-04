import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/layout/navigation/TopBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './pages/admin/Schedule';
import FlightCreation from './pages/admin/FlightCreation';
import SelectSeat from './pages/user/signed/SelectSeat';
//import LandingPage from './pages/user/signed/LandingPage';
import yalla from './components/user/AddPassengerInfo';
//import bookTicket from './components/user/ReservationConfirmation';
import Resconfirmation from './components/user/AddPassengerInfo';
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
import viewFlightSummary from './components/user/existing/FlightSummary';
import ResConfirmation from './components/user/AddPassengerInfo';
import PassengerDeets from './components/user/forms/PassengerDeets';




function App() {
  const user = true;
  var test1=Array(4).fill({});
  test1[2]={khara:"wasakha"};
  console.log(test1);
  return (
    <Router>
      <div className='App'>
        <TopBar isUser={user} />
        <Switch>
          <Route exact path={['/', '/schedule']} component={Schedule}></Route>
          <Route exact path='/addFlight' component={FlightCreation}></Route>
          <Route exact path='/selectSeat' component={SelectSeat}></Route>
          <Route exact path='/user' component={BookingPage}></Route>
          <Route exact path='/confirmation' component={viewFlightSummary}></Route>
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
