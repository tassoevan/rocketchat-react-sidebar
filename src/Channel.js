import React, { Component } from 'react';
import './Channel.css';
import ellipsisIcon from './assets/icons/ellipsis-v.svg';

export class Channel extends Component {
  render() {
    return (
      <div className="Channel">
        <button className="Channel__body">
          <div className="Channel__icon Channel__icon--1">G</div>
          <div className="Channel__description">
            <div className="Channel__name">general</div>
            <div className="Channel__last-message">ray.munoz: Lorem ipsum dolor</div>
          </div>
          <div className="Channel__stats">
            <div className="Channel__last-message-time-since">2h</div>
            <div className="Channel__unread-messages-count Sidebar__list-counter">2</div>
          </div>
        </button>
        <button className="Channel__more" aria-label="More">
          <img src={ellipsisIcon} alt="More" />
        </button>
      </div>
    );
  }
}
