import * as actions from '../../client/actions/movie';

import { URL_BASE } from '../../client/utils';

describe('movie actions', () => {
    it('should create an action to fetch single movie', () => {
      const url = `${URL_BASE}?id=123`;
      const expectedAction = {
        type: actions.FETCH_MOVIE,
        url
      };

      expect(actions.fetchMovie(url)).toEqual(expectedAction);
    });

    it('should create an action to indicate a movie was successfully received', () => {
        const movie = {
            id: 123,
            title: 'Test title'
        };
        const expectedAction = {
          type: actions.FETCH_MOVIE_SUCCESS,
          movie
        };

        expect(actions.fetchMovieSuccess(movie)).toEqual(expectedAction)
    });

    it('should create an action to indicate an error was occured during fetching', () => {
        const err = 'Some err';
        const expectedAction = {
          type: actions.FETCH_MOVIE_ERROR,
          err
        };

        expect(actions.fetchMovieError(err)).toEqual(expectedAction);
    });

    it('should create an action to indicate an error was occured during fetching', () => {
        const err = 'Some err';
        const expectedAction = {
          type: actions.FETCH_MOVIE_ERROR,
          err
        };

        expect(actions.fetchMovieError(err)).toEqual(expectedAction);
    });

    it('should create an action to reset selected movie', () => {
        const expectedAction = {
          type: actions.RESET_MOVIE
        };

        expect(actions.resetMovie()).toEqual(expectedAction);
    });
  });