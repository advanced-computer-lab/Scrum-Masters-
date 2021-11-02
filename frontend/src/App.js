import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './Components/layout/navigation/TopBar';
import { BrowserRouter as Router } from 'react-router-dom';
import ViewFlights from './Components/admin/ViewFlights';

function App() {
  return (
    <Router>
      <div className='App'>
        <TopBar />
        <div className='container'>
          <ViewFlights />
        </div>
      </div>
    </Router>
  );
}

export default App;
