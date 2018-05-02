import React from 'react';
import { connect } from 'react-redux';
import Icon from '../Icon';
import {
  searchInSidebar,
  clearSearchInSidebar
} from '../actions';

import './SearchBar.css';

const mapStateToProps = ({ sidebar: { searchText } }) => ({ searchText });

const mapDispatchToProps = dispatch => ({
  onUpdateText: text => dispatch && dispatch(searchInSidebar(text)),
  onCancel: () => dispatch && dispatch(clearSearchInSidebar())
});

export default connect(mapStateToProps, mapDispatchToProps)(({
  searchText,
  onUpdateText,
  onCancel
}) => (
  <div className="Sidebar__search">
    <div className="Sidebar__search-icon">
      <Icon name="search" />
    </div>

    <input type="search" value={searchText} autoFocus
      onChange={e => onUpdateText && onUpdateText(e.target.value)}
      className="Sidebar__search-input" />

    <button className="Sidebar__search-clear" aria-label="Cancel"
      onClick={() => onCancel && onCancel()}>
      <Icon name="cancel" />
    </button>
  </div>
));
