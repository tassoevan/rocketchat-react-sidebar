import React, { Children } from 'react';
import { connect } from 'react-redux';
import Header from './sidebar/Header';
import { Channel, ChannelNotFound } from './Channel';

import data from './assets/data.json';
import './Sidebar.css';

const List = ({ title, count, children }) => (
  <div className="Sidebar__list">
    {title ? (
      <h2 className="Sidebar__list-title">
        <span className="Sidebar__list-title-text">Channels</span>
        <span className="Sidebar__list-title-counter Sidebar__list-counter">7</span>
      </h2>
    ) : null}

    <ul className="Sidebar__list-items">
      {Children.map(children, child => (
        <li className="Sidebar__list-item">{child}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = ({ sidebar: { viewMode, showAvatars } }) =>
  ({ viewMode, showAvatars });

const mapDispatchToProps = dispatch => ({});

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(({
  viewMode,
  showAvatars
}) => (
  <aside className={`Sidebar Sidebar--viewmode-${viewMode}`}>
    <Header />

    <List title="Channels" count={7}>
      {data.channelList.map((channel, key) => (
        <Channel key={key}
          name={channel.name}
          unreadMessages={channel.unreadMessages}
          lastMessage={channel.lastMessage}
          viewMode={viewMode}
          showAvatar={showAvatars} />
      ))}

      <ChannelNotFound showAvatar={showAvatars} />
    </List>
  </aside>
));
