import { connect } from 'react-redux';
import { fetchMovie, resetMovie } from '../actions/movie';

import MovieDetail from '../components/Movie/MovieDetail/MovieDetail';

const mapStateToProps = state => ({
    selectedMovie: state.selectedMovie.data,
    isFetching: state.selectedMovie.isFetching
});

const mapDispatchToProps = dispatch => ({
    fetchMovie(url) {
        dispatch(fetchMovie(url));
    },
    resetMovie() {
        dispatch(resetMovie());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);