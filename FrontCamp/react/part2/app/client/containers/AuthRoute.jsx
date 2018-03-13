import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthRoute from '../components/authRoute/AuthRoute.jsx';


const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

export default connect(mapStateToProps, null)(AuthRoute);
