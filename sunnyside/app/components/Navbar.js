'use client';
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'next/image';
import Logo from '../../public/logo.svg';

function Navbar() {

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.min.js');
  }, []);

  return (
    <div id="navigation">
      <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><h1 className="logo"></h1></a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span ></span>
          </button>

          <div className="collapse navbar-collapse nav-wrapper" id="navbar">
            <ul className="navbar-nav ms-left">
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              
              
            </ul>

            <hr className="navDivider"></hr>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="login-button" type="button">CONTACT</button>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;

