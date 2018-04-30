import React, { Component } from 'react';
import { Avatar } from '../Avatar';
import { Popup, Item as PopupItem, Separator as PopupSeparator } from '../Popup';

import './Header.css';

import avatarImage from '../assets/user-avatar.jpg';
import searchIcon from '../assets/icons/search.svg';
import directoryIcon from '../assets/icons/globe.svg';
import viewModeExtendedIcon from '../assets/icons/th-list.svg';
import viewModeMediumIcon from '../assets/icons/liat.svg';
import viewModeCondensedIcon from '../assets/icons/list-alt.svg';
import toggleAvatarVisibilityIcon from '../assets/icons/user-circle.svg';
import sortAlphabeticallyIcon from '../assets/icons/sort-alpha-down.svg';
import sortByActivityIcon from '../assets/icons/clock.svg';
import createANewChannelIcon from '../assets/icons/plus.svg';
import ellipsisIcon from '../assets/icons/ellipsis-v.svg';

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

export class Header extends Component {
  state = {
    visiblePopup: null
  }

  openPopup(e, visiblePopup) {
    this.setState({ visiblePopup });
    e.target.blur();
  }

  render() {
    const { viewMode } = this.props;
    const { visiblePopup } = this.state;

    return (
      <header className="Sidebar__header">
        <div className="Sidebar__header-thumb">
          <Avatar image={avatarImage} status="online" />
        </div>

        <div className="Sidebar__toolbar">
          <ToolbarButton icon={searchIcon} alt="Search" />
          <ToolbarButton icon={directoryIcon} alt="Directory " />

          <ToolbarItem>
            <ToolbarButton icon={getViewModeIcon(viewMode)} alt="View Mode"
              onClick={e => this.openPopup(e, 'viewMode')} />

            <Popup visible={visiblePopup === 'viewMode'}>
              <PopupItem icon={viewModeExtendedIcon} selected>Extended</PopupItem>
              <PopupItem icon={viewModeMediumIcon}>Medium</PopupItem>
              <PopupItem icon={viewModeCondensedIcon}>Condensed</PopupItem>
              <PopupSeparator />
              <PopupItem icon={toggleAvatarVisibilityIcon}>Hide Avatar</PopupItem>
            </Popup>
          </ToolbarItem>

          <ToolbarItem>
            <ToolbarButton icon={sortAlphabeticallyIcon} alt="Sort"
              onClick={e => this.openPopup(e, 'sort')} />

            <Popup visible={visiblePopup === 'sort'}>
              <PopupItem icon={sortAlphabeticallyIcon} selected>Alphabetical</PopupItem>
              <PopupItem icon={sortByActivityIcon}>Activity</PopupItem>
            </Popup>
          </ToolbarItem>

          <ToolbarButton icon={createANewChannelIcon} alt="Create a New Channel" />
          <ToolbarButton icon={ellipsisIcon} alt="More" />
        </div>
      </header>
    );
  }
}
