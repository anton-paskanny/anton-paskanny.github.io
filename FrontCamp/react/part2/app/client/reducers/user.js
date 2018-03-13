import { SET_LOGGED_IN } from '../actions/user';

export default (state = { isLoggedIn: false, data: null }, action) => {
  switch(action.type) {
    case SET_LOGGED_IN: {
      return {
        isLoggedIn: action.user ? true : false,
        data: action.user
      }
    }
    default: {
      return state;
    }
  }
}
