import React, { Component } from 'react';
import { ImageAvatar } from '../Avatar';
import ToolBar from './ToolBar';
import SearchBar from './SearchBar';
import {
  showPopup,
  searchInSidebar,
  clearSearchInSidebar,
  setSidebarViewMode,
  setSidebarAvatarVisibility,
  setSidebarSorting
} from '../actions';

import './Header.css';
import avatarImage from '../assets/user-avatar.jpg';

export class Header extends Component {
  render() {
    const {
      viewMode,
      showAvatars,
      sort,
      searchText,
      dispatch
    } = this.props;

    return (
      <header className="Sidebar__header">
        <div className="Sidebar__header-thumb">
          <ImageAvatar src={avatarImage} status="online" />
        </div>

        {(searchText === null || searchText === undefined) ?
          <ToolBar
            onRequestSearch={() => dispatch && dispatch(searchInSidebar(''))}
            viewMode={viewMode}
            onSetViewMode={viewMode => dispatch && dispatch(setSidebarViewMode(viewMode))}
            showAvatars={showAvatars}
            onSetAvatarVisibility={show => dispatch && dispatch(setSidebarAvatarVisibility(show))}
            sort={sort}
            onSetSorting={sort => dispatch && dispatch(setSidebarSorting(sort))}
            onShowPopup={popupId => dispatch && dispatch(showPopup(popupId))}
          /> :
          <SearchBar
            searchText={searchText}
            onUpdateText={text => dispatch && dispatch(searchInSidebar(text))}
            onCancel={() => dispatch && dispatch(clearSearchInSidebar())}
          />}
      </header>
    );
  }
}
