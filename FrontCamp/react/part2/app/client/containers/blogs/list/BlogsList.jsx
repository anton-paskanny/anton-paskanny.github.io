import React from 'react';

import Blog from '../blog/Blog.jsx';


export default class BlogsList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderBlogs() {
    return this.props.blogs.map(blog => {
      return <Blog key={blog._id} data={blog} deleteBlog={this.props.deleteBlog} />;
    });
  }
  render() {
    return (
      <ul className="blogs">
        {this.renderBlogs()}
      </ul>
    )
  }
}
