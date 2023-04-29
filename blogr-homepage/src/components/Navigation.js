import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as ArrowDown } from '../assets/chevron-down.svg';
import { ReactComponent as ArrowUp } from '../assets/chevron-up.svg';

function Navigation() {
  const [selectNavToggle, setSelectNavToggle] = useState(false);
  const [selectProduct, setSelectProduct] = useState(false);
  const [selectCompany, setSelectCompany] = useState(false);
  const [selectContact, setSelectContact] = useState(false);

  const onClick = (e) => {
    setSelectNavToggle(!selectNavToggle);
  }

  const onProductClick = (e) => {
    setSelectProduct(!selectProduct);
  }

  const onCompanyClick = (e) => {
    setSelectCompany(!selectCompany);
  }

  const onContactClick = (e) => {
    setSelectContact(!selectContact);
  }

  var navToggler = selectNavToggle ? 'navbar-toggler-icon navbar-x' : 'navbar-toggler-icon navbar-burger';
  var product = selectProduct ? <span>Product  <ArrowUp></ArrowUp></span> : <span>Product  <ArrowDown></ArrowDown></span>;
  var company = selectCompany ? <span>Company  <ArrowUp></ArrowUp></span> : <span>Company  <ArrowDown></ArrowDown></span>;
  var contact = selectContact ? <span>Contact  <ArrowUp></ArrowUp></span> : <span>Contact  <ArrowDown></ArrowDown></span>;

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
                    title={product}
                    id="dropdown"
                    onClick={e => onProductClick(e)}
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
                    title={company}
                    id="dropdown"
                    onClick={e => onCompanyClick(e)}
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
                    title={contact}
                    id="dropdown"
                    onClick={e => onContactClick(e)}
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