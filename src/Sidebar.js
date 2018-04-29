import React from 'react';
import { Avatar } from './Avatar';
import './Sidebar.css';
import avatarImage from './assets/user-avatar.jpg';
import searchIcon from './assets/icons/search.svg';
import directoryIcon from './assets/icons/globe.svg';
import viewModeIcon from './assets/icons/th-list.svg';
import sortIcon from './assets/icons/sort-alpha-down.svg';
import createANewChannelIcon from './assets/icons/plus.svg';
import ellipsisIcon from './assets/icons/ellipsis-v.svg';

const Thumb = ({ children }) => (
  <div className="Sidebar__header-thumb">
    { children }
  </div>
);

const Toolbar = ({ children }) => (
  <div className="Sidebar__toolbar">
    {children}
  </div>
);

const ToolbarButton = ({ icon, alt }) => (
  <div className="Sidebar__toolbar-button">
    <img src={icon} alt={alt} />
  </div>
);

const Header = () => (
  <header className="Sidebar__header">
    <Thumb>
      <Avatar image={avatarImage} status="online" />
    </Thumb>

    <Toolbar>
      <ToolbarButton icon={searchIcon} alt="Search" />
      <ToolbarButton icon={directoryIcon} alt="Directory " />
      <ToolbarButton icon={viewModeIcon} alt="View Mode" />
      <ToolbarButton icon={sortIcon} alt="Sort" />
      <ToolbarButton icon={createANewChannelIcon} alt="Create a New Channel" />
      <ToolbarButton icon={ellipsisIcon} alt="More" />
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
