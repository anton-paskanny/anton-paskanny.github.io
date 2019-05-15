import React from 'react';

const SearchInput = props => (
    <div className="search-panel__input-wrapper">
        <input name="movie"
               className="search-panel__input"
               value={props.value}
               onChange={props.handleInputChange}
        />
    </div>
);

export default SearchInput;
