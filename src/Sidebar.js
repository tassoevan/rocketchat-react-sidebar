import React from 'react';
import './Sidebar.css';

export const Sidebar = ({ viewMode }) => <aside className={`Sidebar Sidebar--viewmode-${viewMode || 'medium'}`}>
  <header className="Sidebar__header">
    Header
  </header>

  <div className="Sidebar__list">
    Rooms list
  </div>

  <footer className="Sidebar__footer">
    Footer
  </footer>
</aside>;
