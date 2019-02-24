import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return(
      <form method="post" id="contact">

        <div className="form-field">
          <label htmlFor="user_name">Name</label> <br/>
          <input type="text" name="user_name" required=""/>
        </div>

        <div className="form-field">
          <label htmlFor="user_email">Email</label> <br/>
          <input type="email" name="user_email" required=""/>
        </div>

        <div className="form-field">
          <textarea name="message"></textarea>
        </div>
        <input type="submit" value="Contact me! 😃"/>
        </form>
    )
  }
}

export default Contact;
