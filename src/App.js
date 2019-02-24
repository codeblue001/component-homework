import React, { Component } from 'react';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Main from './components/Main.js';
import Resume from './components/Resume.js'
import Projects from './components/Projects'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
