import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import configureStore from './modules/configureStore';

import './normalize.css';
import './styles.css';

const store = configureStore(window.PRELOADED_STATE);

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const renderMethod = !window.PRELOADED_STATE ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
    <App Router={BrowserRouter} store={store} />,
    document.querySelector('#root'),
);
