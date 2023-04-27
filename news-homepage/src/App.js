import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import LandingPage from './pages/LandingPage';

import Layout from './hocs/Layout';

function App() {
  return (
    <Layout>
      <div className="App">
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </Layout>
  );
}

export default App;
