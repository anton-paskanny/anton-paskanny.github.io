import React from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../../../actions/blogs.js';

import "./styles.css";


class CreateBlogForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: '',
      showError: false
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.author.length === 0 || this.state.text.length === 0) {
      this.setState({
        showError: true
      });
    }
    else {
      this.props.addBlog({
        author: this.state.author,
        text: this.state.text
      });

      this.setState({
          author: '',
          text: '',
          showError: false
      });
    }
  }
  handleAuthorChange(event) {
    this.setState({
      author: event.target.value
    });
  }
  handleDescriptionChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h2 className="form__title">
          Add new blog
        </h2>
        <button className="form__close-btn" type="button" onClick={this.props.togglePopup}>&times;</button>
        <input className="form__input"
               type="text"
               value={this.state.author}
               onChange={this.handleAuthorChange}
               placeholder="Author"
        />
        <textarea className="form__textarea"
                  value={this.state.text}
                  onChange={this.handleDescriptionChange}
                  placeholder="Description"
        />
        <input className="form__submit" type="submit" value="Send"/>
        { this.state.showError && <p className="form__error">Please, fill in all necessary fields</p> }
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBlog(blog) {
    dispatch(addBlog(blog));
  }
})

export default connect(null, mapDispatchToProps)(CreateBlogForm);
