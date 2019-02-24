import React, {Component} from 'react';

class SocialLinks extends Component{
  render(){
    return(
      <div>
      <aside id="social">
      <a href="#"><i className="fab fa-3x fa-facebook-square"></i></a>
      <a href="#"><i className="fab fa-3x fa-twitter-square"></i></a>
      <a href="#"><i className="fab fa-3x fa-github-square"></i></a>
      </aside>      
      <p>© copyright 2019</p>
      </div>
    )
  }
}

export default SocialLinks;
