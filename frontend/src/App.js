import React, { Component } from 'react';
import "./App.css";
import { connect, sendMsg } from './api';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }));
    });
  }

  send() {
    console.log('hello');
    sendMsg('Hello from client');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <button onClick={this.send}>Send</button>
      </div>
    );
  }
}

export default App;