import { mapStateToProps, mapDispatchToProps } from '../../client/containers/SortPanel';
import { SORT_BY_DEFAULT } from '../../client/utils';
import { TOGGLE_SORT } from '../../client/actions/sortPanel';

describe('SortPanel container', () => {
    it('should have correct sort type', () => {
        const initialState = {
            sort: {
                type: SORT_BY_DEFAULT
            },
            selectedMovie: {
                data: []
            },
            movies: {
                data: []
            }
        };

        expect(mapStateToProps(initialState).sortType).toEqual(SORT_BY_DEFAULT);
    });

    it('should dispatch sort action correctly', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).toggleSort(SORT_BY_DEFAULT);
        expect(dispatch.mock.calls[0][0]).toEqual({ type: TOGGLE_SORT, payload: SORT_BY_DEFAULT});
    });
});