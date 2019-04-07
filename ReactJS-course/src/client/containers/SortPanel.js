import { connect } from 'react-redux';
import { toggleSort } from '../actions/sortPanel';

import SortPanel from '../components/MovieResults/SortPanel/SortPanel';

const mapStateToProps = state => ({
    movies: state.movies.data,
    selectedMovie: state.selectedMovie.data,
    sortType: state.sort.type
});

const mapDispatchToProps = dispatch => ({
    toggleSort(type) {
        dispatch(toggleSort(type));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);