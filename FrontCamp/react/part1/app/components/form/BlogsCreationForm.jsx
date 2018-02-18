import React from 'react';

import "./styles.css";

export default class CreateBlogForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      description: '',
      showError: false
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.author.length === 0 || this.state.description.length === 0) {
      this.setState({
        showError: true
      });
    }
    else {
      this.setState({
        showError: false
      });

      this.props.addBlog(this.state);
    }
  }
  handleAuthorChange(event) {
    this.setState({
      author: event.target.value
    });
  }
  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="form__input"
               type="text"
               value={this.test}
               onChange={this.handleAuthorChange}
               placeholder="Author"
        />
        <textarea className="form__textarea"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                  placeholder="Description"
        />
        <input className="form__submit" type="submit" value="Send"/>
        { this.state.showError && <p className="form__error">Please, fill in all necessary fields</p> }
      </form>
    )
  }
}
