'use client';
import React, { useState, useEffect } from'react';
import Image from 'next/image'
import LoadingPage from './loading';
import IconArrow from '../public/icon-arrow-down.svg';

function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // import ('bootstrap/dist/js/bootstrap');
    // import ('bootstrap/dist/js/bootstrap.bundle');
    import ('bootstrap/dist/js/bootstrap.min.js');
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div id="home-page">
      <div className="row">
        <div className="section-header">
          <div className="row mt-5">
            <h1 className="section-header-title">WE ARE CREATIVES</h1>
          </div>
          <div className="row mt-5">
            <Image
              src={IconArrow}
              alt="arrow-down"
              width={30}
              height={100}
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home;