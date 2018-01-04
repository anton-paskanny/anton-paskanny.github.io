/*
 * Reducers are responsible for updating the app's state according to actions
 */

import { ADD_NEWS, ADD_SOURCES } from './actions.js';

export const newsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return action.news;
    default:
      return state;
  }
}

export const sourcesReducer = (state, action) => {
  switch (action.type) {
    case ADD_SOURCES:
      return action.sources;
    default:
      return state;
  }
}
