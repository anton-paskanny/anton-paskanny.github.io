import { combineReducers } from 'redux-loop-immutable';

import moviesReducer from '../reducers/movies';
import movieReducer from '../reducers/movie';
import sortReducer from '../reducers/sort';
import searchReducer from '../reducers/search';

const rootReducer = combineReducers({
  movies: moviesReducer,
  selectedMovie: movieReducer,
  sort: sortReducer,
  search: searchReducer,
});

export default rootReducer;
