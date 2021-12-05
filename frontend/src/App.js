import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/layout/navigation/TopBar";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schedule from "./pages/admin/Schedule";
import FlightCreation from "./pages/admin/FlightCreation";
import SelectSeat from "./pages/user/signed/SelectSeat";
import BookingPage from "./pages/user/signed/BookingPage";
import FlightReservation from "./components/user/FlightReservation";
import SearchingPage from "./pages/user/signed/SearchingPage";
import Account from "./pages/user/signed/Account";
import ViewFlightSummary from "./components/user/existing/FlightSummary";
import Itenerary from "./pages/user/signed/viewItenirary";
import DataGridDemo from "./components/user/existing/Reservations";
//import Reservations from "./components/user/existing/Reservations";
//import Reservation from "../../backend/Models/Reservation";
//import Reservation from "../../backend/Models/Reservation";

function App() {
  const [admin, setAdmin] = useState(
    JSON.parse(window.sessionStorage.getItem("admin")) || false
  );
  const [existing, setExisting] = useState(
    JSON.parse(window.sessionStorage.getItem("existing")) || false
  );
  const onSignIn = () => {
    window.sessionStorage.setItem("existing", true);
    window.sessionStorage.setItem("admin", false);
    console.log(JSON.parse(window.sessionStorage.getItem("admin")));
    console.log(JSON.parse(window.sessionStorage.getItem("existing")));
  };
  const onSignOut = () => {
    window.sessionStorage.setItem("existing", false);
    window.sessionStorage.setItem("admin", false);
  };
  return (
    <Router>
      <div className="App">
        {/* {window.sessionStorage.setItem("existing", false)} */}
        <TopBar
          admin={admin}
          existing={existing}
          onSignIn={onSignIn}
          onSignOut={onSignOut}
        />
        <Switch>
          <Route exact path={["/", "/schedule"]} component={Schedule}></Route>
          <Route exact path="/addFlight" component={FlightCreation}></Route>
          <Route exact path="/user" component={BookingPage}></Route>
          <Route exact path="/selectSeat" component={SelectSeat}></Route>
          <Route exact path="/account" component={Account}></Route>
          <Route exact path="/search" component={SearchingPage}></Route>
          <Route exact path="/reservations" component={DataGridDemo}></Route>
          <Route
            exact
            path="/confirmation"
            component={ViewFlightSummary}
          ></Route>
          <Route exact path="/itenerary" component={Itenerary}></Route>
        </Switch>
        {/* {existing && ( */}
        {/* <Switch> */}
        {/* <Route exact path="/selectSeat" component={SelectSeat}></Route> */}
        {/* </Switch> */}
        {/* )} */}
      </div>
    </Router>
  );
}

export default App;
