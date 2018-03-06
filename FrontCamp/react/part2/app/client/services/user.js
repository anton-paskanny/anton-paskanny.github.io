
export const logoutUser = () => (
  fetch('http://localhost:3000/users/logout', {
    credentials: 'include'
  })
  .then(res => res.json())
);

export const signInUser = data => (
  fetch('http://localhost:3000/users/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
);

export const signUpUser = data => (
  fetch('http://localhost:3000/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
)
