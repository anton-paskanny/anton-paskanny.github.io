import { loop, Cmd } from 'redux-loop';

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

const initialState = {
  isFetching: false,
  data: [],
  moviesForSelectedMovie: [],
  err: null,
  total: null,
  offset: 0,
  limit: 10,
};

const fetchMovies = url => fetch(url).then(res => res.json());

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return loop(
        { ...state, isFetching: true },
        Cmd.run(fetchMovies, {
          successActionCreator: fetchMoviesSuccess,
          failActionCreator: fetchMoviesError,
          args: [action.url],
        }),
      );
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.movies.data,
        total: action.movies.total,
        offset: action.movies.offset,
        limit: action.movies.limit,
        isFetching: false,
      };
    case FETCH_MOVIES_BY_GENRES:
      return loop(
        { ...state, isFetching: true },
        Cmd.run(fetchMovies, {
          successActionCreator: fetchMoviesByGenresSuccess,
          failActionCreator: fetchMoviesError,
          args: [action.url],
        }),
      );
    case FETCH_MOVIES_BY_GENRES_SUCCESS:
      return { ...state, moviesForSelectedMovie: action.movies.data, isFetching: false };
    case FETCH_MOVIES_ERROR:
      return { ...state, err: action.err, isFetching: false };
    default:
      return state;
  }
};

export default moviesReducer;
