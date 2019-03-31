export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_BY_GENRES = 'FETCH_MOVIES_BY_GENRES';
export const FETCH_MOVIES_BY_GENRES_SUCCESS = 'FETCH_MOVIES_BY_GENRES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const fetchMovies = url => ({
    type: FETCH_MOVIES,
    url
});

export const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    movies
});

export const fetchMoviesByGenres = url => ({
    type: FETCH_MOVIES_BY_GENRES,
    url
});

export const fetchMoviesByGenresSuccess = movies => ({
    type: FETCH_MOVIES_BY_GENRES_SUCCESS,
    movies
});

export const fetchMoviesError = err => ({
    type: FETCH_MOVIES_ERROR,
    err
});