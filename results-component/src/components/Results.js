import React from 'react';
import { ReactComponent as Reaction } from '../assets/icon-reaction.svg';
import { ReactComponent as Memory } from '../assets/icon-memory.svg';
import { ReactComponent as Verbal } from '../assets/icon-verbal.svg';
import { ReactComponent as Visual } from '../assets/icon-visual.svg';

function Results() {
  return (
    <div id="results">
      <div className="container g-2">
        <div className="row">
          <div className="col-md-6 section-1">
            <div className="row mt-2">
              <h1 className="section-1-header-1">Your Result</h1>
            </div>
            <div className="results-circle-wrapper">
              <div className="results-circle">
                <h1 className="results-number-1">76</h1>
                <p  className="results-number-2">of 100</p>
              </div>
            </div>
            <div className="row mt-2">
              <h1 className="section-1-header-2">Great</h1>
            </div>
            <div className="row mt-1">
              <div className="col-1"></div>
              <div className="col-10">
                <p className="section-1-text">
                  You scored higher than 65% of the people who have taken their tests.
                </p>
              </div>
              <div className="col-1"></div>
            </div>
            
          </div>
          <div className="col-md-6 section-2">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Results;