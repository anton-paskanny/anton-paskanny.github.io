import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import AuthRoute from '../../containers/AuthRoute';
import Blogs from '../../containers/Blogs';
import Header from '../../containers/Header';
import Intro from '../intro/Intro.jsx';
import SignUp from '../../containers/SignUp';
import SignIn from '../../containers/SignIn';

import './styles.css';
import "./normalize.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="app__wrapper">
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <AuthRoute path="/blogs" component={Blogs} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}
