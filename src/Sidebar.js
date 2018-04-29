import React from 'react';
import { Avatar } from './Avatar';
import './Sidebar.css';
import avatarImage from './user-avatar.jpg';

const Thumb = ({ children }) => (
  <div className="Sidebar__header-thumb">
    { children }
  </div>
);

const Toolbar = ({ children }) => (
  <div className="Sidebar__header-toolbar">
    {children}
  </div>
);

const Header = () => (
  <header className="Sidebar__header">
    <Thumb>
      <Avatar image={avatarImage} status="online" />
    </Thumb>
    <Toolbar>
    </Toolbar>
  </header>
);

export const Sidebar = ({ viewMode }) => (
  <aside className={`Sidebar Sidebar--viewmode-${viewMode || 'medium'}`}>
    <Header />

    <div className="Sidebar__list">
      Rooms list
    </div>

    <footer className="Sidebar__footer">
      Footer
    </footer>
  </aside>
);
