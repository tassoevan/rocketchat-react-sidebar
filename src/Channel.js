import React, { Component } from 'react';
import { TextAvatar } from './Avatar';
import Icon from './Icon';
import './Channel.css';

export class Channel extends Component {
  static colors = [
    '#4a90e2', '#7ed321', '#e45062',
    '#f5a623', '#f8e71c'
  ]

  static mapChannelColors = {}

  renderAvatar() {
    const {
      name,
      showAvatar
    } = this.props;

    if (!showAvatar) {
      return null;
    }

    if (!Channel.mapChannelColors[name]) {
      const colorIndex = Object.keys(Channel.mapChannelColors).length % Channel.colors.length;
      Channel.mapChannelColors[name] = Channel.colors[colorIndex];
    }

    return (
      <div className="Channel__avatar">
        <TextAvatar color={Channel.mapChannelColors[name]}>{name.charAt(0)}</TextAvatar>
      </div>
    );
  }

  render() {
    const {
      name,
      unreadMessages,
      lastMessage
    } = this.props;

    return (
      <div className={`Channel${unreadMessages > 0 ? ' Channel--has-unread-messages' : ''}`}>
        <button className="Channel__body">
          {this.renderAvatar()}
          <div className="Channel__description">
            <div className="Channel__name">{name}</div>
            {lastMessage ? (
              <div className="Channel__last-message">{lastMessage.user}: {lastMessage.message}</div>
            ) : (
              <div className="Channel__last-message Channel__last-message--none">No messages yet</div>
            )}
          </div>

          <div className="Channel__stats">
            <div className="Channel__last-message-time-since">2h</div>
            {unreadMessages > 0 ? (
              <div className="Channel__unread-messages-count Sidebar__list-counter">{unreadMessages}</div>
            ) : null}
          </div>
        </button>

        <button className="Channel__more" aria-label="More">
          <Icon name="ellipsis" />
        </button>
      </div>
    );
  }
}

export const ChannelNotFound = ({ showAvatar }) => (
  <div className="Channel Channel--not-found">
    <div className="Channel__body">
      {showAvatar ? <div className="Channel__avatar" /> : null}

      <div className="Channel__description">
        <div className="Channel__name">Sorry</div>
        <div className="Channel__last-message">Nothing found</div>
      </div>
    </div>
  </div>
);
