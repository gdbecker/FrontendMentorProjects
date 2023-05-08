'use client';
import React from'react';
import { useState, useEffect } from'react';
import Image from 'next/image';
import LoadingPage from './loading';

function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.min.js');
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div id="home-page">
      <div className="container">
        <div className="row">
          <div className="section-intro-pic"></div>
        </div>
        <div className="row mt-3">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="row mt-3">
              <h1 className="section-intro-header">
                All your files in one secure location, accessible anywhere.
              </h1>
            </div>
            <div className="row mt-3">
              <div className="col-2"></div>
              <div className="col-8">
                <p className="section-intro-text">
                  Fylo stores all your most important files in one secure location. Access them wherever 
                  you need, share and collaborate with friends family, and co-workers.
                </p>
              </div>
              <div className="col-2"></div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <button type="button" className="section-intro-button">Get Started</button>
              </div>
              
            </div>
          </div>
          <div className="col-2"></div>
         
        </div>
        </div>
     </div>
  )
}

export default Home;
