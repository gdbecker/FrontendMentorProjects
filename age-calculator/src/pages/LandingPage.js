import React from 'react';
import AgeCalculator from '../components/AgeCalculator';

function LandingPage() {
    return (
        <div id="landing-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <AgeCalculator></AgeCalculator>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;