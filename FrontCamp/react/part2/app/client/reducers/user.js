import { SIGN_IN, SIGN_UP, LOG_OUT, USER_ERROR, IS_LOADING } from '../actions/user';

const initialState = {
  isLoggedIn: false,
  data: null,
  error: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SIGN_IN: {
      return Object.assign({}, state, {
        isLoggedIn: true,
        data: action.user,
        error: null,
        isLoading: false
      });
      // return {
      //   isLoggedIn: true,
      //   data: action.user,
      //   error: null,
      //   isLoading: false
      // }
    }
    case SIGN_UP: {
      return {
        isLoggedIn: true,
        data: action.user,
        error: null,
        isLoading: false
      }
    }
    case LOG_OUT: {
      return Object.assign({}, state, {
        isLoggedIn: false,
        data: null
      });
    }
    case USER_ERROR: {
      return Object.assign({}, state, { error: action.error, isLoading: false });
    }
    case IS_LOADING: {
      return Object.assign({}, state, { isLoading: true })
    }
    default: {
      return state;
    }
  }
}
