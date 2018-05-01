import React, { Component } from 'react';
import { SidebarContainer } from './Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SidebarContainer />

        <main>
          Content goes here
        </main>
      </div>
    );
  }
}

export default App;
