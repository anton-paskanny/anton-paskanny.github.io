import React, { PureComponent } from 'react';

import Movie from '../Movie/Movie';
import SortPanel from '../../containers/SortPanel';
import Spinner from '../shared/Spinner/Spinner';
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary';

import { URL_BASE } from '../../utils';

import './styles.css';

class MovieResults extends PureComponent {
  componentDidMount() {
    if (this.props.movieDetailPage && this.props.selectedMovie) {
      this.fetchMovies();
    }
  }

  componentDidUpdate(prevProps) {
    /**
     * 1. Take selected movies genres
     * 2. Create url
     * 3. Invoke action
     * 4. Update field movies (they are with the same genres as selected move has)
     */
    
    const { selectedMovie } = this.props;
    const { selectedMovie: prevSelectedMovie } = prevProps;

    if (selectedMovie && (!prevSelectedMovie || prevSelectedMovie.title !== selectedMovie.title)) {
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

    if (this.props.selectedMovie) {
      if (this.props.moviesForSelectedMovie.length) {
        /**
                 * Delete selected movie from received movies
                 */
        const movies = this.props.moviesForSelectedMovie.filter(elem => elem.id !== this.props.selectedMovie.id);

        if (!movies.length) {
          return <p className="results__no-items">No films found with the same genre</p>;
        }

        return movies.map(movie => <Movie key={movie.id} data={movie} />);
      }
      return <p className="results__no-items">No films found with the same genre</p>;
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
    const genres = this.props.selectedMovie.genres.map(genre => genre.toLowerCase()).join(',');
    const URL = `${URL_BASE}?filter=${genres}`;

    this.props.fetchMoviesByGenres(encodeURI(URL));
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

export default ErrorBoundary(MovieResults);
