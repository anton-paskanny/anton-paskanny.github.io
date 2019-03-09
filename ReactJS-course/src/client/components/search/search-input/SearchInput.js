import React from 'react';

const SearchInput = props => (
    <div className="search__input-wrapper">
        <input name="movie" value={props.value} onChange={props.handleInputChange}/>
    </div>
)

export default SearchInput;