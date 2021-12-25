import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/layout/navigation/TopBar";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schedule from "./pages/admin/Schedule";
import FlightCreation from "./pages/admin/FlightCreation";
import SelectSeat from "./pages/user/signed/SelectSeat";
import BookingPage from "./pages/user/signed/BookingPage";
import SearchingPage from "./pages/user/signed/SearchingPage";
import Account from "./pages/user/signed/Account";
import ViewFlightSummary from "./components/user/existing/FlightSummary";
import Itinerary from "./pages/user/signed/viewItinerary";
import Reservations from "./components/user/existing/Reservations";
import { Container } from "react-bootstrap";
import SignUpForm from "./components/user/forms/Signup";
import PaymentComponent from "./components/user/forms/PaymentComponent";

import SendingMail from "./components/user/forms/SendingMail";
import PassengerDeets from "./components/user/forms/PassengerDeets";
import test from "./test";

function App() {
  const [admin, setAdmin] = useState(
    JSON.parse(window.sessionStorage.getItem("admin")) || false
  );
  const [existing, setExisting] = useState(
    JSON.parse(window.sessionStorage.getItem("existing")) || false
  );
  const onSignIn = () => {
    console.log("sign in");
    window.sessionStorage.setItem("existing", true);
    window.sessionStorage.setItem("admin", false);
  };
  const onSignOut = () => {
    window.sessionStorage.setItem("existing", false);
    window.sessionStorage.setItem("admin", false);
    window.sessionStorage.removeItem("token");
    console.log("sign out");
    setAdmin(false);
    setExisting(false);
  };
  const onAdmin = () => {
    window.sessionStorage.setItem("existing", false);
    window.sessionStorage.setItem("admin", true);
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
          onAdmin={onAdmin}
        />
        <Switch>
          <Route exact path={"/schedule"} component={Schedule}></Route>
          <Route exact path="/addFlight" component={FlightCreation}></Route>
          <Route exact path="/user" component={BookingPage}></Route>
          <Route exact path="/selectSeat" component={SelectSeat}></Route>
          <Route exact path="/account" component={Account}></Route>
          <Route exact path="/" component={SearchingPage}></Route>
          <Route exact path="/reservations" component={Reservations}></Route>
          <Route exact path="/signup" component={SignUpForm}></Route>
          <Route exact path="/test" component={test}></Route>

          <Route exact path="/pass" component={PassengerDeets}>
            <Container>
              <PassengerDeets />
            </Container>
          </Route>

          <Route
            exact
            path="/confirmation"
            component={ViewFlightSummary}
          ></Route>
          <Route exact path="/schedule" component={Schedule}></Route>
          <Route exact path="/addFlight" component={FlightCreation}></Route>
          <Route exact path="/itinerary" component={Itinerary}></Route>

          <Route exact path="/sendmail" component={SendingMail}>
            {" "}
          </Route>
          <Route exact path="/payment" component={PaymentComponent}></Route>
        </Switch>

        {!admin && !existing && (
          <Container>
            <footer style={{ float: "right" }}></footer>
          </Container>
        )}
      </div>
    </Router>
  );
}

export default App;
