import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { install, combineReducers } from 'redux-loop';
import { createStore, compose } from 'redux';

import moviesReducer from './reducers/movies';
import movieReducer from './reducers/movie';
import sortReducer from './reducers/sort';
import searchReducer from './reducers/search';

import App from './components/App';

import { loadState, saveState } from './localStorage';
import { throttle } from './utils';

import normalize from './normalize.css';
import styles from './styles.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(install());

const rootReducer = combineReducers({
    movies: moviesReducer,
    selectedMovie: movieReducer,
    sort: sortReducer,
    search: searchReducer
});

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    enhancer
);

store.subscribe(throttle(() => {
    saveState({
        movies: {
            ...store.getState().movies,
            isFetching: false
        }
    });
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);