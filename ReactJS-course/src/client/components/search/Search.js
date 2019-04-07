import React, { Component } from 'react';

import SearchFilter from '../../containers/SearchFilter';
import SearchInput from './SearchInput/SearchInput';

import { URL_BASE } from '../../utils';

import styles from './styles.css';

class Search extends Component {
    state = {
        searchVal: ''
    }

    handleInputChange = e => {
        this.setState({
            searchVal: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (!this.state.searchVal.trim()) {
            return;
        }

        const searchVal = `search=${this.state.searchVal.trim()}&`;
        const searchBy = `searchBy=${this.props.searchType}`;
        const URL = `${URL_BASE}?${searchVal}${searchBy}`;

        this.props.fetchMovies(encodeURI(URL));
    }

    render() {
        return (
            <div className="search-panel">
                <h2 className="search-panel__title">Find your movie</h2>
                <form onSubmit={this.handleSubmit}>
                    <SearchInput
                        value={this.state.searchVal}
                        handleInputChange={this.handleInputChange}
                    />
                    <SearchFilter />
                </form>
            </div>
        )
    }
}

export default Search;

