import { TOGGLE_SORT } from '../actions/sortPanel';

const initialState = {
    type: 'release_date'
};

const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SORT:
            return {
                type: action.payload
            }
        default:
            return state;
    } 
};

export default sortReducer;