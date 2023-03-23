 import './App.css';
 import Home from './services/Home.jsx'
 import Bookings from './components/Bookings.jsx'
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewFlight from './components/NewFlight';

 const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;