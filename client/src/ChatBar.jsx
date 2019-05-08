import React, {Component} from 'react';

class ChatBar extends Component {
  _sendChat = e => {
    if(e.key === "Enter"){
      const newMessage = {
        type: "incomingMessage",
        username: this.props.User,
        content: e.target.value
      };
      this.props.getMessage(newMessage);
      e.target.value = "";
    }
  };

  _updateUser = e => {
    if(e.key === "Enter"){
      this.props.getUser(e.target.value);
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          defaultValue={this.props.User}
          onKeyPress={this._updateUser}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={this._sendChat}
        />
      </footer>
    );
  }

}

export default ChatBar;


