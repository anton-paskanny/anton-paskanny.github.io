import reducer from '../../client/reducers/movies';
import {
    fetchMovies,
    fetchMoviesSuccess,
    fetchMoviesByGenres,
    fetchMoviesByGenresSuccess,
    fetchMoviesError
} from '../../client/actions/movies';

import { getCmd, getModel } from 'redux-loop';

import { movies } from '../../client/utils';


describe('Movies reducer', () => {
    describe('Fetch movies', () => {
        let initialState, result, cmd;
        beforeEach(() => {
            initialState = {
                isFetching: false,
                data: [],
                moviesForSelectedMovie: [],
                err: null,
                total: null,
                offset: 0,
                limit: 10
            };
            result = reducer(initialState, fetchMovies('testUrl'));
            cmd = getCmd(result);
        });
        it('should return the initial state', () => {
           expect(reducer(initialState, {})).toEqual(initialState);
           expect(reducer(undefined, {})).toEqual(initialState);
        });
        it('should handle FETCH_MOVIES action', () => {
            expect(getModel(result)).toEqual({
                ...initialState,
                isFetching: true
            });
        });
        it('should handle FETCH_MOVIES_ERROR action', done => {
            const err = 'Some err';
            const action = fetchMoviesError(err);
    
            expect(cmd.simulate({success: false, result: err})).toEqual(action);
            expect(reducer(initialState, action)).toEqual({ ...initialState, err: action.err, isFetching: false });
    
            done();
        });
        it('should handle FETCH_MOVIES_SUCCESS action', done => {
            const res = { data: movies, limit: 10, offset: 0, total: 100 };
            const action = fetchMoviesSuccess(res);
    
            expect(cmd.simulate({success: true, result: res})).toEqual(action);
            expect(reducer(initialState, action)).toEqual({ 
                ...initialState,
                data: action.movies.data,
                total: action.movies.total,
                offset: action.movies.offset,
                limit: action.movies.limit,
                isFetching: false
            });
    
            done();
        });
    });
    describe('Fetch movies by genre', () => {
        let initialState, result, cmd;
        beforeEach(() => {
            initialState = {
                isFetching: false,
                data: [],
                moviesForSelectedMovie: [],
                err: null,
                total: null,
                offset: 0,
                limit: 10
            };
            result = reducer(initialState, fetchMoviesByGenres('testUrl'));
            cmd = getCmd(result);
        });
        it('should handle FETCH_MOVIES_BY_GENRES action', () => {
            expect(getModel(result)).toEqual({
                ...initialState,
                isFetching: true
            });
        });
        it('should handle FETCH_MOVIES_BY_GENRES_SUCCESS action', done => {
            const res = { data: movies };
            const action = fetchMoviesByGenresSuccess(res);
    
            expect(cmd.simulate({success: true, result: res})).toEqual(action);
            expect(reducer(initialState, action)).toEqual({ ...initialState, moviesForSelectedMovie: action.movies.data, isFetching: false });
    
            done();
        });
    });
});