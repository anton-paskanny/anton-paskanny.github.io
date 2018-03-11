import React from 'react';

import './styles.css';

export default (props) => (
  <button className="add-blog-btn hoverable" onClick={props.togglePopup}>&#43;</button>
);
