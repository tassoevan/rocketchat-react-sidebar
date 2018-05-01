import React, { Component } from 'react';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { Popup, Item as PopupItem, Separator as PopupSeparator } from '../Popup';

import './Header.css';

import avatarImage from '../assets/user-avatar.jpg';

const Button = ({ label, ...props}) => (
  <button className="Sidebar__toolbar-button" aria-label={label} {...props} />
);

const Item = props => (
  <div className="Sidebar__toolbar-item" {...props} />
);

export class Header extends Component {
  state = {
    visiblePopup: null
  }

  openPopup(visiblePopup) {
    this.setState({ visiblePopup });
  }

  hidePopup() {
    this.setState({ visiblePopup: null });
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
          <Button label="Search">
            <Icon name="search" />
          </Button>

          <Button label="Directory">
            <Icon name="directory" />
          </Button>

          <Item>
            <Button label="View Mode" onClick={() => this.openPopup('viewMode')}>
              <Icon name={`viewMode--${viewMode}`} />
            </Button>

            <Popup visible={visiblePopup === 'viewMode'} onDismiss={() => this.hidePopup()}>
              <PopupItem selected>
                <Icon name="viewMode--extended" />
                Extended
              </PopupItem>

              <PopupItem>
                <Icon name="viewMode--medium" />
                Medium
              </PopupItem>

              <PopupItem>
                <Icon name="viewMode--condensed" />
                Condensed
              </PopupItem>

              <PopupSeparator />

              <PopupItem>
                <Icon name="avatarVisibility" />
                Hide Avatar
              </PopupItem>
            </Popup>
          </Item>

          <Item>
            <Button label="Sort" onClick={() => this.openPopup('sort')}>
              <Icon name="sort--alphabetical" />
            </Button>

            <Popup visible={visiblePopup === 'sort'} onDismiss={() => this.hidePopup()}>
              <PopupItem selected>
                <Icon name="sort--alphabetical" />
                Alphabetical
              </PopupItem>

              <PopupItem>
                <Icon name="sort--activity" />
                Activity
              </PopupItem>
            </Popup>
          </Item>

          <Button label="Create a New Channel">
            <Icon name="createANewChannel" />
          </Button>

          <Button label="More">
            <Icon name="ellipsis" />
          </Button>
        </div>
      </header>
    );
  }
}
