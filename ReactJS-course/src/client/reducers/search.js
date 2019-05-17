import { TOGGLE_SEARCH } from '../actions/searchFilter';

import { SEARCH_BY_DEFAULT } from '../utils';

const initialState = {
  type: SEARCH_BY_DEFAULT,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return {
        type: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
