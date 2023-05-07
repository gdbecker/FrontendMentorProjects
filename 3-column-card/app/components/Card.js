import React from 'react'
import Image from 'next/image';
import SedansIcon from  '../../public/icon-sedans.svg';
import SuvsIcon from  '../../public/icon-suvs.svg';
import LuxuryIcon from  '../../public/icon-luxury.svg';

function Card() {
  return (
    <div id="preview-card">
      <div className="row content-row">
        <div className="col-md-4 col-section col-sedans">
          <div className="container g-5">
            <div className="row mt-4">
              <div className="icon-wrapper"> 
                <Image 
                  src={SedansIcon}
                  alt="Sedans Icon"
                  width={45}
                  height={45}           
                />
              </div>
            </div>
            <div className="row mt-4">
              <h1 className="card-title">SEDANS</h1>
            </div>
            <div className="row mt-4">
              <p className="card-text">
                Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
                or on your next road trip.
              </p>
            </div>
            <div className="row mt-5">
              <button type="button" className="card-btn btn-sedans">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-section col-suvs">
          <div className="container g-5">
            <div className="row mt-4">
              <div className="icon-wrapper"> 
                <Image 
                  src={SuvsIcon} 
                  alt="Suvs Icon"
                  width={45}
                  height={45}           
                />
              </div>
            </div>
            <div className="row mt-4">
              <h1 className="card-title">SUVS</h1>
            </div>
            <div className="row mt-4">
              <p className="card-text">
                Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
                and off-road adventures.
              </p>
            </div>
            <div className="row mt-5">
              <button type="button" className="card-btn btn-suvs">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-section col-luxury">
          <div className="container g-5">
            <div className="row mt-4">
              <div className="icon-wrapper"> 
                <Image 
                  src={LuxuryIcon} 
                  alt="Luxury Icon"
                  width={45}
                  height={45}           
                />
              </div>
            </div>
            <div className="row mt-4">
              <h1 className="card-title">LUXURY</h1>
            </div>
            <div className="row mt-4">
              <p className="card-text">
                Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
                rental and arrive in style.
              </p>
            </div>
            <div className="row mt-5">
              <button type="button" className="card-btn btn-luxury">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
