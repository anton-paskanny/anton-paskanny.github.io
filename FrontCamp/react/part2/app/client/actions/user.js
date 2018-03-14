export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const LOG_OUT = 'LOG_OUT';
export const USER_ERROR = 'USER_ERROR';
export const IS_LOADING = 'IS_LOADING'


export const signIn = user => ({
  type: SIGN_IN,
  user
});

export const signUp = user => ({
  type: SIGN_UP,
  user
});

export const logOut = () => ({
  type: LOG_OUT
});

export const errorHandler = error => ({
  type: USER_ERROR,
  error
});

export const isLoading = () => ({
  type: IS_LOADING
});

export default { signIn, signUp, logOut, errorHandler, isLoading };
