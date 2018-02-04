import { FETCH_NEWS, FETCH_SOURCES, START_FETCHING, FINISH_FETCHING } from './actions.js';

/*
 * Reducers are responsible for updating the app's state according to actions
 */

export const newsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return action.news;
    default:
      return state;
  }
}

export const sourcesReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SOURCES:
      return action.sources;
    default:
      return state;
  }
}

export const loadingReducer = (state, action) => {
  switch (action.type) {
    case START_FETCHING:
      return true;
    case FINISH_FETCHING:
      // If statement for the first fetching data when the app was opened.
      // By default news and sources are equals to null.
      // Loading animation must be shown while both news and sources are null in App's state.
      if (!state.news || !state.sources) return true;
      return false;
    default:
      return state.isLoading;
  }
}
