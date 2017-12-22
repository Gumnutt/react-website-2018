import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
        <div className="">
          Logo
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
