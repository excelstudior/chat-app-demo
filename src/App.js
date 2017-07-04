import React, { Component } from 'react';
import './App.css';
import Messages from './containers/Messages';
import AddAnswer from './containers/AddAnswer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className="App-content">
          <Messages />
          <AddAnswer />
        </div>
      </div>
    );
  }
}

export default App;
