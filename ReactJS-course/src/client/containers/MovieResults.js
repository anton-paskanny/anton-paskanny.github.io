import { connect } from 'react-redux';
import { fetchMovies, fetchMoviesByGenres } from '../actions/movies';

import MovieResults from '../components/MovieResults/MovieResults';

export const mapStateToProps = state => ({
  movies: state.movies.data,
  moviesForSelectedMovie: state.movies.moviesForSelectedMovie,
  selectedMovie: state.selectedMovie.data,
  isFetching: state.movies.isFetching,
  sortType: state.sort.type,
});

export const mapDispatchToProps = {
  fetchMovies,
  fetchMoviesByGenres,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieResults);
