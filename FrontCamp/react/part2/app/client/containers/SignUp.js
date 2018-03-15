import { connect } from 'react-redux';
import { signUp } from '../thunks/user';
import { errorHandler } from '../actions/user';

import SignUp from '../components/forms/SignUp.jsx';


const mapStateToProps = state => ({
  errorMsg: state.user.error,
  isLoading: state.user.isLoading,
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  signUp(user) {
    dispatch(signUp(user))
  },
  errorHandler(error) {
    dispatch(errorHandler(error))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
