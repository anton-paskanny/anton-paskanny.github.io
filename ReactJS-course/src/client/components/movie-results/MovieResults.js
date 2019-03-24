import React, { PureComponent } from 'React';

import Movie from '../movie/Movie';
import SortPanel from './sortPanel/SortPanel';

import { URL_BASE } from '../../utils';

import styles from './styles.css';

class MovieResults extends PureComponent {
    state = {
        movies: []
    }

    componentDidMount() {
        const urlToFetch = `${URL_BASE}/movies`;

        fetch(urlToFetch)
        .then(res => res.json())
        .then(json => {
            this.setState({
                movies: json.data
            })
        });
    }

    renderItems() {
        if (this.state.movies.length === 0) {
            return <p className="results__no-items">No films found</p>
        }

        return this.state.movies.map(movie => {
            return <Movie key={movie.id} data={movie} />
        })
    }

    render() {
        return (
            <div className="results">
                <SortPanel />
                <div className="results__items">
                    {
                        this.renderItems()
                    }
                </div>
            </div>
        )
    }
}

export default MovieResults;