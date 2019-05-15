import React, { PureComponent } from 'react';

import Movie from '../Movie/Movie';
import SortPanel from '../../containers/SortPanel';
import Spinner from '../shared/Spinner/Spinner';
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary';

import { URL_BASE } from '../../utils';

import './styles.css';

class SearchResult extends PureComponent {
  componentDidMount() {
    this.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    /**
         * 1. Check if searchVal or searchType has changed
         * 2. If so - make new request
         */
    const { searchVal: searchValPrev, searchType: searchTypePrev } = prevProps;
    const { searchVal, searchType } = this.props;

    if (searchValPrev !== searchVal || searchType !== searchTypePrev) {
      this.fetchMovies();
    }
  }

  renderItems() {
    if (this.props.isFetching) {
      return <Spinner />;
    }

    if (this.props.movies.length === 0) {
      return <p className="results__no-items">No films found</p>;
    }

    return this.sortMovies().map(movie => <Movie key={movie.id} data={movie} />);
  }

  sortMovies() {
    const fieldToSortBy = this.props.sortType;

    return this.props.movies.slice().sort((a, b) => {
      if (fieldToSortBy === 'release_date') {
        return new Date(b[fieldToSortBy]) - new Date(a[fieldToSortBy]);
      }

      return b[fieldToSortBy] - a[fieldToSortBy];
    });
  }

  fetchMovies() {
    const { searchVal, searchType, fetchMovies } = this.props;
    const URL = `${URL_BASE}?search=${searchVal}&searchBy=${searchType}`;

    fetchMovies(URL);
  }

  render() {
    return (
            <div className="results">
                <SortPanel />
                <div className={`results__items ${this.props.isFetching ? 'results__items--fetching' : ''}`}>
                    {this.renderItems()}
                </div>
            </div>
    );
  }
}

export default ErrorBoundary(SearchResult);
