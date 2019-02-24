import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="mainNav">
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
}


export default Navbar
