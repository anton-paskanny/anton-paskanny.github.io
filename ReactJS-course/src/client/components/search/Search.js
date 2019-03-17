import React, { Component } from 'react';

import SearchFilter from './search-filter/SearchFilter';
import SearchInput from './search-input/SearchInput';

import styles from './styles.css';

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
            <div className="search-panel">
                <h2 className="search-panel__title">Find your movie</h2>
                <SearchInput value={this.state.searchVal} handleInputChange={this.handleInputChange} />
                <SearchFilter onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default Search;

