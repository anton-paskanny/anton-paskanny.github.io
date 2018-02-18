import React from 'react';

export default (props) => (
  <li className="blogs__item">
    <h3 className="blogs__title">{props.data.author}</h3>
    <p className="blogs__text">{props.data.description}</p>
  </li>
);
