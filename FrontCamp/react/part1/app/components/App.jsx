import React from 'react';

import BlogsCreationForm from './form/BlogsCreationForm.jsx';
import BlogsList from './blog/BlogsList.jsx';
import Filter from './filter/Filter.jsx';
import AddBlogBtn from './addBlogBtn/AddBlogBtn.jsx';
import Overlay from './overlay/Overlay.jsx';

import "./styles.css";
import "./normalize.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      filteredBlogs: [],
      showPopup: false,
      showFilteringError: false,
      showInitialBlogs: true,
      searchValue: ''
    };

    this.addBlog = this.addBlog.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
    this.filterByAuthor = this.filterByAuthor.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }
  hidePopupOnEscKeyPress(event) {
    if (this.state.showPopup && event.keyCode === 27) {
      this.setState({
        showPopup: false
      });
    }
  }
  /**
   * Add new blog into blogs array.
   * @constructor
   * @param {object} blog - blog to add
   */
  addBlog(blog) {
    this.setState(prevState => ({
      blogs: [ ...prevState.blogs, blog]
    }));
  }
  /**
   * Delete blog from initial and filtered array.
   * @constructor
   * @param {number} index - blog's index in added blogs array (initial array)
   * @param {number} filteredIndex - blog's index in filtered blogs array
   * New blogs are added into blogs array !!!
   */
  deleteBlog(key, filteredKey) {
    const blogs = this.state.blogs.slice();
    blogs.splice(key, 1);

    if (typeof filteredKey === 'number') {

      const filteredBlogs = this.filterBlogsArray(blogs, this.state.searchValue);

      this.setState({
        blogs,
        filteredBlogs,
        showFilteringError: filteredBlogs.length === 0 && blogs.length !== 0 ? true : false,
      });

      return;
    }

    this.setState({
      blogs,
    });
  }
  filterBlogsArray(blogs, searchVal) {
    return blogs.filter((blog, index) => {

      if (blog.author.toLowerCase().search(searchVal.toLowerCase()) !== -1) {
        return Object.assign(blog, {index: index});
      }

      return false;
    });
  }
  filterByAuthor(event) {

    if (event.target.value.length === 0) {
      this.setState({
        showInitialBlogs: true,
        showFilteringError: false,
        searchValue: '',
        filteredBlogs: []
      });

      return;
    }

    const filteredBlogs = this.filterBlogsArray(this.state.blogs, event.target.value);

    this.setState({
      filteredBlogs,
      showFilteringError: filteredBlogs.length === 0 ? true : false,
      showInitialBlogs: false,
      searchValue: event.target.value
    });
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  componentDidMount(){
    document.addEventListener("keydown", this.hidePopupOnEscKeyPress.bind(this), false);
  }
  render() {
    return (
      <React.Fragment>
        <h1>Simple blogs app</h1>
        <AddBlogBtn togglePopup={this.togglePopup} />
        <Filter filterByAuthor={this.filterByAuthor}
                blogsLength={this.state.blogs.length}
                showFilteringError={this.state.showFilteringError}
        />
        <BlogsList blogs={this.state.blogs}
                   filteredBlogs={this.state.filteredBlogs}
                   showInitialBlogs={this.state.showInitialBlogs}
                   deleteBlog={this.deleteBlog}
        />
        {
          this.state.showPopup &&
          <Overlay component={<BlogsCreationForm addBlog={this.addBlog} togglePopup={this.togglePopup} />} />
        }
      </React.Fragment>
    )
  }
}
