import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies';

import Search from '../components/Search/Search';

const mapDispatchToProps = dispatch => ({
    fetchMovies(url) {
        dispatch(fetchMovies(url));
    }
});

export default connect(null, mapDispatchToProps)(Search);