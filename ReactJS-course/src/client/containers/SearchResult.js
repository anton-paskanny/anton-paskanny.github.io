import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies';

import SearchResult from '../components/SearchResult/SearchResult';

export const mapStateToProps = state => ({
    movies: state.movies.data,
    isFetching: state.movies.isFetching,
    sortType: state.sort.type
});

export const mapDispatchToProps = dispatch => ({
    fetchMovies(url) {
        dispatch(fetchMovies(url));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);