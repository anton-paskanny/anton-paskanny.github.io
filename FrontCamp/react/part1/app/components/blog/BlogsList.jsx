import React from 'react';

import Blog from './Blog.jsx';

import "./styles.css";

export default class BlogsList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderBlogs() {
    return this.props.blogs.map((blog, index) => <Blog key={index} data={blog} />);
  }
  render() {
    return (
      <ul className="blogs">
        {this.renderBlogs()}
      </ul>
    )
  }
}
