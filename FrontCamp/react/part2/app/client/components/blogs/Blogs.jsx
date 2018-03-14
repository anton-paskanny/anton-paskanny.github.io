import React from 'react';

import AddBlogBtn from '../addBlogBtn/AddBlogBtn.jsx';
import BlogsList from './list/BlogsList.jsx';
import CreateBlogForm from '../../containers/CreateBlogForm.jsx';
import Filter from '../filter/Filter.jsx';
import Overlay from '..//overlay/Overlay.jsx';

import './styles.css';


export default class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: this.props.blogs,
      showPopup: false,
      searchValue: ''
    };

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
  filterBlogsArray(blogs, searchVal) {
    return blogs.filter((blog, index) => {
      return blog.author.toLowerCase().search(searchVal.toLowerCase()) !== -1;
    });
  }
  filterByAuthor(event) {
    const searchVal = event.target.value;

    if (searchVal.trim()) {
      const blogs = this.filterBlogsArray(this.props.blogs, searchVal);
      this.setState({
        blogs,
        searchVal
      });
    }
    else {
      this.setState({
        blogs: this.props.blogs,
        searchVal: ''
      });
    }
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.blogs !== nextProps.blogs) {
      this.setState({
        blogs: this.state.searchVal ?
               this.filterBlogsArray(nextProps.blogs, this.state.searchVal) :
               nextProps.blogs
      });
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.hidePopupOnEscKeyPress.bind(this), false);

    // make async request to get blogs from MongoDB
    this.props.fetchBlogs();
  }
  render() {
    return (
      <div>
        <h1>Simple blogs app</h1>
        <AddBlogBtn togglePopup={this.togglePopup} />
        <Filter filterByAuthor={this.filterByAuthor} blogsLength={this.state.blogs.length} />
        <BlogsList blogs={this.state.blogs} deleteBlog={this.props.deleteBlog} />
        {
          this.state.showPopup &&
          <Overlay component={<CreateBlogForm togglePopup={this.togglePopup} />} />
        }
      </div>
    )
  }
}
