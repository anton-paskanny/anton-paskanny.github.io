import { connect } from 'react-redux';
import { toggleSearch } from '../actions/searchFilter';

import SeachFilter from '../components/Search/SearchFilter/SearchFilter';

const mapStateToProps = state => ({
    searchType: state.search.type
});

const mapDispatchToProps = dispatch => ({
    toggleSearch(type) {
        dispatch(toggleSearch(type));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SeachFilter);