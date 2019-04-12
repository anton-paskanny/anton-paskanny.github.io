import reducer from '../../client/reducers/search';
import { toggleSearch } from '../../client/actions/searchFilter';

let initialState;

describe('Sort reducer', () => {
    beforeEach(() => {
        initialState = {
            type: 'title'
        }
    });
    it('should return the initial state', () => {
       expect(reducer(initialState, {})).toEqual(initialState);
    });
    it('should handle TOGGLE_SEARCH action', () => {
        const action = toggleSearch('genres');
        const result = {
            type: 'genres'
        };
        expect(reducer(initialState, action)).toEqual(result);
    });
});