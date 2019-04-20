import React from 'react';

import Header from '../../Header/Header';
import SearchResult from '../../../containers/SearchResult';
import Footer from '../../Footer/Footer';

const Search = ({ match }) => {
    const { searchVal, searchType } = match.params;
    return (
        <>
            <Header />
            <SearchResult searchPage={true} searchVal={searchVal} searchType={searchType} />
            <Footer />
        </>
    )
}

export default Search;