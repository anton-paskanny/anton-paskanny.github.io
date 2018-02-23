import React from 'react';

import BlogsCreationForm from './form/BlogsCreationForm.jsx';
import BlogsList from './blog/BlogsList.jsx';
import Filter from './filter/Filter.jsx';

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    };

    this.addBlog = this.addBlog.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
    this.filterByAuthor = this.filterByAuthor.bind(this);
  }
  addBlog(blog) {
    this.setState(prevState => ({
      blogs: [ ...prevState.blogs, blog]
    }));
  }
  deleteBlog(key) {
    const blogs = this.state.blogs.slice();
    blogs.splice(key, 1);

    this.setState({
      blogs
    });
  }
  filterByAuthor() {
    var filteredBlogs = this.state.blogs.sort((a, b) => {
      if (a.author < b.author) return -1;
      if (a.author > b.author) return 1;

      return 0;
    });

    this.setState({
      blogs: filteredBlogs
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Simple blogs app</h1>
        <BlogsCreationForm addBlog={this.addBlog} />
        <BlogsList blogs={this.state.blogs} deleteBlog={this.deleteBlog} />
        { this.state.blogs.length > 1 && <Filter filterByAuthor={this.filterByAuthor} /> }
      </React.Fragment>
    )
  }
}
