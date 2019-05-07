import React, {Component} from 'react';
import { generateRandomId } from "./utils";

class ChatBar extends Component {
  _enter = e => {
    if(e.key === "Enter"){
      const newMessage = {
        id: generateRandomId(),
        type: "incomingMessage",
        username: this.props.User,
        content: e.target.value
      };
      this.props.sendMessage(newMessage);
      e.target.value = "";
    }
  };



  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          defaultValue={this.props.User}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={this._enter}
        />
      </footer>
    );
  }

}

export default ChatBar;


