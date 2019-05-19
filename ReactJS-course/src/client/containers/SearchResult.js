import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies';

import SearchResult from '../components/SearchResult/SearchResult';

export const mapStateToProps = state => ({
  movies: state.getIn(['movies', 'data']),
  isFetching: state.getIn(['movies', 'isFetching']),
  sortType: state.getIn(['sort', 'type']),
});

export const mapDispatchToProps = {
  fetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
