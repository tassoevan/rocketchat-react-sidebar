import React, { Component } from 'react';
import { Sidebar } from './Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />

        <main>
          Content goes here
        </main>
      </div>
    );
  }
}

export default App;
