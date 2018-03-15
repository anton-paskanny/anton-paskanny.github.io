import { connect } from 'react-redux';
import { addBlog } from '../thunks/blogs.js';

import CreateBlogForm from '../components/blogs/createBlog/CreateBlogForm.jsx';


const mapDispatchToProps = dispatch => ({
  addBlog(blog) {
    dispatch(addBlog(blog));
  }
})

export default connect(null, mapDispatchToProps)(CreateBlogForm);
