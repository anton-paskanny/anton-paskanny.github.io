import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies';

import Search from '../components/Search/Search';

export const mapStateToProps = state => ({
    searchType: state.search.type
});

export const mapDispatchToProps = dispatch => ({
    fetchMovies(url) {
        dispatch(fetchMovies(url));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);