import { SET_LOGGED_IN } from './actionsTypes';

export const setLoggedIn = user => ({
  type: SET_LOGGED_IN,
  user
});
