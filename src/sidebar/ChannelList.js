import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import { Channel, ChannelNotFound } from './Channel';

import data from '../assets/data.json';

const getUnreadMessagesCount = channels => channels.reduce(
  (unreadMessages, channel) => unreadMessages + channel.unreadMessages, 0);

const normalizeChannels = (channels, searchText, sort) => channels
  .filter(channel => !searchText || channel.name.indexOf(searchText) > -1)
  .sort((channelA, channelB) => {
    switch (sort) {
      case 'alphabetical':
        return channelA.name < channelB.name ? -1: 1;

      case 'activity':
        const timestampA = channelA.lastMessage.timestamp || channelA.createdAt;
        const timestampB = channelB.lastMessage.timestamp || channelB.createdAt;
        return timestampB - timestampA;

      default:
        return 0;
    }
  });

const PureChannelList = ({
  title,
  viewMode,
  showAvatars,
  channels
}) => (
  <List title={title} count={getUnreadMessagesCount(channels)}>
    {channels && channels.length > 0 ?
      channels.map((channel, key) => (
        <Channel key={key}
          name={channel.name}
          unreadMessages={channel.unreadMessages}
          createdAt={channel.createdAt}
          lastMessage={channel.lastMessage}
          viewMode={viewMode}
          showAvatar={showAvatars} />
      )) :
      <ChannelNotFound
        viewMode={viewMode}
        showAvatar={showAvatars} />
    }
  </List>
);

const mapStateToProps = ({ sidebar: { searchText, viewMode, showAvatars, sort } }) => ({
  title: searchText !== null && searchText !== undefined ? 'Results' : 'Channels',
  viewMode,
  showAvatars,
  channels: normalizeChannels(data.channelList, searchText, sort)
});

export default connect(mapStateToProps)(PureChannelList);
