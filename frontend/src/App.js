<<<<<<< HEAD
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/layout/navigation/TopBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './pages/admin/Schedule';
import FlightCreation from './pages/admin/FlightCreation';
=======
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/layout/navigation/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schedule from "./pages/admin/Schedule";
import FlightCreation from "./pages/admin/FlightCreation";
import SelectSeat from "./pages/user/signed/SelectSeat";
>>>>>>> 9f1ceec09554e0efb323b08512bbd1ebe19a0c14

function App() {
  return (
    <Router>
      <div className='App'>
        <TopBar />
        <Switch>
<<<<<<< HEAD
          <Route exact path={['/', '/schedule']} component={Schedule}></Route>
          <Route exact path='/addFlight' component={FlightCreation}></Route>
=======
          <Route exact path={["/", "/schedule"]} component={Schedule}></Route>
          <Route exact path="/addFlight" component={FlightCreation}></Route>
          <Route exact path="/selectSeat" component={SelectSeat}></Route>
>>>>>>> 9f1ceec09554e0efb323b08512bbd1ebe19a0c14
        </Switch>
      </div>
    </Router>
  );
}

export default App;
