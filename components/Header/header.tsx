import React, { Component } from 'react';
import './header.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faBars, faTimes);

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <div id='nav'>
          <a href='./assets'>Logo</a>
          <div>
            <ul id="navbar" className={this.state.clicked ? "active" : ""}>
              <li><a className='active' href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div id='mobile' onClick={this.handleClick}>
            <FontAwesomeIcon
              icon={this.state.clicked ? 'times' : 'bars'}
              id="bar"
              style={{
                fontSize: '24px', 
                color: 'inherit', 
                marginRight: '10px',
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
