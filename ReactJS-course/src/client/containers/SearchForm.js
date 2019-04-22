import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies';

import SearchForm from '../components/SearchForm/SearchForm';

export const mapStateToProps = state => ({
    searchType: state.search.type
});

export const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);