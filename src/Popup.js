import React from 'react';
import './Popup.css';

export const Popup = ({ children, visible, ...props }) => visible ? (
  <ul className="Popup" {...props}>
    {children}
  </ul>
) : null;

export const Item = ({ children, icon, selected, ...props }) => (
  <li className={`Popup__item${selected ? ' Popup__item--selected' : ''}`}>
    <button className="Popup__item-button" {...props}>
      {icon ? <img src={icon} alt="" className="Popup__item-icon" /> : null}
      <span className="Popup__item-text">{children}</span>
    </button>
  </li>
);

export const Separator = () => (
  <li className="Popup__separator" />
);
