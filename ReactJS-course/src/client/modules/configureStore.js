import { createStore, compose } from 'redux';
import { install } from 'redux-loop';
import { fromJS } from 'immutable';

import rootReducer from './rootReducer';

// HACK FOR SSR
if (typeof window === 'undefined') {
  global.window = {};
}

const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(install());

export default (initialState) => {
  const store = createStore(
    rootReducer,
    fromJS(initialState),
    enhancer,
  );

  return store;
};
