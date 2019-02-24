import React, {Component} from 'react';
// import projects from '../data/projects.json';

class Projects extends Component{
  render(){
    return(
      <section id="projects">
        <header>
        <h2 id="header">My Projects</h2>
        <p>These are some of my projects</p>
        </header>
        <div id="wrapper">
        <div>
          <h1>Project 1</h1>
          <div className=" portfolio-img iron-man"></div>
          <p>If Thanos needs all six, what don’t we just stick this one down the garbage disposal?</p>
        </div>
        <div>
          <h1>Project 2</h1>
          <div className=" portfolio-img phoenix"></div>
          <p>Protecting your reality, douchebag.</p>
        </div>
        <div>
          <h1>Project 3</h1>
          <div className=" portfolio-img storm"></div>
          <p>Broke up, like a band? Like the Beatles? </p>
        </div>
        <div>
          <h1>Project 4</h1>
          <div className=" portfolio-img gambit"></div>
          <p>Bring me Thanos!</p>
        </div>
        </div>
      </section>

    )
  }
}

export default Projects
