import React, { PureComponent } from 'React';

import Movie from '../Movie/Movie';
import SortPanel from '../../containers/SortPanel';
import Spinner from '../shared/Spinner/Spinner';

import { URL_BASE } from '../../utils';

import styles from './styles.css';

class MovieResults extends PureComponent {
    componentDidMount() {
        this.props.fetchMovies(`${URL_BASE}`);
    }

    componentDidUpdate(prevProps) {
        /**
         * 1. Take selected movies genres
         * 2. Create url
         * 3. Invoke action
         * 4. Update field movies (they are with the same genres as selected move has)
         */
        if (this.props.selectedMovie && (!prevProps.selectedMovie || prevProps.selectedMovie.title !== this.props.selectedMovie.title)) {
            const genres = this.props.selectedMovie.genres.map(genre => genre.toLowerCase()).join(',')
            const URL = `${URL_BASE}?filter=${genres}`;
            this.props.fetchMoviesByGenres(encodeURI(URL));
        }
    }

    renderItems() {
        if (this.props.isFetching) {
            return <Spinner />
        }

        if (this.props.movies.length === 0) {
            return <p className="results__no-items">No films found</p>
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

                return movies.map(movie => {
                    return <Movie key={movie.id} data={movie} />
                });
            } else {
                return <p className="results__no-items">No films found with the same genre</p>;
            }
        }

        return this.sortMovies().map(movie => {
            return <Movie key={movie.id} data={movie} />
        })
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

    render() {
        return (
            <div className="results">
                <SortPanel />
                <div className={`results__items ${this.props.isFetching ? 'results__items--fetching' : ''}`}>
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}

export default MovieResults;