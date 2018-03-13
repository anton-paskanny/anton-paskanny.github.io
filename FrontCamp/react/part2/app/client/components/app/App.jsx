import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import AuthRoute from '../../containers/AuthRoute.jsx';
import Blogs from '../../containers/Blogs.jsx';
import Header from '../../containers/Header.jsx';
import Intro from '../intro/Intro.jsx';
import SignUp from '../../containers/SignUp.jsx';
import SignIn from '../../containers/SignIn.jsx';

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
            <AuthRoute path="/blogs" component={<Blogs />} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}
