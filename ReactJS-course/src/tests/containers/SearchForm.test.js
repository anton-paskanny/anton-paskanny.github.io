import { mapStateToProps, mapDispatchToProps } from '../../client/containers/SearchForm';
import { SEARCH_BY_DEFAULT } from '../../client/utils';
import { FETCH_MOVIES } from '../../client/actions/movies';

describe('Search container', () => {
    it('should have correct search type', () => {
        const initialState = {
            search: {
                type: SEARCH_BY_DEFAULT
            }
        };

        expect(mapStateToProps(initialState).searchType).toEqual(SEARCH_BY_DEFAULT);
    });

    it('should dispatch fetch movie action correctly', () => {
        const dispatch = jest.fn();
        const url = 'Some url';
        mapDispatchToProps(dispatch).fetchMovies(url);
        expect(dispatch.mock.calls[0][0]).toEqual({ type: FETCH_MOVIES, url});
    });
});