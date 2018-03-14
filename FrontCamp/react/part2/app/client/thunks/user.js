import serverConfig from '../../server/config';
import actions from '../actions/user';

const baseUrl = `http://${serverConfig.db.host}:${serverConfig.port}`;


export const signIn = user => {

  return dispatch => {

    dispatch(actions.isLoading());

    fetch(`${baseUrl}/${serverConfig.routes.users.signin}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
      res.success ?
      dispatch(actions.signIn(res.user)) :
      dispatch(actions.errorHandler(res.message));
    })
    .catch(err => {
      dispatch(actions.errorHandler(err.message));
    })
  }
}

export const signUp = user => {
  return dispatch => {

    dispatch(actions.isLoading());

    fetch(`${baseUrl}/${serverConfig.routes.users.signup}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
      res.success ?
      dispatch(actions.signUp(res.user)) :
      dispatch(actions.errorHandler(res.message));
    })
    .catch(err => {
      dispatch(actions.errorHandler(err.message));
    })
  }
}

export const logOut = () => {
  return dispatch => {
    fetch(`${baseUrl}/${serverConfig.routes.users.logout}`, {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(res => {
      res.success ?
      dispatch(actions.logOut()) :
      dispatch(actions.errorHandler(res.message));
    })
    .catch(err => {
      dispatch(actions.errorHandler(err.message));
    })
  }
}
