export const ADD_BLOG = "ADD_BLOG";
export const DELETE_BLOG = "DELETE_BLOG";
export const FETCH_BLOGS = "FETCH_BLOGS";


export const addBlog = blog => {
  return dispatch => {

    fetch('http://localhost:3000/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
      credentials: 'include',
      mode: 'cors'
    })
    .then(res => res.json())
    .then(res => {
      console.log('Add blog, response: ', res);

      dispatch({
        type: ADD_BLOG,
        blog: res.blog
      });
    });

  }
}

export const deleteBlog = id => {
    fetch('http://localhost:3000/api/blogs/' + encodeURI(id), {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include'
    });

    return {
      type: DELETE_BLOG,
      _id: id
    }
}

export const fetchBlogs = () => {
  return dispatch => {

    fetch('http://localhost:3000/api/blogs', {
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
