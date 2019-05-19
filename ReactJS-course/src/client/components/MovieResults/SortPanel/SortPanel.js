import React from 'react';

import { SORT_BY_CONFIG } from '../../../utils';

import './styles.css';


const SortPanel = (props) => {
  const renderSortByItems = () => SORT_BY_CONFIG.map(item => (
    <li key={item.name} className='sort-panel__filter-item'>
        <button className={
          `sort-panel__filter-btn${item.fieldToSortBy === props.sortType
            ? ' sort-panel__filter-btn--active' : ''}
          `}
        >
          {item.name}
        </button>
    </li>
  ));

  const handleSortByChange = (e) => {
    if (e.target.classList.contains('sort-panel__filter-btn--active')) {
      return;
    }

    const sortItem = SORT_BY_CONFIG.find(item => item.name === e.target.textContent);

    sortItem && sortItem.fieldToSortBy && props.toggleSort(sortItem.fieldToSortBy);
  };

  const renderContent = () => (
        <div className="sort-panel__inner-wrapper">
            <p>Sort by</p>
            <ul className="sort-panel__filters" onClick={handleSortByChange}>
                {renderSortByItems()}
            </ul>
        </div>
  );

  const renderCounterContent = () => {
    const { selectedMovie, movies } = props;

    if (selectedMovie) {
      const genres = selectedMovie.get('genres').map(genre => genre).join(', ');

      return `Films by ${genres} ${selectedMovie.get('genres').length > 1 ? 'genres' : 'genre'}`;
    }

    return `${movies.size} ${movies.size > 1 ? 'movies' : 'movie'} found`;
  };

  if (!props.movies || props.movies.length === 0) {
    return <div className="sort-panel" />;
  }

  return (
        <div className="sort-panel">
            <p className="sort-panel__results-counter">
                {renderCounterContent()}
            </p>
            {!props.selectedMovie && renderContent()}
        </div>
  );
};

export default SortPanel;
