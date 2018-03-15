import { signIn } from '../thunks/user';
import { errorHandler } from '../actions/user';
import { connect } from 'react-redux';

import SignIn from '../components/forms/SignIn.jsx';


const mapStateToProps = state => ({
  errorMsg: state.user.error,
  isLoading: state.user.isLoading,
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  signIn(user) {
    dispatch(signIn(user));
  },
  errorHandler(error) {
    dispatch(errorHandler(error))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
