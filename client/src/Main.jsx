import React, {Component} from 'react';
import MessageList from './MessageList.jsx';

class Main extends Component {
  render() {
    return (
      <MessageList messages={this.props.Messages} />
    );
  }
}
export default Main;