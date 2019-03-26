import React, { PureComponent } from 'React';

import Movie from '../Movie/Movie';
import SortPanel from './SortPanel/SortPanel';
import Spinner from '../shared/Spinner/Spinner';

import { URL_BASE } from '../../utils';

import styles from './styles.css';

class MovieResults extends PureComponent {
    state = {
        movies: [],
        sortBy: [
            {
                name: 'release date',
                active: true
            },
            {
                name: 'rating',
                active: false
            }
        ],
        isFetching: false
    }

    componentDidMount() {
        this.setState({
            isFetching: true
        });

        fetch(URL_BASE)
        .then(res => res.json())
        .then(json => {
            this.setState({
                movies: json.data,
                isFetching: false
            })
        });
    }

    renderItems() {
        if (this.state.isFetching) {
            return <Spinner />
        }
        if (this.state.movies.length === 0) {
            return <p className="results__no-items">No films found</p>
        }

        return this.state.movies.map(movie => {
            return <Movie key={movie.id} data={movie} />
        })
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
                <SortPanel sortByConfig={this.state.sortBy} handleSortByChange={this.handleSortByChange} />
                <div className={`results__items ${this.state.isFetching ? 'results__items--fetching' : ''}`}>
                    {
                        this.renderItems()
                    }
                </div>
            </div>
        )
    }
}

export default MovieResults;