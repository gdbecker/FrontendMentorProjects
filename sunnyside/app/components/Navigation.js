'use client';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../../public/logo.svg';

function Navigation() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   import ('bootstrap/dist/js/bootstrap.bundle');
  //   import ('bootstrap/dist/js/bootstrap.min.js');
  // }, [])

  // if (loading) {
  //   return <></>
  // }

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
      {/* <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light">
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
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-burger"></span>
          </button>

          <div className="collapse navbar-collapse nav-wrapper" id="navbar">
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
      </nav> */}
    </div>
  )
}

export default Navigation;

