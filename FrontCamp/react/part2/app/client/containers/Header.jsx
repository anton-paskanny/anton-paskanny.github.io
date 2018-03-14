import { connect } from 'react-redux';
import { logOut } from '../actions/user';

import Header from '../components/header/Header.jsx';


const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  user: state.user.data
});

const mapDispatchToProps = dispatch => ({
  logOut() {
    dispatch(logOut());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
