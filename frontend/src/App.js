import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/layout/navigation/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InsertFlight from "./components/admin/forms/InsertFlight";
import SearchFlight from "./components/admin/forms/SearchFlight";
import ViewFlights from "./components/admin/ViewFlights";
import { Container } from "react-bootstrap";
import Schedule from "./pages/admin/Schedule";
import FlightCreation from "./pages/admin/FlightCreation";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Switch>
          <Route exact path="/" component={Schedule}></Route>
          <Route exact path="/schedule" component={Schedule}></Route>
          <Route exact path="/addFlight" component={FlightCreation}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
