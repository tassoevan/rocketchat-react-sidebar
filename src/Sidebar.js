import React from 'react';
import { Avatar } from './Avatar';
import './Sidebar.css';
import avatarImage from './assets/user-avatar.jpg';
import searchIcon from './assets/icons/search.svg';
import directoryIcon from './assets/icons/globe.svg';
import viewModeExtendedIcon from './assets/icons/th-list.svg';
import viewModeMediumIcon from './assets/icons/liat.svg';
import viewModeCondensedIcon from './assets/icons/list-alt.svg';
import sortIcon from './assets/icons/sort-alpha-down.svg';
import createANewChannelIcon from './assets/icons/plus.svg';
import ellipsisIcon from './assets/icons/ellipsis-v.svg';

const Thumb = ({ children }) => (
  <div className="Sidebar__header-thumb">
    {children}
  </div>
);

const Toolbar = ({ children }) => (
  <div className="Sidebar__toolbar">
    {children}
  </div>
);

const ToolbarButton = ({ icon, alt }) => (
  <button className="Sidebar__toolbar-button" aria-label={alt}>
    <img src={icon} alt={alt} />
  </button>
);

const getViewModeIcon = viewMode => (({
  extended: viewModeExtendedIcon,
  medium: viewModeMediumIcon,
  condensed: viewModeCondensedIcon
}))[viewMode];

const Header = ({ viewMode }) => (
  <header className="Sidebar__header">
    <Thumb>
      <Avatar image={avatarImage} status="online" />
    </Thumb>

    <Toolbar>
      <ToolbarButton icon={searchIcon} alt="Search" />
      <ToolbarButton icon={directoryIcon} alt="Directory " />
      <ToolbarButton icon={getViewModeIcon(viewMode)} alt="View Mode" />
      <ToolbarButton icon={sortIcon} alt="Sort" />
      <ToolbarButton icon={createANewChannelIcon} alt="Create a New Channel" />
      <ToolbarButton icon={ellipsisIcon} alt="More" />
    </Toolbar>
  </header>
);

const List = ({ title, count, children }) => (
  <div className="Sidebar__list">
    {title ? (
      <h2 className="Sidebar__list-title">
        <span className="Sidebar__list-title-text">Channels</span>
        <span className="Sidebar__list-title-counter Sidebar__list-counter">7</span>
      </h2>
    ) : null}

    <ul className="Sidebar__list-items">
      {children}
    </ul>
  </div>
);

const Item = props => (
  <li className="Sidebar__list-item" {...props} />
);

const Channel = ({ ...props }) => (
  <Item>
    <div className="Channel">
      <div className="Channel__icon">G</div>
      <div className="Channel__name">general</div>
      <div className="Channel__last-message">ray.munoz: Lorem ipsum dolor</div>
      <div className="Channel__elapsed-time">2h</div>
      <div className="Channel__message-count Sidebar__list-counter">2</div>
    </div>
  </Item>
);

export const Sidebar = ({ viewMode }) => (
  <aside className={`Sidebar Sidebar--viewmode-${viewMode}`}>
    <Header viewMode={viewMode} />

    <List title="Channels" count={7}>
      <Channel />
      <Channel />
      <Channel />
      <Channel />
      <Channel />
    </List>
  </aside>
);
