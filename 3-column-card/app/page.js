'use client';
import React from'react';
import { useState, useEffect } from'react';
import LoadingPage from './loading';
import Card from './components/Card';

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
    <main id="home-page">
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <Card />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </main>
  )
}

export default Home;
