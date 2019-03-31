import { connect } from 'react-redux';
import { fetchMovies, fetchMoviesByGenres, sortMovies } from '../actions/movies';

import MovieResults from '../components/MovieResults/MovieResults';

const mapStateToProps = state => ({
    movies: state.movies.data,
    moviesForSelectedMovie: state.movies.moviesForSelectedMovie,
    selectedMovie: state.selectedMovie.data,
    isFetching: state.movies.isFetching
});

const mapDispatchToProps = dispatch => ({
    fetchMovies(url) {
        dispatch(fetchMovies(url));
    },
    fetchMoviesByGenres(url) {
        dispatch(fetchMoviesByGenres(url))
    },
    sortMovies(movies) {
        dispatch(sortMovies(movies))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieResults);