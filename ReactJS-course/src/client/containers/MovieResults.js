import { connect } from 'react-redux';
import { fetchMovies, fetchMoviesByGenres } from '../actions/movies';

import MovieResults from '../components/MovieResults/MovieResults';

export const mapStateToProps = state => ({
  movies: state.getIn(['movies', 'data']),
  moviesForSelectedMovie: state.getIn(['movies', 'moviesForSelectedMovie']),
  selectedMovie: state.getIn(['selectedMovie', 'data']),
  isFetching: state.getIn(['movies', 'isFetching']),
  sortType: state.getIn(['sort', 'type']),
});

export const mapDispatchToProps = {
  fetchMovies,
  fetchMoviesByGenres,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieResults);
