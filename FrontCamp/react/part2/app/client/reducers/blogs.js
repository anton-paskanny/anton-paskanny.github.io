import { ADD_BLOG, DELETE_BLOG, FETCH_BLOGS } from '../actions/blogs.js';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_BLOG: {
      return [ ...state, action.blog ]
    }
    case DELETE_BLOG: {
      return state.filter(blog => blog._id !== action._id);
    }
    case FETCH_BLOGS: {
      return action.blogs;
    }
    default: {
      return state;
    }
  }
}
