
import React, {Component} from 'react';

function Nav(props) {
    console.log(props);
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <p>{props.usersLoggedIn} users online</p>
        </nav>
      </div>
      );
}

export default Nav;

