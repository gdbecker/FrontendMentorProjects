import React from 'react';
import Results from '../components/Results';

function LandingPage() {
  return (
    <div id="landing-page">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Results></Results>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;