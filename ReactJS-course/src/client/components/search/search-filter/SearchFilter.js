import React, { PureComponent } from 'react';

import styles from './styles.css';

class SearchFilter extends PureComponent {
    render() {
        console.log("Render search filter");

        return (
            <div className="search-filter">
                    <div className="search-filter__inner-wrapper">
                        <p className="search-filter__desc">Search by</p>
                        <ul className="search-filter__filters">
                            <li className="search-filter__filter-item">
                                <button className="search-filter__filter-btn">Title</button>
                            </li>
                            <li className="search-filter__filter-item">
                                <button className="search-filter__filter-btn">Genre</button>
                            </li>
                        </ul>
                    </div>
                    <button className="search-filter__search-btn" onSubmit={this.props.handleSubmit}>
                        Search
                    </button>
            </div>
        )
    }
}

export default SearchFilter;