import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class AuthRoute extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Component = this.props.component;

    return (
      <Route path={this.props.path} render={(props) => {
        return this.props.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }} />
    )
  }
}
