import { connect } from 'react-redux';
import { deleteBlog, fetchBlogs } from '../actions/blogs.js';
import Blogs from '../components/blogs/Blogs.jsx';


const mapStateToProps = state => ({
  blogs: state.blogs
});

const mapDispatchToProps = dispatch => ({
  fetchBlogs() {
    dispatch(fetchBlogs());
  },
  deleteBlog(id) {
    dispatch(deleteBlog(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
