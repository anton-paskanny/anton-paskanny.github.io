import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

export default (props) => (
  ReactDOM.createPortal(
    <div className="overlay">
      {props.component}
    </div>,
    document.querySelector("body")
  )
)
