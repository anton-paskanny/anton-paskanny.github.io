// @flow
import React, { PureComponent } from 'react';

import { SEARCH_BY_CONFIG } from '../../../utils';

import './styles.css';

type Props = {
  searchType: string,
  toggleSearch: (text: string) => void
}

class SearchFilter extends PureComponent<Props> {
    handleSearchByChange = (e: { target: HTMLLIElement, preventDefault: () => void }) => {
      e.preventDefault();

      if (e.target.classList.contains('search-filter__filter-btn--active')) {
        return;
      }

      this.props.toggleSearch(e.target.textContent);
    }

    renderSearchByItems() {
      return SEARCH_BY_CONFIG.map(item => (
                <li key={item.name} className='search-filter__filter-item'>
                    <button
                        type="button"
                        className={
                            `search-filter__filter-btn${
                              item.name === this.props.searchType ? ' search-filter__filter-btn--active' : ''}`
                        }
                    >
                        {item.name}
                    </button>
                </li>
      ));
    }

    render() {
      return (
          <div className="search-filter">
            <div className="search-filter__inner-wrapper">
              <p className="search-filter__desc">Search by</p>
              <ul className="search-filter__filters" onClick={this.handleSearchByChange}>
                { this.renderSearchByItems() }
              </ul>
            </div>
            <button className="search-filter__search-btn" type="submit">
              Search
            </button>
          </div>
      );
    }
}

export default SearchFilter;
