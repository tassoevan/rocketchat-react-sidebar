import React, { Children } from 'react';

import './List.css';

export default ({ title, count, children }) => (
  <div className="Sidebar__list">
    {title ? (
      <h2 className="Sidebar__list-title">
        <span className="Sidebar__list-title-text">{title}</span>
        {count > 0 ?
          <span className="Sidebar__list-title-counter Sidebar__list-counter">{count}</span> : null}
      </h2>
    ) : null}

    <ul className="Sidebar__list-items">
      {Children.map(children, child => (
        <li className="Sidebar__list-item">{child}</li>
      ))}
    </ul>
  </div>
);
