import React, { Component } from 'react';
import { ImageAvatar } from '../Avatar';
import { Icon } from '../Icon';
import { Popup, Item as PopupItem, Separator as PopupSeparator } from '../Popup';

import './Header.css';

import avatarImage from '../assets/user-avatar.jpg';

const Button = ({ label, ...props}) => (
  <button className="Sidebar__toolbar-button" aria-label={label} {...props} />
);

const MoreButton = () => (
  <button className="Sidebar__toolbar-button Sidebar__toolbar-button--more" aria-label="More">
    <Icon name="ellipsis" />
  </button>
);

const Item = props => (
  <div className="Sidebar__toolbar-item" {...props} />
);

export class Header extends Component {
  state = {
    showSearchBar: false,
    searchText: '',
    visiblePopup: null
  }

  showPopup(visiblePopup) {
    this.setState({ visiblePopup });
  }

  hidePopup() {
    this.setState({ visiblePopup: null });
  }

  showSearchBar() {
    this.setState({ showSearchBar: true });
  }

  hideSearchBar() {
    this.setState({ showSearchBar: false, searchText: '' });
  }

  renderToolbar() {
    const {
      viewMode,
      showAvatars,
      sort,
      onSetViewMode,
      onSetAvatarVisibility,
      onSetSorting
    } = this.props;
    const { visiblePopup } = this.state;

    return (
      <div className="Sidebar__toolbar">
        <Button label="Search" onClick={() => this.showSearchBar()}>
          <Icon name="search" />
        </Button>

        <Button label="Directory">
          <Icon name="directory" />
        </Button>

        <Item>
          <Button label="View Mode" onClick={() => this.showPopup('viewMode')}>
            <Icon name={`viewMode--${viewMode}`} />
          </Button>

          <Popup visible={visiblePopup === 'viewMode'} onDismiss={() => this.hidePopup()}>
            <PopupItem selected={viewMode === 'extended'}
              onClick={() => onSetViewMode && onSetViewMode('extended')}>
              <Icon name="viewMode--extended" />
              <span>Extended</span>
            </PopupItem>

            <PopupItem selected={viewMode === 'medium'}
              onClick={() => onSetViewMode && onSetViewMode('medium')}>
              <Icon name="viewMode--medium" />
              <span>Medium</span>
            </PopupItem>

            <PopupItem selected={viewMode === 'condensed'}
              onClick={() => onSetViewMode && onSetViewMode('condensed')}>
              <Icon name="viewMode--condensed" />
              <span>Condensed</span>
            </PopupItem>

            <PopupSeparator />

            <PopupItem onClick={() => onSetAvatarVisibility && onSetAvatarVisibility(!showAvatars)}>
              <Icon name="avatarVisibility" />
              <span>{showAvatars ? 'Show Avatars' : 'Hide Avatars'}</span>
            </PopupItem>
          </Popup>
        </Item>

        <Item>
          <Button label="Sort" onClick={() => this.showPopup('sort')}>
            <Icon name="sort--alphabetical" />
          </Button>

          <Popup visible={visiblePopup === 'sort'} onDismiss={() => this.hidePopup()}>
            <PopupItem selected={sort === 'alphabetical'}
              onClick={() => onSetSorting && onSetSorting('alphabetical')}>
              <Icon name="sort--alphabetical" />
              <span>Alphabetical</span>
            </PopupItem>

            <PopupItem selected={sort === 'activity'}
              onClick={() => onSetSorting && onSetSorting('activity')}>
              <Icon name="sort--activity" />
              <span>Activity</span>
            </PopupItem>
          </Popup>
        </Item>

        <Button label="Create a New Channel">
          <Icon name="createANewChannel" />
        </Button>

        <MoreButton />
      </div>
    );
  }

  renderSearchBar() {
    const { searchText } = this.state;

    return (
      <div className="Sidebar__search">
        <div className="Sidebar__search-icon">
          <Icon name="search" />
        </div>

        <input type="search" value={searchText} autoFocus
          onChange={e => this.updateSearchText(e.target.value)} className="Sidebar__search-input" />

        <button className="Sidebar__search-clear" aria-label="Cancel" onClick={() => this.hideSearchBar()}>
          <Icon name="cancel" />
        </button>
      </div>
    );
  }

  updateSearchText(searchText) {
    this.setState({ searchText });
  }

  render() {
    const { showSearchBar } = this.state;

    return (
      <header className="Sidebar__header">
        <div className="Sidebar__header-thumb">
          <ImageAvatar src={avatarImage} status="online" />
        </div>

        {showSearchBar ? this.renderSearchBar() : this.renderToolbar()}
      </header>
    );
  }
}
