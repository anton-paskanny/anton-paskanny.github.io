import React, { Component } from 'react';

import { URL_BASE } from '../../../utils';

import styles from './styles.css';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            movie: {}
        }
    }

    componentDidMount() {
        this.getMovieData(this.props.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.getMovieData(this.props.id);
        }
    }

    renderGenres(genres) {
        return genres && genres.map(genre => (
            <li key={genre} className="movie-detail__genre">{genre}</li>
        ))
    }

    getMovieData(id) {
        const URL = `${URL_BASE}/movies/${id}`;
        
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({
            isLoaded: true,
            movie: data
        }));
    }

    render() {
        if (!this.state.isLoaded) return <p>Loading...</p>
        
        const { title, overview, poster_path, genres, runtime, release_date, vote_average } = this.state.movie;
        
        return (
            <div className="movie-detail">
                <figure className="movie-detail__img-placeholder">
                    <img className="movie-detail__img" src={poster_path} alt={title} />
                </figure>
                <div className="movie-detail__info-wrapper">
                    <div className="movie-detail__title-wrapper">
                        <h2 className="movie-detail__title">{title}</h2>
                        <p className="movie-detail__rating">
                            <span>{vote_average}</span>
                        </p>
                    </div>
                    <ul className="movie-detail__genres">{this.renderGenres(genres)}</ul>
                    <p className="movie-detail__wrapper">
                        <time className="movie-detail__release-date" dateTime={release_date}>{release_date.slice(0, 4)} min</time>
                        <span className="movie-detail__duration">{runtime}</span>
                    </p>
                    <p className="movie-detail__desc">{overview}</p>
                </div>
            </div>
        )
    }
}

export default MovieDetail;