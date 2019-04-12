import { mapStateToProps, mapDispatchToProps } from '../../client/containers/movieResults';
import { SORT_BY_DEFAULT } from '../../client/utils';
import { FETCH_MOVIES, FETCH_MOVIES_BY_GENRES } from '../../client/actions/movies';

describe('Movie results container', () => {
    it('should have correct search type', () => {
        const initialState = {
            sort: {
                type: SORT_BY_DEFAULT
            },
            selectedMovie: {
                data: []
            },
            movies: {
                data: [],
                moviesForSelectedMovie: [],
                isFetching: false
            }
        };


        expect(mapStateToProps(initialState).sortType).toEqual(SORT_BY_DEFAULT);
        expect(mapStateToProps(initialState).isFetching).toEqual(false);
    });

    it('should dispatch fetch movie action correctly', () => {
        const dispatch = jest.fn();
        const url = 'Some url';
        mapDispatchToProps(dispatch).fetchMovies(url);
        expect(dispatch.mock.calls[0][0]).toEqual({ type: FETCH_MOVIES, url});
    });

    it('should dispatch fetch movies by genre action correctly', () => {
        const dispatch = jest.fn();
        const url = 'Some url';
        mapDispatchToProps(dispatch).fetchMoviesByGenres(url);
        expect(dispatch.mock.calls[0][0]).toEqual({ type: FETCH_MOVIES_BY_GENRES, url});
    });
});