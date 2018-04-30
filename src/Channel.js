import React, { Component } from 'react';
import './Channel.css';

export class Channel extends Component {
  render() {
    return (
      <div className="Channel">
        <div className="Channel__icon">G</div>
        <div className="Channel__description">
          <div className="Channel__name">general</div>
          <div className="Channel__last-message">ray.munoz: Lorem ipsum dolor</div>
        </div>
        <div className="Channel__stats">
          <div className="Channel__last-message-time-since">2h</div>
          <div className="Channel__message-count Sidebar__list-counter">2</div>
        </div>
      </div>
    );
  }
}
