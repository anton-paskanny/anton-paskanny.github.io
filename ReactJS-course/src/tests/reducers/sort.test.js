import reducer from '../../client/reducers/sort';
import { toggleSort } from '../../client/actions/sortPanel';

let initialState;

describe('Sort reducer', () => {
    beforeEach(() => {
        initialState = {
            type: 'release_date'
        }
    });
    it('should return the initial state', () => {
       expect(reducer(initialState, {})).toEqual(initialState);
    });
    it('should handle TOGGLE_SORT action', () => {
        const action = toggleSort('vote_average');
        const result = {
            type: 'vote_average'
        };
        expect(reducer(initialState, action)).toEqual(result);
    });
});