
import React, {Component} from 'react';
import ChatBar from "./ChatBar.jsx";
import Main from "./Main.jsx";
import Nav from "./Nav.jsx";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 0,
          type: "incomingMessage",
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 1,
          type: "incomingMessage",
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
  }


  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, type: "incomingMessage", username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  render() {
    return (
    <div>
      <Nav />
      <Main Messages={this.state.messages}/>
      <ChatBar User={this.state.currentUser.name} />
    </div>
    );
  }
}
export default App;

