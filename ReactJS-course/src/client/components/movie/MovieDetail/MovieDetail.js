import React, { Component } from 'react';

import Spinner from '../../shared/Spinner/Spinner';

import { URL_BASE } from '../../../utils';

import './styles.css';

class MovieDetail extends Component {
  componentDidMount() {
    this.getMovieData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.getMovieData();
    }
  }

  componentWillUnmount() {
    this.props.resetMovie();
  }

  renderGenres(genres) {
    return genres && genres.map(genre => (
      <li key={genre} className="movie-detail__genre">{genre}</li>
    ));
  }

  getMovieData() {
    const URL = `${URL_BASE}/${this.props.id}`;
    this.props.fetchMovie(URL);
  }

  render() {
    if (!this.props.selectedMovie || this.props.isFetching) return <Spinner />;

    const {
      title, overview, poster_path, genres, runtime, release_date, vote_average,
    } = this.props.selectedMovie;

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
    );
  }
}

export default MovieDetail;
