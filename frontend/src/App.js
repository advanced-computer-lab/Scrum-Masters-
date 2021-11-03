import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/layout/navigation/TopBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import InsertFlight from "./components/admin/forms/InsertFlight"
import SearchFlight from "./components/admin/forms/SearchFlight"

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <div className="container">
        <InsertFlight />
        </div>
      </div>
    </Router>
  );
}

export default App;
