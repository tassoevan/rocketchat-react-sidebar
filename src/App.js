import React, { Component } from 'react';
import './App.css';

const Sidebar = ({ children, viewMode }) => <aside class={`sidebar sidebar--viewmode-${viewMode || 'medium'}`}>
  <div class="sidebar__content">
    <header class="sidebar__header">
      Header
    </header>

    <div>Rooms list</div>

    <footer class="sidebar__footer">
      Footer
    </footer>
  </div>

  <div class="sidebar__overlay" />
</aside>;

const Main = () => <div>
  Content goes here
</div>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
