import React from 'react';

import './styles.css'

export default (props) => (
  <button type="button" className="filter__btn" onClick={props.filterByAuthor}>
    Filter by author
  </button>
)
