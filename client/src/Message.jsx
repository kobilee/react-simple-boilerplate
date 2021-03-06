import React, {Component} from 'react';

class Message extends Component {


  render() {
    const divStyle = {
      color: this.props.message.color
    };
    if (this.props.message.type === "incomingMessage") {
      return (

        <div className="message">
          <span className="message-username" style={divStyle}>{this.props.message.username}</span>
          <span className="message-content">{this.props.message.content}</span>
        </div>
      );
    } else {
      return (
       <div className="message system">
          {this.props.message.content}
        </div>
      );
    }
  }
}
export default Message;
