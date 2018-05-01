import React from 'react';
import './Avatar.css';

export const Avatar = ({ children, status, ...props }) => (
  <div className="Avatar" {...props}>
    {children}
    {status ? <div className={`Avatar__status Avatar__status-${status}`} /> : null}
  </div>
);

export const ImageAvatar = ({ src, ...props }) => (
  <Avatar {...props}>
    <div className="Avatar__image" style={{ backgroundImage: `url(${src})` }} />
  </Avatar>
);

export const TextAvatar = ({ children, color, ...props }) => (
  <Avatar {...props}>
    <div className="Avatar__text" style={{ backgroundColor: color }}>{children}</div>
  </Avatar>
);
