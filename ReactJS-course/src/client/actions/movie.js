export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

export const fetchMovie = url => ({
    type: FETCH_MOVIE,
    url
});

export const fetchMovieSuccess = movie => ({
    type: FETCH_MOVIE_SUCCESS,
    movie
});

export const fetchMovieError = err => ({
    type: FETCH_MOVIE_ERROR,
    err
});

export const selectMovie = movie => ({
    type: SELECT_MOVIE,
    movie
});

export const resetMovie = () => ({
    type: RESET_MOVIE
});