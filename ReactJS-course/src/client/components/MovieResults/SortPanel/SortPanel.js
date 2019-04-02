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

    const renderContent = () => (
        <div className="sort-panel__inner-wrapper">
            <p>Sort by</p>
            <ul className="sort-panel__filters" onClick={props.handleSortByChange}>
                {renderSortByItems()}
            </ul>
        </div>
    );

    const renderCounterContent = () => {
        if (props.selectedMovie) {
            const genres = props.selectedMovie.genres.map(genre => genre).join(', ');

            return `Films by ${genres} ${props.selectedMovie.genres.length > 1 ? 'genres' : 'genre'}`;
        }

        return `${props.movies.length} ${props.movies.length > 1 ? 'movies' : 'movie'} found`;
    };

    
    if (props.movies.length === 0) {
        return null;
    }

    return (
        <div className="sort-panel">
            <p className="sort-panel__results-counter">
                {renderCounterContent()}
            </p>
            {!props.selectedMovie && renderContent()}
        </div>
    )
}

export default SortPanel;