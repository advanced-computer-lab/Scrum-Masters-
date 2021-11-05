import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/layout/navigation/TopBar";
import { BrowserRouter as Router } from "react-router-dom";
import InsertFlight from "./components/admin/forms/InsertFlight";
import SearchFlight from "./components/admin/forms/SearchFlight";
import ViewFlights from "./components/admin/ViewFlights";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <div className="container">
          <ViewFlights />
        </div>
      </div>
    </Router>
  );
}

export default App;
