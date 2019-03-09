import React, { Component } from 'react';

import SearchFilter from './search-filter/SearchFilter';
import SearchInput from './search-input/SearchInput';

class Search extends Component {
    state = {
        searchVal: ''
    }

    handleInputChange = e => {
        console.log("handleInputChange, e: ", e.target.value);
        this.setState({
            searchVal: e.target.value
        });
    }

    handleSubmit = e => {
        console.log('Start searching movie - ', this.state.searchVal);
    }

    render() {
        return (
            <div className="search">
                <h4>Find your movie</h4>
                <SearchInput value={this.state.searchVal} handleInputChange={this.handleInputChange} />
                <SearchFilter onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default Search;

