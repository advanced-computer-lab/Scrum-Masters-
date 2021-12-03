import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/layout/navigation/TopBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './pages/admin/Schedule';
import FlightCreation from './pages/admin/FlightCreation';
import SelectSeat from './pages/user/signed/SelectSeat';
import LandingPage from './pages/user/signed/LandingPage';
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

function App() {
  const user = true;
  return (
    <Router>
      <div className="App">
        <TopBar isUser={user} />
        <Switch>
          <Route exact path={['/', '/schedule']} component={Schedule}></Route>
          <Route exact path='/addFlight' component={FlightCreation}></Route>
          <Route exact path='/selectSeat' component={SelectSeat}></Route>
          <Route exact path='/user' component={LandingPage}></Route>
          <Route exact path='/confirmation' component={BookTicket}></Route>
          <Route exact path={["/", "/schedule"]} component={Schedule}></Route>
          <Route exact path="/addFlight" component={FlightCreation}></Route>
        </Switch>
        {user && (
          <Switch>
            <Route exact path="/selectSeat" component={SelectSeat}></Route>
            <Route exact path="/user" component={LandingPage}></Route>
            <Route exact path="/itenirary" component={Itenirary}></Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
