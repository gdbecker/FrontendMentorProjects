import React from 'react';
import Rating from '../components/Rating';

function LandingPage() {
    return (
        <div id="landing-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Rating></Rating>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;