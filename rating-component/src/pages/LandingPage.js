import React from 'react';
import Rating from '../components/Rating';

function LandingPage() {
  return (
    <div id="landing-page">
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Rating></Rating>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;