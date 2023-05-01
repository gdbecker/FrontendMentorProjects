import React from 'react';
import Notifications from '../components/Notifications';

function LandingPage() {
  return (
    <div id="landing-page">
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <Notifications></Notifications>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;