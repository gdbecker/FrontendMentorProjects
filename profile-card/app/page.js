'use client';
import React from'react';
import { useState, useEffect } from'react';
import LoadingPage from './loading';
import ProfileCard from './components/ProfileCard';

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
          <div className="col-4"></div>
          <div className="col-4">
            <ProfileCard />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  )
}

export default Home;
