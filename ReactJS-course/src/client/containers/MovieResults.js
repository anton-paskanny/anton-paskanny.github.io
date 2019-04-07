import { connect } from 'react-redux';
import { fetchMovies, fetchMoviesByGenres } from '../actions/movies';

import MovieResults from '../components/MovieResults/MovieResults';

const mapStateToProps = state => ({
    movies: state.movies.data,
    moviesForSelectedMovie: state.movies.moviesForSelectedMovie,
    selectedMovie: state.selectedMovie.data,
    isFetching: state.movies.isFetching,
    sortType: state.sort.type
});

const mapDispatchToProps = dispatch => ({
    fetchMovies(url) {
        dispatch(fetchMovies(url));
    },
    fetchMoviesByGenres(url) {
        dispatch(fetchMoviesByGenres(url))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieResults);