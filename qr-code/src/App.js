import './App.css'

import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
