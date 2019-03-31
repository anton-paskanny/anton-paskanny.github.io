import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { install, combineReducers } from 'redux-loop';
import { createStore, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import moviesReducer from './reducers/movies';
import movieReducer from './reducers/movie';

import App from './components/App';
import ErrorBoundary from './components/shared/ErrorBoundary/ErrorBoundary';

import normalize from './normalize.css';
import styles from './styles.css';

const enhancer = compose(
    install(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducer = combineReducers({
    movies: moviesReducer,
    selectedMovie: movieReducer
});

const store = createStore(
    rootReducer,
    /* preloaded state */
    enhancer
);

ReactDOM.render(
    <Provider store={store}>
         <Router>
             <ErrorBoundary>
                <App />
             </ErrorBoundary>
        </Router>
    </Provider>,
    document.querySelector('#root')
);