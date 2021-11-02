import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/layout/navigation/TopBar";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <div className="container">
        </div>
      </div>
    </Router>
  );
}

export default App;
