import React from 'react';

import styles from './styles.css';

const SortPanel = () => (
    <div className="sort-panel">
        <p className="sort-panel__results-counter">
            7 movies found
        </p>
        <div className="sort-panel__inner-wrapper">
            <p>Sort by</p>
            <ul className="sort-panel__filters">
                <li className="sort-panel__filter-item sort-panel__filter-item--active">release date</li>
                <li className="sort-panel__filter-item">rating</li>
            </ul>
        </div>
    </div>
)

export default SortPanel;