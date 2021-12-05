import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/layout/navigation/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schedule from "./pages/admin/Schedule";
import FlightCreation from "./pages/admin/FlightCreation";
import SelectSeat from "./pages/user/signed/SelectSeat";
import Itenirary from "./pages/user/signed/viewItenirary";
import BookingPage from "./pages/user/signed/BookingPage";
import SearchingPage from "./pages/user/signed/SearchingPage";
import viewFlightSummary from "./components/user/existing/FlightSummary";


function App() {
  const user = true;
  var test1 = Array(4).fill({});
  test1[2] = { khara: "wasakha" };
  console.log(test1);
  return (
    <Router>
      <div className="App">
        <TopBar isUser={user} />
        <Switch>
          <Route exact path={["/", "/schedule"]} component={Schedule}></Route>
          <Route exact path="/addFlight" component={FlightCreation}></Route>
          <Route exact path="/selectSeat" component={SelectSeat}></Route>
          <Route exact path="/user" component={BookingPage}></Route>
          <Route
            exact
            path="/confirmation"
            component={viewFlightSummary}
          ></Route>
          <Route exact path={["/", "/schedule"]} component={Schedule}></Route>
          <Route exact path="/addFlight" component={FlightCreation}></Route>
        </Switch>
        {user && (
          <Switch>
            <Route exact path="/itenirary" component={Itenirary}></Route>

            <Route exact path="/selectSeat" component={SelectSeat}></Route>
            <Route exact path="/user" component={BookingPage}></Route>
            <Route exact path="/search" component={SearchingPage}></Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
