import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class AuthRoute extends React.Component {
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
}
//
// export default (props) => (
//
// );
