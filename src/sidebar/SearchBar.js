import React from 'react';
import Icon from '../Icon';
import './SearchBar.css';

export default ({ searchText, onUpdateText, onCancel }) => (
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
);
