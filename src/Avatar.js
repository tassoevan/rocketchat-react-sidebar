import React from 'react';
import './Avatar.css';

export const Avatar = ({ image, status }) => (
  <div className="Avatar">
    <div className="Avatar__image" style={{ backgroundImage: `url(${image})` }} />
    {status ? <div className={`Avatar__status Avatar__status-${status}`} /> : null}
  </div>
);
