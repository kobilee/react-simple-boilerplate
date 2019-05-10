
import React, {Component} from 'react';
import ChatBar from "./ChatBar.jsx";
import Main from "./Main.jsx";
import Nav from "./Nav.jsx";

class App extends Component {
  constructor(props){
    super(props);
    this.sendToServer = this.sendToServer.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.submitNewUser = this.submitNewUser.bind(this);
    this.state = {
      currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      usersLoggedIn: 0,

    };
  }


  //send a message object to the server
  sendToServer(obj) {
    this.socket.send(JSON.stringify(obj));
  }

  //create a message object, send message from chatbar to server
  submitMessage(message) {
    let new_obj = {username: this.state.currentUser.name, content: message, color: this.state.color};
    this.sendToServer(new_obj);
  }

  //update username state and send chatbar user chnage to server
  submitNewUser(user, callback) {
    let new_user_update = {"content": `${this.state.currentUser.name} has changed their name to ${user}.`};
    this.setState({currentUser: {name: user}}, callback);
    this.sendToServer(new_user_update);
  }


  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001/");
    //recieve message form server
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch(data.type) {
        //update messages
        case "incomingMessage":

        case "incomingNotification":

          let messages = this.state.messages.concat(data)
          this.setState({messages: messages});
          break;
        case "incomingUser":
        //update color
        if (!this.state.color) {
          this.setState({color: data.color});
        }
        //update numebr of users
        this.setState({usersLoggedIn: data.length});
        break;
        default:
          // show an error in the console if the message type is unknown
          throw new Error("Unknown event type " + data.type);
      }


    };
  }

  render() {
    return (
    <div>
      <Nav usersLoggedIn={this.state.usersLoggedIn}/>
      <Main Messages={this.state.messages} color={this.state.color}/>
      <ChatBar User={this.state.currentUser.name} submitMessage={this.submitMessage} submitNewUser={this.submitNewUser} />
    </div>
    );
  }
}
export default App;

