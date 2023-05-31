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
    <main id="home-page-behind">
      <div id="home-page">
        <ProfileCard />
      </div>
    </main>
  )
}

export default Home;
