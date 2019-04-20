import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies';

import SearchForm from '../components/SearchForm/SearchForm';

export const mapStateToProps = state => ({
    searchType: state.search.type
});

export const mapDispatchToProps = dispatch => ({
    fetchMovies(url) {
        dispatch(fetchMovies(url));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);