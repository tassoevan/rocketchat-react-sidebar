import React, { Children } from 'react';
import './Popup.css';

export const Popup = ({ children, visible, onDismiss, ...props }) => visible ? (
  <div className="Popup__wrapper" onClick={e => onDismiss && onDismiss()}>
    <ul className="Popup" onClick={e => e.stopPropagation()} {...props}>
      {Children.map(children, child => React.cloneElement(child, { onDismiss }))}
    </ul>
  </div>
) : null;

export const Item = ({ children, icon, selected, onClick, onDismiss, ...props }) => (
  <li className={`Popup__item${selected ? ' Popup__item--selected' : ''}`}>
    <button className="Popup__item-button" onClick={e => {
      onDismiss && onDismiss();
      onClick && onClick(e);
    }} {...props}>
      {children}
    </button>
  </li>
);

export const Separator = () => (
  <li className="Popup__separator" />
);
