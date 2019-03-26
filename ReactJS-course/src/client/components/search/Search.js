import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovie } from '../../actions';

import SearchFilter from './SearchFilter/SearchFilter';
import SearchInput from './SearchInput/SearchInput';

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
                name: 'genre',
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
        console.log('Start searching movie - ', this.state.searchVal);
    }

    render() {
        return (
            <div className="search-panel">
                <h2 className="search-panel__title">Find your movie</h2>
                <SearchInput value={this.state.searchVal} handleInputChange={this.handleInputChange} />
                <SearchFilter onSubmit={this.handleSubmit} searchByConfig={this.state.searchBy} handleSearchByChange={this.handleSearchByChange} />
            </div>
        )
    }
}

function mapDispatchToProps() {
    return {
        searchMovie
    }
}

export default connect(null, mapDispatchToProps)(Search);

