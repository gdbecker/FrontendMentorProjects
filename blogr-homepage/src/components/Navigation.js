import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { ReactComponent as Logo } from '../assets/logo.svg';

function Navigation() {
  return (
    <div id="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><h1 className="logo"><Logo></Logo></h1></a>

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
            <ul className="navbar-nav ms-left">
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    Product
                    
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li>
                <button className="learn-button" type="button">Login</button>
              </li>
              <li>
                <button className="start-button" type="button">Sign Up</button>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;