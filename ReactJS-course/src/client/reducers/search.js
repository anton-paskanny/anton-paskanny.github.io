import { Map } from 'immutable';
import { TOGGLE_SEARCH } from '../actions/searchFilter';

import { SEARCH_BY_DEFAULT } from '../utils';

const initialState = Map({
  type: SEARCH_BY_DEFAULT,
});

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return state.setIn(['type'], action.payload);
    default:
      return state;
  }
};

export default searchReducer;
