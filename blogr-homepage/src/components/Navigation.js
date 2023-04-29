import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ReactComponent as Logo } from '../assets/logo.svg';

function Navigation() {
  const [selected, setSelected] = useState(false);

  const onClick = (e) => {
    setSelected(!selected);
  }

  var navToggler = selected ? 'navbar-toggler-icon navbar-x' : 'navbar-toggler-icon navbar-burger';

  return (
    <div id="navigation">
      <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light">
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
            onClick={e => onClick(e)}
          >
            <span className={navToggler}></span>
          </button>

          <div className="collapse navbar-collapse nav-wrapper" id="navbar">
            <ul className="navbar-nav ms-left">
              <li>
                  <DropdownButton
                    key="down-centered"
                    drop="down-centered"
                    title="Product"
                    id="dropdown"
                  >
                    <Dropdown.Item href="/">Overview</Dropdown.Item>
                    <Dropdown.Item href="/">Pricing</Dropdown.Item>
                    <Dropdown.Item href="/">Marketplace</Dropdown.Item>
                    <Dropdown.Item href="/">Features</Dropdown.Item>
                    <Dropdown.Item href="/">Integrations</Dropdown.Item>
                  </DropdownButton>
              </li>
              <li>
                  <DropdownButton
                    key="down-centered"
                    drop="down-centered"
                    title="Company"
                    id="dropdown"
                  >
                    <Dropdown.Item href="/">About</Dropdown.Item>
                    <Dropdown.Item href="/">Team</Dropdown.Item>
                    <Dropdown.Item href="/">Blog</Dropdown.Item>
                    <Dropdown.Item href="/">Careers</Dropdown.Item>
                  </DropdownButton>
              </li>
              <li>
                  <DropdownButton
                    key="down-centered"
                    drop="down-centered"
                    title="Connect"
                    id="dropdown"
                  >
                    <Dropdown.Item href="/">Contact</Dropdown.Item>
                    <Dropdown.Item href="/">Newsletter</Dropdown.Item>
                    <Dropdown.Item href="/">LinkedIn</Dropdown.Item>
                  </DropdownButton>
              </li>
            </ul>

            <hr className="navDivider"></hr>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="login-button" type="button">Login</button>
              </li>
              <li className="nav-item">
                <button className="signup-button" type="button">Sign Up</button>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;