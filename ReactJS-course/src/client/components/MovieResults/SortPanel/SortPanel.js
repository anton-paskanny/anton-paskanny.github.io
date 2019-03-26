import React from 'react';

import styles from './styles.css';

const SortPanel = props => {

    const renderSortByItems = () => {
        return props.sortByConfig.map((item) => (
                <li key={item.name} className='sort-panel__filter-item'>
                    <button className={'sort-panel__filter-btn' + (item.active ? ' sort-panel__filter-btn--active': '')}>{item.name}</button>
                </li>
            )
        );
    }

    return (
        <div className="sort-panel">
            <p className="sort-panel__results-counter">
                7 movies found
            </p>
            <div className="sort-panel__inner-wrapper">
                <p>Sort by</p>
                <ul className="sort-panel__filters" onClick={props.handleSortByChange}>
                    {renderSortByItems()}
                </ul>
            </div>
        </div>
    )
}

export default SortPanel;