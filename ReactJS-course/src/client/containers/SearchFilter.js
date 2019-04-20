import { connect } from 'react-redux';
import { toggleSearch } from '../actions/searchFilter';

import SeachFilter from '../components/SearchForm/SearchFilter/SearchFilter';

export const mapStateToProps = state => ({
    searchType: state.search.type
});

export const mapDispatchToProps = dispatch => ({
    toggleSearch(type) {
        dispatch(toggleSearch(type));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SeachFilter);