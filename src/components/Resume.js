import React, {Component} from 'react';

class Resume extends Component{
  render(){
    return(
      <aside id="resume">
        <h1>Resume</h1>
        <header>
          <h2>Student A-Ko</h2>
          <p><a href="#">(111) 222-3333 diamonds@forever.com</a> 1000 Everything is awesome, Fairytale, HappyVale</p>
        </header>
        <hr/>
        <ol>
          <li><h4>Legendary Moves</h4>
            <ul>
              <li>Punch</li>
              <li>Kick</li>
              <li>Uppercut</li>
            </ul>
            <p>From the school of hardknocks</p>
          </li>

          <li><h4>Special Moves</h4>
            <ul>
              <li>Shadow Kick</li>
              <li>Tendon Push</li>
              <li>Dragon Punch</li>
            </ul>
          </li>
        </ol>

      </aside>
    )
  }
}

export default Resume;
