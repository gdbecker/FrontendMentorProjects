'use client';
import React, { useState, useEffect } from'react';
import Image from 'next/image'
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

    </div>
  )
}

export default Home;