import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';

function Navigation() {

  // This was my initial JS solution for changing the navbar buttons but I figured out how to only use HTML and CSS

  // const [clicked, setClicked] = useState(false);

  // const onClick = (e) => {
  //   setClicked(!clicked);
  // }

  // var buttonClass = clicked ? 'navbar-toggler-icon navbar-x' : 'navbar-toggler-icon navbar-burger';

  return (
    <div id="navigation">
      <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top mobile-nofixed">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><h4 className="nav-h4"><Logo />logo</h4></a>
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
        
          <div className="collapse navbar-collapse" id="navbar">
            <button
                className="navbar-toggler pull-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbar"
                aria-controls="navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon navbar-x"></span>
            </button>
            
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