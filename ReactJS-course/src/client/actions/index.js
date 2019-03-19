export const SEARCH_MOVIE = 'SEARCH_MOVIE'

export const searchMovie = (type, value) => ({
    type: SEARCH_MOVIE,
    payload: {
        type,
        value
    }
});