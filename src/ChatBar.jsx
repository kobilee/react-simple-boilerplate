
import React, {Component} from 'react';

class ChatBar extends Component {


  render() {
    console.log(this.props);
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          defaultValue={this.props.User}
        />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }

}

export default ChatBar;


