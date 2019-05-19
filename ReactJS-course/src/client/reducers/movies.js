import { loop, Cmd } from 'redux-loop';
import { fromJS, List } from 'immutable';

import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_BY_GENRES,
  FETCH_MOVIES_BY_GENRES_SUCCESS,
  FETCH_MOVIES_ERROR,
  fetchMoviesSuccess,
  fetchMoviesByGenresSuccess,
  fetchMoviesError,
} from '../actions/movies';

const initialState = fromJS({
  isFetching: false,
  data: [],
  moviesForSelectedMovie: [],
  err: null,
  total: null,
  offset: 0,
  limit: 10,
});

const fetchMovies = url => fetch(url).then(res => res.json());

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return loop(
        state.setIn(['isFetching'], true),
        Cmd.run(fetchMovies, {
          successActionCreator: fetchMoviesSuccess,
          failActionCreator: fetchMoviesError,
          args: [action.url],
        }),
      );
    case FETCH_MOVIES_SUCCESS:
      return state.merge({
        data: List(action.movies.data),
        total: action.movies.total,
        offset: action.movies.offset,
        limit: action.movies.limit,
        isFetching: false,
      });
    case FETCH_MOVIES_BY_GENRES:
      return loop(
        state.setIn(['isFetching'], true),
        Cmd.run(fetchMovies, {
          successActionCreator: fetchMoviesByGenresSuccess,
          failActionCreator: fetchMoviesError,
          args: [action.url],
        }),
      );
    case FETCH_MOVIES_BY_GENRES_SUCCESS:
      return state.merge({
        moviesForSelectedMovie: List(action.movies.data),
        isFetching: false,
      });
    case FETCH_MOVIES_ERROR:
      return state.merge({
        err: action.err,
        isFetching: false,
      });
    default:
      return state;
  }
};

export default moviesReducer;
