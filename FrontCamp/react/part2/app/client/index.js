import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import appReducer from './reducers/index.js';

import App from './components/app/App.jsx';

const renderMethod = window ? ReactDOM.render : ReactDOM.hydrate;

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

renderMethod(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('.app')
);
