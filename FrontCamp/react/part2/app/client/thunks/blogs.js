import serverConfig from '../../server/config';
import actions from '../actions/blogs';

const baseUrl = `http://${serverConfig.db.host}:${serverConfig.port}/${serverConfig.routes.blogs.base}`;


export const addBlog = blog => {
  return dispatch => {

    return fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
      credentials: 'include',
      mode: 'cors'
    })
    .then(res => res.json())
    .then(res => {
      dispatch(actions.addBlog());
    });

  }
}

export const deleteBlog = id => {
  return dispatch => {

    return fetch(`${baseUrl}/${encodeURI(id)}`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(res => {
      dispatch(actions.deleteBlog());
    });
  }
}

export const fetchBlogs = () => {
  return dispatch => {

    return fetch(baseUrl, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(res => {
      dispatch(actions.fetchBlogs(res.blogs));
    });

  }
}
