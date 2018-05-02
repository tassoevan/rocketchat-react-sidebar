import React from 'react';
import Header from './sidebar/Header';
import ChannelList from './sidebar/ChannelList';
import './Sidebar.css';

export const Sidebar = () => (
  <aside className='Sidebar'>
    <Header />
    <ChannelList />
  </aside>
);
