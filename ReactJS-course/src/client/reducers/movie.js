import { loop, Cmd } from 'redux-loop';

import {
    FETCH_MOVIE,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_ERROR,
    RESET_MOVIE,
    fetchMovieSuccess,
    fetchMovieError,
} from '../actions/movie';

const initialState = {
    isFetching: false,
    data: null,
    err: null
};

const fetchMovie = (url) => {
    return fetch(url).then(res => res.json());
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE:
            return loop(
                { ...state, isFetching: true },
                Cmd.run(fetchMovie, {
                    successActionCreator: fetchMovieSuccess,
                    failActionCreator: fetchMovieError,
                    args: [action.url]
                })
            );
        case FETCH_MOVIE_SUCCESS:
            return { ...state, data: action.movie, isFetching: false };
        case FETCH_MOVIE_ERROR:
            return { ...state, err: action.err, isFetching: false };
        case RESET_MOVIE:
            return { ...state, data: null }
        default:
            return state;
    } 
};

export default movieReducer;
