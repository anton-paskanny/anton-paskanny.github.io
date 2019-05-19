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

    if (selectedMovie && (!prevSelectedMovie || prevSelectedMovie.get('title') !== selectedMovie.get('title'))) {
      this.fetchMovies();
    }
  }

  renderItems() {
    const { isFetching, movies, moviesForSelectedMovie, selectedMovie } = this.props;

    if (isFetching) {
      return <Spinner />;
    }

    if ((!movies || movies.size === 0) && !selectedMovie) {
      return <p className="results__no-items">No films found</p>;
    }


    if (selectedMovie) {
      if (moviesForSelectedMovie && moviesForSelectedMovie.size) {
        /**
        * Delete selected movie from received movies
        */
        const updatedMovies = moviesForSelectedMovie.filter(elem => elem.id !== selectedMovie.get('id'));

        if (!updatedMovies.size) {
          return <p className="results__no-items">No films found with the same genre</p>;
        }

        return updatedMovies.map(movie => <Movie key={movie.id} data={movie} />);
      }
      return <p className="results__no-items">No films found with the same genre</p>;
    }

    const sortedMovies = this.sortMovies();

    return sortedMovies && sortedMovies.map(movie => <Movie key={movie.id} data={movie} />);
  }

  sortMovies() {
    const { sortType, movies } = this.props;

    return movies && movies.slice().sort((a, b) => {
      if (sortType === 'release_date') {
        return new Date(b[sortType]) - new Date(a[sortType]);
      }

      return b[sortType] - a[sortType];
    });
  }

  fetchMovies() {
    const { fetchMoviesByGenres, selectedMovie } = this.props;
    const genres = selectedMovie.get('genres').map(genre => genre.toLowerCase()).join(',');
    const URL = `${URL_BASE}?filter=${genres}`;

    fetchMoviesByGenres(encodeURI(URL));
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
