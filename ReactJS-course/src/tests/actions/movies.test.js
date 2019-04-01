import * as actions from '../../client/actions/movies';

import { URL_BASE } from '../../client/utils';

describe('movies actions', () => {
    it('should create an action to fetch array of movies', () => {
        const expectedAction = {
            type: actions.FETCH_MOVIES,
            url: URL_BASE
        };

        expect(actions.fetchMovies(URL_BASE)).toEqual(expectedAction);
    });

    it('should create an action to fetch array of movies with specific genres', () => {
        const url = `${URL_BASE}?filter=action,adventure`;
        const expectedAction = {
            type: actions.FETCH_MOVIES_BY_GENRES,
            url
        };

        expect(actions.fetchMoviesByGenres(url)).toEqual(expectedAction);
    });

    it('should create an action to findicate movies were successfully received', () => {
        const movies = {
            data: [
                {
                    id: 1,
                    title: 'Some movie 1'
                },
                {
                    id: 2,
                    title: 'Some movie 2'
                }
            ],
            total: 300,
            offset: 0,
            limit: 10
        };
        const expectedAction = {
            type: actions.FETCH_MOVIES_SUCCESS,
            movies
        };

        expect(actions.fetchMoviesSuccess(movies)).toEqual(expectedAction);
    });

    it('should create an action to indicate an error was occured during fetching', () => {
        const err = 'Some err';
        const expectedAction = {
            type: actions.FETCH_MOVIES_ERROR,
            err
        };

        expect(actions.fetchMoviesError(err)).toEqual(expectedAction);
    });

    it('should create an action for movies with specific genres', () => {
        const movies = {
            data: [
                {
                    id: 1,
                    title: 'Some movie 1',
                    genre: 'Adventure'
                },
                {
                    id: 2,
                    title: 'Some movie 2',
                    genre: 'Adventure'
                }
            ],
            total: 300,
            offset: 0,
            limit: 10
        };
        const expectedAction = {
            type: actions.FETCH_MOVIES_BY_GENRES_SUCCESS,
            movies
        };

        expect(actions.fetchMoviesByGenresSuccess(movies)).toEqual(expectedAction);
    });
});