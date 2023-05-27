import React from 'react'
import Image from 'next/image';
import Logo from '../../public/logo.svg'

function Navbar() {
  return (
    <div id="navigation">
      <nav className="navbar navbar-expand navbar-light navbar-fixed-top mobile-fixed">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h1>
              <Image 
                src={Logo}
                alt="Fylo logo"
                width={145}
                height={70}
                className="navbar-logo"
              />
              Logo
            </h1>
          </a>
          <ul className="nav navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/'>Sign In</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
