import React, { Component } from 'react';

import SearchFilter from './SearchFilter/SearchFilter';
import SearchInput from './SearchInput/SearchInput';

import { URL_BASE } from '../../utils';

import styles from './styles.css';

class Search extends Component {
    state = {
        searchVal: '',
        searchBy: [
            {
                name: 'title',
                active: true
            },
            {
                name: 'genres',
                active: false
            }
        ]
    }

    handleInputChange = e => {
        this.setState({
            searchVal: e.target.value
        });
    }

    handleSearchByChange = e => {
        e.preventDefault();

        if (e.target.classList.contains('search-filter__filter-btn--active')) {
            return;
        }

        this.setState({
            searchBy: this.state.searchBy.map(el => {
                if (el.name === e.target.textContent) {
                    return {...el, active: !el.active};
                }

                return {...el, active: false};
            })
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (!this.state.searchVal.trim()) {
            return;
        }

        const searchVal = `search=${this.state.searchVal.trim()}&`;
        const searchBy = `searchBy=${this.state.searchBy.find(elem => elem.active).name}`;
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
                    <SearchFilter
                        searchByConfig={this.state.searchBy}
                        handleSearchByChange={this.handleSearchByChange}
                    />
                </form>
            </div>
        )
    }
}

export default Search;

