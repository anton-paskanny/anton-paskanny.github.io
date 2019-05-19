import { connect } from 'react-redux';
import { fetchMovie, resetMovie } from '../actions/movie';

import MovieDetail from '../components/Movie/MovieDetail/MovieDetail';

const mapStateToProps = state => ({
  selectedMovie: state.getIn(['selectedMovie', 'data']),
  isFetching: state.getIn(['selectedMovie', 'isFetching']),
});

const mapDispatchToProps = {
  fetchMovie,
  resetMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
