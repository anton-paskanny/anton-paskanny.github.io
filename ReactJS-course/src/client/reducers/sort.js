import { TOGGLE_SORT } from '../actions/sortPanel';
import { SORT_BY_DEFAULT } from '../utils';

const initialState = {
  type: SORT_BY_DEFAULT,
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SORT:
      return {
        type: action.payload,
      };
    default:
      return state;
  }
};

export default sortReducer;
