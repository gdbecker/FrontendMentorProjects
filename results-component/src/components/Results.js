import React, { useState, useEffect } from 'react';
import { ReactComponent as Reaction } from '../assets/icon-reaction.svg';
import { ReactComponent as Memory } from '../assets/icon-memory.svg';
import { ReactComponent as Verbal } from '../assets/icon-verbal.svg';
import { ReactComponent as Visual } from '../assets/icon-visual.svg';

import dataFile from '../data/data.json';

function Results() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      setData(dataFile);
      setIsLoading(false);
    };

    console.log(dataFile);
    dataFetch();
  }, []);

  if (isLoading == false) {
    return (
      <div id="results">
        <div className="container g-4">
          <div className="row">
            <div className="col-lg-6 section-1">
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
                    You scored higher than 65% of the people who have taken these tests.
                  </p>
                </div>
                <div className="col-1"></div>
              </div>
              
            </div>
            <div className="col-lg-6 section-2">
              <div className="container">
                <div className="row mt-1">
                  <h1 className="section-2-header">Summary</h1>
                </div>
  
                {data.map((d) => (
                  <div className={`row mt-3 row-result row-${d.category}`}>
                    <div className="col">
                      <h3 className={`section-2-label ${d.category}-label`}><Reaction className="icon"></Reaction>Reaction</h3>
                    </div>
                    <div className="col">
                      <h3 className="section-2-results">{d.score} <span className="section-2-results-denominator">/ 100</span></h3>
                    </div>
                  </div>
                ))}
  
                
  
                <div className="row mt-3 row-result row-memory">
                  <div className="col">
                    <h3 className="section-2-label memory-label"><Memory className="icon"></Memory>Memory</h3>
                  </div>
                  <div className="col">
                    <h3 className="section-2-results">92 <span className="section-2-results-denominator">/ 100</span></h3>
                  </div>
                </div>
  
                <div className="row mt-3 row-result row-verbal">
                  <div className="col">
                    <h3 className="section-2-label verbal-label"><Verbal className="icon"></Verbal>Verbal</h3>
                  </div>
                  <div className="col">
                    <h3 className="section-2-results">61 <span className="section-2-results-denominator">/ 100</span></h3>
                  </div>
                </div>
  
                <div className="row mt-3 row-result row-visual">
                  <div className="col">
                    <h3 className="section-2-label visual-label"><Visual className="icon"></Visual>Visual</h3>
                  </div>
                  <div className="col">
                    <h3 className="section-2-results">72 <span className="section-2-results-denominator">/ 100</span></h3>
                  </div>
                </div>
  
                <div className="row mt-1 row-button">
                  <button type="button" className="continue-button">Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Results;