import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class AuthRoute extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Route path={this.props.path} render={() => {
        return this.props.isLoggedIn ? this.props.component : <Redirect to="/" />
      }} />
    )
  }
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

export default connect(mapStateToProps, null)(AuthRoute);
