import React from 'react';

function NFTCard() {
  return (
    <div id="nft">
      <div className="container">
        <div className="row g-1">
          <div className="nft-box-wrapper">
            <a href="/" className="nft-box-link"><div className="nft-box"></div></a>
          </div>
        </div>
        <div className="row g-1 mt-3">
          <a href="/"><h1 className="nft-header">Equilibrium #3429</h1></a>
        </div>
        <div className="row g-1">
          <p className="nft-text">Our Equilibrium collection promotes balance and calm.</p>
        </div>
        <div className="row g-1">
          <div className="col nft-price-col">
            <p className='nft-price-text'><img src='./assets/images/icon-ethereum.svg' className="nft-price-icon"></img>0.041 ETH</p>
          </div>
          <div className='col time-col'>
            <p className='time-text'><img src='./assets/images/icon-clock.svg' className="time-icon"></img>3 days left</p>
          </div>
        </div>
        <div className="row g-1">
          <div className="col">
            <hr className="divider"></hr>
          </div>          
        </div>
        <div className="row">
          <div className="col-1 avatar-wrapper"></div>
          <div className="col">
            <p className="nft-text">Creation of <a href="/">Jules Wyvern</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTCard;