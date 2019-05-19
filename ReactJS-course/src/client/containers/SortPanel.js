import { connect } from 'react-redux';
import { toggleSort } from '../actions/sortPanel';

import SortPanel from '../components/MovieResults/SortPanel/SortPanel';

export const mapStateToProps = state => ({
  movies: state.getIn(['movies', 'data']),
  selectedMovie: state.getIn(['selectedMovie', 'data']),
  sortType: state.getIn(['sort', 'type']),
});

export const mapDispatchToProps = {
  toggleSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);
