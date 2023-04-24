import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
