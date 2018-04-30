import React from 'react';
import { Avatar } from './Avatar';
import { Channel } from './Channel';
import { Popup, Item as PopupItem, Separator as PopupSeparator } from './Popup';
import './Sidebar.css';
import avatarImage from './assets/user-avatar.jpg';
import searchIcon from './assets/icons/search.svg';
import directoryIcon from './assets/icons/globe.svg';
import viewModeExtendedIcon from './assets/icons/th-list.svg';
import viewModeMediumIcon from './assets/icons/liat.svg';
import viewModeCondensedIcon from './assets/icons/list-alt.svg';
import toggleAvatarVisibilityIcon from './assets/icons/user-circle.svg';
import sortAlphabeticallyIcon from './assets/icons/sort-alpha-down.svg';
import sortByActivityIcon from './assets/icons/clock.svg';
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

const ToolbarButton = ({ icon, alt, ...props }) => (
  <button className="Sidebar__toolbar-button" aria-label={alt} {...props}>
    <img src={icon} alt={alt} />
  </button>
);

const ToolbarItem = ({ children }) => (
  <div className="Sidebar__toolbar-item">
    {children}
  </div>
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
      <ToolbarItem>
        <ToolbarButton icon={getViewModeIcon(viewMode)} alt="View Mode" />

        <Popup visible>
          <PopupItem icon={viewModeExtendedIcon} selected>Extended</PopupItem>
          <PopupItem icon={viewModeMediumIcon}>Medium</PopupItem>
          <PopupItem icon={viewModeCondensedIcon}>Condensed</PopupItem>
          <PopupSeparator />
          <PopupItem icon={toggleAvatarVisibilityIcon}>Hide Avatar</PopupItem>
        </Popup>
      </ToolbarItem>
      <ToolbarItem>
        <ToolbarButton icon={sortAlphabeticallyIcon} alt="Sort" />

        <Popup visible>
          <PopupItem icon={sortAlphabeticallyIcon} selected>Alphabetical</PopupItem>
          <PopupItem icon={sortByActivityIcon}>Activity</PopupItem>
        </Popup>
      </ToolbarItem>
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
      {React.Children.map(children, child => (
        <li className="Sidebar__list-item">{child}</li>
      ))}
    </ul>
  </div>
);

export const Sidebar = ({ viewMode }) => (
  <aside className={`Sidebar Sidebar--viewmode-${viewMode}`}>
    <Header viewMode={viewMode} />

    <List title="Channels" count={7}>
      <Channel viewMode={viewMode} />
      <Channel viewMode={viewMode} />
      <Channel viewMode={viewMode} />
      <Channel viewMode={viewMode} />
      <Channel viewMode={viewMode} />
    </List>
  </aside>
);
