'use client';
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'next/image';
import Logo from '../../public/logo.svg';

function Navbar() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // import ('bootstrap/dist/js/bootstrap.bundle');
    // import ('bootstrap/dist/js/bootstrap.min.js');
  }, []);

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
      </nav>
    </div>
  )
}

export default Navbar;

