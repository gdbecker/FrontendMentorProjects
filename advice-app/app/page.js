'use client';
import React from 'react';
import { useState, useEffect } from'react';
import LoadingPage from './loading';
import Advice from './components/Advice';

function Home() {

  const [data, setData] = useState({
    id: '',
    advice: ''
  });

  const [loading, setLoading] = useState(true);

  const fetchNewData = async () => {
    const response = await fetch(
      'https://api.adviceslip.com/advice', {
        headers: {
          "Accept": "application/json"
        }
      }
    );  
    const data = await response.json();
    console.log(data);

    setData({
      id: data.slip.id,
      advice: data.slip.advice
    });

    setLoading(false)
  }

  useEffect(() => {
    fetchNewData();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen bg-darkBlue font-manropeExtraBold">
      <div className="flex flex-col text-center items-center justify-center px-4 py-28">
        <Advice 
          data={data}
          fetchNewData={fetchNewData}
        />
      </div>
    </div>
  )
}

export default Home;
