import React from 'react';

import Header from '../../Header/Header';
import SearchResult from '../../../containers/SearchResult';

const Search = ({ match }) => {
    const { searchVal, searchType } = match.params;
    return (
        <>
            <Header />
            <SearchResult searchPage={true} searchVal={searchVal} searchType={searchType} />
        </>
    )
}

export default Search;