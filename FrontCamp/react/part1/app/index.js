import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const renderMethod = window ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
  <App />,
  document.querySelector('.app')
);
