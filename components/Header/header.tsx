import React, { Component } from 'react';
import './header.css';

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
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
