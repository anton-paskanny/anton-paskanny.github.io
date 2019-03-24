import React from 'react';

import styles from './styles.css';

const SortPanel = () => {

    const renderSortByItems = () => {
        return this.props.searchByConfig.map((item) => {
            return (
                <li key={item.name} className='sort-panel__filter-item'>
                    <button className={'sort-panel__filter-btn' + (item.active ? ' sort-panel__filter-btn--active': '')}>{item.name}</button>
                </li>
            )
        });
    }

    return (
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
}

export default SortPanel;