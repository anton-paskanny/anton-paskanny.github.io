import { TOGGLE_SEARCH } from '../actions/searchFilter';

const initialState = {
    type: 'title'
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SEARCH:
            return {
                type: action.payload
            }
        default:
            return state;
    } 
};

export default searchReducer;