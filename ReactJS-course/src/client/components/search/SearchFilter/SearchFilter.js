import React, { PureComponent } from 'react';

import styles from './styles.css';

class SearchFilter extends PureComponent {
    renderSearchByItems() {
        return this.props.searchByConfig.map((item) => {
            return (
                <li key={item.name} className='search-filter__filter-item'>
                    <button type="button" className={'search-filter__filter-btn' + (item.active ? ' search-filter__filter-btn--active': '')}>{item.name}</button>
                </li>
            )
        });
    }

    render() {
        return (
            <div className="search-filter">
                    <div className="search-filter__inner-wrapper">
                        <p className="search-filter__desc">Search by</p>
                        <ul className="search-filter__filters" onClick={this.props.handleSearchByChange}>
                            { this.renderSearchByItems() }
                        </ul>
                    </div>
                    <button className="search-filter__search-btn" type="submit">
                        Search
                    </button>
            </div>
        )
    }
}

export default SearchFilter;