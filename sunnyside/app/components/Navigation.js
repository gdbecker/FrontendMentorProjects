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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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

