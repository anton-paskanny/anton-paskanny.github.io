import { ADD_BLOG, DELETE_BLOG, FETCH_BLOGS } from './actionsTypes';
import serverConfig from '../../server/config';

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
      dispatch({
        type: ADD_BLOG,
        blog: res.blog
      });
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
      dispatch({
        type: DELETE_BLOG,
        _id: res._id
      });
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
      dispatch({
        type: FETCH_BLOGS,
        blogs: res.blogs
      });
    });

  }
}
