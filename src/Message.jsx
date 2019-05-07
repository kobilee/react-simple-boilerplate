import React, {Component} from 'react';

function Message(props) {
    return (
      <div>
        <li className="message">
          <span className="message-username"> </span>
          <span className="message-content"> I won't be impressed with technology until I can download food</span>
        </li>
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
      </div>
      );


}

export default Message;
