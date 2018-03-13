import { connect } from 'react-redux';
import { setLoggedIn } from '../actions/user';
import SignUp from '../components/forms/SignUp.jsx';


const mapDispatchToProps = dispatch => ({
  setLoggedIn(user) {
    dispatch(setLoggedIn(user))
  }
});

export default connect(null, mapDispatchToProps)(SignUp);
