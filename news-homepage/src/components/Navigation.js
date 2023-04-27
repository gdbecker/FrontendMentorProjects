import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';

function Navigation() {

  return (
    <div id="navigation">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><h4><Logo></Logo></h4></a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/new">New</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/popular'>Popular</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/trending'>Trending</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/categories'>Categories</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;