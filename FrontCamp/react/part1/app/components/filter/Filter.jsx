import React from 'react';

import './styles.css'

export default (props) => (
  <div className="filter">
    <h3 className="filter__title">
      Filter blogs by author's name
    </h3>
    <input type="text"
           placeholder="Author's name"
           onChange={props.filterByAuthor}
           className="filter__input"
           disabled={props.blogsLength === 0}
    />
    { props.showFilteringError && <p className="filter__error">Nothing was found</p> }
  </div>
)
