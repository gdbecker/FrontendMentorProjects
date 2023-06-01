'use client';
import React from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.svg';

function Navigation() {

  return (
    <div id="navigation">
       <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h1 className="logo">
              <Image
                src={Logo}
                alt="logo"
                width={140}
                height={75}
              />
            </h1>
          </a>
          <button 
            className="navbar-toggler" 
            type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-burger"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="triangle"></div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                  <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Projects</a>
              </li>
              <li className="nav-item">
                <button className="contact-button" type="button">CONTACT</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;

