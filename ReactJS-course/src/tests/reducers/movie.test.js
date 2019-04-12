import reducer from '../../client/reducers/movie';
import {
    fetchMovie,
    fetchMovieSuccess,
    fetchMovieError,
    resetMovie
} from '../../client/actions/movie';

import { getCmd, getModel } from 'redux-loop';

import { movieItem } from '../../client/utils';

let initialState, result, cmd;

describe('Movie reducer', () => {
    beforeEach(() => {
        initialState = {
            isFetching: false,
            data: null,
            err: null
        };
        result = reducer(initialState, fetchMovie('testUrl'));
        cmd = getCmd(result);
    });
    it('should return the initial state', () => {
       expect(reducer(initialState, {})).toEqual(initialState);
       expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('should handle FETCH_MOVIE action', () => {
        expect(getModel(result)).toEqual({
            ...initialState,
            isFetching: true
        });
    });
    it('should handle FETCH_MOVIE_ERROR action', done => {
        const action = fetchMovieError('error');

        expect(cmd.simulate({success: false, result: 'error'})).toEqual(action);
        expect(reducer(initialState, action)).toEqual({ ...initialState, err: action.err, isFetching: false });

        done();
    });
    it('should handle FETCH_MOVIE_SUCCESS action', done => {
        const action = fetchMovieSuccess(movieItem);

        expect(cmd.simulate({success: true, result: movieItem})).toEqual(action);
        expect(reducer(initialState, action)).toEqual({ ...initialState, data: action.movie, isFetching: false });

        done();
    });
    it('should handle RESET_MOVIE action', () => {
        expect(reducer(initialState, resetMovie())).toEqual({ ...initialState, data: null });
    });
});