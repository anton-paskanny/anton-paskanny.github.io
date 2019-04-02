import React, { PureComponent } from 'React';

import Movie from '../Movie/Movie';
import SortPanel from './SortPanel/SortPanel';
import Spinner from '../shared/Spinner/Spinner';

import { URL_BASE } from '../../utils';

import styles from './styles.css';

class MovieResults extends PureComponent {
    state = {
        sortBy: [
            {
                name: 'release date',
                fieldToSortBy: 'release_date',
                active: true
            },
            {
                name: 'rating',
                fieldToSortBy: 'vote_average',
                active: false
            }
        ]
    }

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

        // For search page movies will be sorted after they
        // where received from server
        const sortedArr = this.sortMovies();
        return sortedArr.map(movie => {
            return <Movie key={movie.id} data={movie} />
        })
    }

    sortMovies() {
        const fieldToSortBy = this.state.sortBy.find(elem => elem.active).fieldToSortBy;
        
        return this.props.movies.slice().sort((a, b) => {
            if (fieldToSortBy === 'release_date') {
                return new Date(b[fieldToSortBy]) - new Date(a[fieldToSortBy]);
            }

            return b[fieldToSortBy] - a[fieldToSortBy];
        });
    }

    handleSortByChange = (e) => {
        if (e.target.classList.contains('sort-panel__filter-btn--active')) {
            return;
        }

        this.setState({
            sortBy: this.state.sortBy.map(el => {
                if (el.name === e.target.textContent) {
                    return {...el, active: !el.active};
                }

                return {...el, active: false};
            })
        });
    }

    render() {
        return (
            <div className="results">
                <SortPanel 
                           sortByConfig={this.state.sortBy}
                           handleSortByChange={this.handleSortByChange}
                           movies={this.props.movies}
                           selectedMovie={this.props.selectedMovie}
                />
                <div className={`results__items ${this.props.isFetching ? 'results__items--fetching' : ''}`}>
                    {
                        this.renderItems()
                    }
                </div>
            </div>
        )
    }
}

export default MovieResults;