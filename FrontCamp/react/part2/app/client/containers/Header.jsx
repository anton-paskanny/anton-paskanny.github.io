import { connect } from 'react-redux';
import { setLoggedIn } from '../actions/user';
import Header from '../components/header/Header.jsx';


const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  user: state.user.data
});

const mapDispatchToProps = dispatch => ({
  setLoggedIn(user) {
    dispatch(setLoggedIn(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
