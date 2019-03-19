import { SEARCH_MOVIE } from '../actions';

const initialState = {
    movies: []
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIE:
            return [ ...state ];
        default:
            return state;
    } 
};

export default moviesReducer;

