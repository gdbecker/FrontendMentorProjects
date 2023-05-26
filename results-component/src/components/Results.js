import React, { useState, useEffect } from 'react';
import dataFile from '../data/data.json';

function Results() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setData(dataFile);

      var sum = 0;
      var count = 0;
      for (var i = 0; i < dataFile.length; i++) {
        sum += dataFile[i]["score"];
        count += 1;
      }

      var ave = Math.round(sum / count);
      setScore(ave);

      setIsLoading(false);
    };

    fetchData();
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
                  <h1 className="results-number-1">{score}</h1>
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
                      <h2 className={`section-2-label ${d.category}-label`}><img src={d.icon} alt="icon" className="icon"></img>{d.category}</h2>
                    </div>
                    <div className="col">
                      <h2 className="section-2-results">{d.score} <span className="section-2-results-denominator">/ 100</span></h2>
                    </div>
                  </div>
                ))}
  
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