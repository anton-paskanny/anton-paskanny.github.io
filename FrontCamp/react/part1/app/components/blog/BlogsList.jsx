import React from 'react';

import Blog from './Blog.jsx';

import "./styles.css";

export default class BlogsList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderBlogs() {
    return this.props.blogs.map((blog, index) => {
      return <Blog key={index}
                   data={blog}
                   deleteBlog={this.props.deleteBlog}
                   index={index}
             />;
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
