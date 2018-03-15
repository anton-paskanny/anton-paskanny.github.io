import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.logOutHandler = this.logOutHandler.bind(this);
  }
  logOutHandler(event) {
    event.preventDefault();

    this.props.logOut();
  }
  render() {
    return (
      <header className="header">
        <Link className="header__title" to="/">
          <h2>React app</h2>
        </Link>
        <nav className="header__nav">
          {
            !this.props.isLoggedIn &&
            <Link className="header__link hoverable" to="/signin">Sign In</Link>
          }
          {
            !this.props.isLoggedIn &&
            <Link className="header__link hoverable" to="/signup">Sign Up</Link>
          }
          {
            this.props.isLoggedIn &&
            <a className="header__link hoverable" href="#" onClick={this.logOutHandler}>Log Out</a>
          }
        </nav>
      </header>
    )
  }
}
