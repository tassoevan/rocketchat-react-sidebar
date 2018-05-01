import React from 'react';
import { Channel } from './Channel';
import { Header } from './sidebar/Header';

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
      {React.Children.map(children, child => (
        <li className="Sidebar__list-item">{child}</li>
      ))}
    </ul>
  </div>
);

export const Sidebar = ({ viewMode }) => (
  <aside className={`Sidebar Sidebar--viewmode-${viewMode}`}>
    <Header viewMode={viewMode} />

    <List title="Channels" count={7}>
      {data.channelList.map((channel, key) => (
        <Channel key={key}
          name={channel.name}
          unreadMessages={channel.unreadMessages}
          lastMessage={channel.lastMessage}
          viewMode={viewMode}
          showAvatar />
      ))}
    </List>
  </aside>
);
