import React from 'react';

import Navigation from '../components/Navigation';

function LandingPage() {
  return (
    <div id="landing-page">
      <div className="row section-1">
        <Navigation></Navigation>

        <div className="row mt-4">
          <h1 className="section-1-header">A modern publishing platform</h1>
        </div>

        <div className="row mt-2">
          <p className="section-1-text">Grow your audience and build your online brand</p>
        </div>

        <div className="row mt-4 button-row">
          <button className="start-button" type="button">Start for Free</button>
          <button className="learn-button" type="button">Learn More</button>
        </div>
        

      </div>
      

    </div>
  )
}

export default LandingPage