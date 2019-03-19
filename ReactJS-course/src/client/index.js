import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import moviesReducer from './reducers/movies';

import App from './components/App';

import normalize from './normalize.css';
import styles from './styles.css';

ReactDOM.render(
    <Provider store={createStore(moviesReducer)}>
         <Router>
            <App />
        </Router>
    </Provider>,
    document.querySelector('#root')
);