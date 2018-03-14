export const ADD_BLOG = "ADD_BLOG";
export const DELETE_BLOG = "DELETE_BLOG";
export const FETCH_BLOGS = "FETCH_BLOGS";


export const addBlog = blog => ({
  type: ADD_BLOG,
  blog
});

export const deleteBlog = _id => ({
  type: DELETE_BLOG,
  _id
});

export const fetchBlogs = blogs => ({
  type: FETCH_BLOGS,
  blogs
});

export default { addBlog, deleteBlog, fetchBlogs };
