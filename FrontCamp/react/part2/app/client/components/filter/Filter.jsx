import React from 'react';

import './styles.css'


export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = {};
  }
  render() {
    return (
      <div className="filter">
        <h3 className="filter__title">
          Filter blogs by author's name
        </h3>
        <input type="text"
               placeholder="Author's name"
               onChange={this.props.filterByAuthor}
               className="filter__input"
               ref={input => this.searchInput = input}
        />
        {
          !this.props.blogsLength &&
          this.searchInput.value &&
          <p className="filter__error">Nothing was found</p>
        }
      </div>
    )
  }
}
