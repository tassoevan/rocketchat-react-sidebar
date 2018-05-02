import React from 'react';
import { connect } from 'react-redux';
import { ImageAvatar } from '../Avatar';
import ToolBar from './ToolBar';
import SearchBar from './SearchBar';

import './Header.css';
import avatarImage from '../assets/user-avatar.jpg';

const mapStateToProps = ({ sidebar: { searchText } }) => ({
  isSearching: searchText !== null && searchText !== undefined
});

export default connect(mapStateToProps)(({
  isSearching
}) => (
  <header className="Sidebar__header">
    <div className="Sidebar__header-thumb">
      <ImageAvatar src={avatarImage} status="online" />
    </div>

    {isSearching ? <SearchBar /> : <ToolBar />}
  </header>
));
