import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import TopBar from "./components/layout/navigation/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schedule from "./pages/admin/Schedule";
import FlightCreation from "./pages/admin/FlightCreation";
import SelectSeat from "./pages/user/signed/SelectSeat";
import LandingPage from "./pages/user/signed/LandingPage";
import Account from "./pages/user/signed/Account";

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
  }
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
          <Route exact path="/user" component={LandingPage}></Route>
          <Route exact path="/selectSeat" component={SelectSeat}></Route>
          <Route exact path="/account" component={Account}></Route>
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
