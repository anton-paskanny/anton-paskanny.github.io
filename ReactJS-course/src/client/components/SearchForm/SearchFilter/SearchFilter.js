// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { SEARCH_BY_CONFIG } from '../../../utils';

type Props = {
  searchType: string,
  className: string,
  toggleSearch: (text: string) => void
}

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const SearchFiltersList = styled.ul`
  display: flex;
`;

const SearchDesc = styled.p`
  color: #fff;
  text-transform: uppercase;
`;

const SearchBtn = styled(SearchDesc)`
  padding: 5px 30px;
  font-size: 14px;
  border: none;
  background-color: var(--primary-color);
  -webkit-appearance: none
`;

const FilterItemBtn = styled(SearchDesc)`
  display: block;
  margin-left: 10px;
  padding: 5px 15px;
  border: none;
  background-color: var(${props => props.primary ? '--primary-color' : '--secondary-color'});
`;

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
                  <FilterItemBtn primary={item.name === this.props.searchType ? true : false}>
                    {item.name}
                  </FilterItemBtn>
                </li>
      ));
    }

    render() {
      return (
          <div className={this.props.className}>
            <InnerWrapper>
              <SearchDesc>Search by</SearchDesc>
              <SearchFiltersList onClick={this.handleSearchByChange}>
                { this.renderSearchByItems() }
              </SearchFiltersList>
            </InnerWrapper>
            <SearchBtn type="submit">
              Search
            </SearchBtn>
          </div>
      );
    }
}

export default styled(SearchFilter)`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  z-index: 3;
  color: #fff;
`;
