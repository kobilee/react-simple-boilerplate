import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super();
    this.state = {user: props.User};
  }

  _sendChat = e => {
    //submit a message app.jsx
    if(e.key === "Enter" && e.target.value !== ""){
        const newMessage = e.target.value;
        e.target.value = "";
        if (this.props.User !== this.state.user) {
          this.props.submitNewUser(this.state.user, this.props.submitMessage.bind(null, newMessage));
        } else {
          this.props.submitMessage(newMessage);
        }
    }
  };

  _userSubmit = e => {
    //submit a new username to app.jsx
    if (e.key === "Enter" && e.target.value !== "" && this.props.User !== this.state.user) {
      let newUser = e.target.value;
      console.log(newUser);
      this.props.submitNewUser(newUser);
    }
  };

  _updateUser = e => {
    //updates user
    this.setState({user: e.target.value});
  };


  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          value={this.state.user}
          onChange={this._updateUser}
          onKeyPress={this._userSubmit}
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


