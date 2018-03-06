import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthRoute from '../authRoute/AuthRoute.jsx';
import Blogs from '../blogs/Blogs.jsx';
import Header from '../header/Header.jsx';
import Intro from '../../components/intro/Intro.jsx';
import SignUp from '../forms/auth/signup/SignUp.jsx';
import SignIn from '../forms/auth/signin/SignIn.jsx';

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
