import { fromJS, Map } from 'immutable';
import { loop, Cmd } from 'redux-loop';

import {
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  RESET_MOVIE,
  fetchMovieSuccess,
  fetchMovieError,
} from '../actions/movie';

const initialState = fromJS({
  isFetching: false,
  data: null,
  err: null,
});

const makeRequest = url => fetch(url).then(res => res.json());

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return loop(
        state.setIn(['isFetching'], true),
        Cmd.run(makeRequest, {
          successActionCreator: fetchMovieSuccess,
          failActionCreator: fetchMovieError,
          args: [action.url],
        }),
      );
    case FETCH_MOVIE_SUCCESS:
      return state.merge({
        data: Map(action.movie),
        isFetching: false
      });
    case FETCH_MOVIE_ERROR:
      return state.merge({
        err: action.err,
        isFetching: false,
      });
    case RESET_MOVIE:
      return state.merge({
        data: null,
      });
    default:
      return state;
  }
};

export default movieReducer;
