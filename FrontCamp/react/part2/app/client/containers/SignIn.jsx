import { setLoggedIn } from '../actions/user.js';
import { connect } from 'react-redux';
import SignIn from '../components/forms/SignIn.jsx';


const mapDispatchToProps = dispatch => ({
  setLoggedIn(user) {
    dispatch(setLoggedIn(user));
  }
});

export default connect(null, mapDispatchToProps)(SignIn);
