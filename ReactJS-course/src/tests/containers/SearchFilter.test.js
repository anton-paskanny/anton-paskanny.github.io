import { mapStateToProps, mapDispatchToProps } from '../../client/containers/SearchFilter';
import { SEARCH_BY_DEFAULT } from '../../client/utils';
import { TOGGLE_SEARCH } from '../../client/actions/searchFilter';

describe('SortPanel container', () => {
    it('should have correct search type', () => {
        const initialState = {
            search: {
                type: SEARCH_BY_DEFAULT
            }
        };

        expect(mapStateToProps(initialState).searchType).toEqual(SEARCH_BY_DEFAULT);
    });

    it('should dispatch search action correctly', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).toggleSearch(SEARCH_BY_DEFAULT);
        expect(dispatch.mock.calls[0][0]).toEqual({ type: TOGGLE_SEARCH, payload: SEARCH_BY_DEFAULT});
    });
});