import React from 'react';
import Icon from '../Icon';
import { ActionablePopup, Item as PopupItem, Separator as PopupSeparator } from '../Popup';
import './ToolBar.css';

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

export default ({
  viewMode,
  showAvatars,
  sort,
  onRequestSearch,
  onSetViewMode,
  onSetAvatarVisibility,
  onSetSorting,
  onShowPopup
}) => (
  <div className="Sidebar__toolbar">
    <Button label="Search" onClick={() => onRequestSearch && onRequestSearch()}>
      <Icon name="search" />
    </Button>

    <Button label="Directory">
      <Icon name="directory" />
    </Button>

    <Item>
      <Button label="View Mode" onClick={() => onShowPopup && onShowPopup('viewMode')}>
        <Icon name={`viewMode--${viewMode}`} />
      </Button>

      <ActionablePopup popupId="viewMode">
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
      </ActionablePopup>
    </Item>

    <Item>
      <Button label="Sort" onClick={() => onShowPopup && onShowPopup('sort')}>
        <Icon name="sort--alphabetical" />
      </Button>

      <ActionablePopup popupId="sort">
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
      </ActionablePopup>
    </Item>

    <Button label="Create a New Channel">
      <Icon name="createANewChannel" />
    </Button>

    <MoreButton />
  </div>
);
