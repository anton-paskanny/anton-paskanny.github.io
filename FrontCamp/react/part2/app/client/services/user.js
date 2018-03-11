import serverConfig from '../../server/config';

const baseUrl = `http://${serverConfig.db.host}:${serverConfig.port}`;


export const logoutUser = () => (
  fetch(`${baseUrl}/${serverConfig.routes.users.logout}`, {
    credentials: 'include'
  })
  .then(res => res.json())
);

export const signInUser = data => (
  fetch(`${baseUrl}/${serverConfig.routes.users.signin}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
);

export const signUpUser = data => (
  fetch(`${baseUrl}/${serverConfig.routes.users.signup}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
)
