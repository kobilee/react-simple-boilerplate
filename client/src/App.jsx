
import React, {Component} from 'react';
import ChatBar from "./ChatBar.jsx";
import Main from "./Main.jsx";
import Nav from "./Nav.jsx";

class App extends Component {
  constructor(props){
    super(props);
    this.newUser = this.newUser.bind(this);
    this.newMessage = this.newMessage.bind(this);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    };
  }

  newMessage(msg) {
    this.socket.send(JSON.stringify(msg));


  }

  newUser(user) {
      //const messages = this.state.messages.concat(message)
      this.setState({currentUser: {name: user}});


  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001/");

    this.socket.onmessage = (event) => {
      console.log(JSON.parse(event.data));
      const message = JSON.parse(event.data);
      const messages = this.state.messages.concat(message)
      this.setState({messages: messages})
    }


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
      <ChatBar User={this.state.currentUser.name} getMessage={this.newMessage} getUser={this.newUser}/>
    </div>
    );
  }
}
export default App;

