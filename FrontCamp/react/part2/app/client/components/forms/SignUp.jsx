import React from 'react';
import { Redirect } from 'react-router-dom';

import './styles.css';


export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.inputLogin = {};
    this.inputPass = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.inputPass.value && this.inputLogin.value.trim()) {

        this.props.signUp({
          username: this.inputLogin.value.trim(),
          password: this.inputPass.value
        });

        return;
    }

    this.props.errorHandler('Fill in all necessary fields');
  }
  renderErrorMsg() {
    if (this.props.errorMsg && !this.props.isLoading) {
      return (
        <p className="auth-form__error">
          {this.props.errorMsg}
        </p>
      )
    }
  }
  render() {

    if (this.props.isLoggedIn) {
     return <Redirect to='/blogs' />
    }

    return (
      <form className="auth-form" onSubmit={this.handleSubmit}>
        <h2 className="auth-form__title">Sign Up</h2>
        <input className="auth-form__input"
               type="text"
               placeholder="Login"
               ref={input => this.inputLogin = input}
               disabled={this.props.isLoading}
        />
        <input className="auth-form__input"
               type="password"
               placeholder="Password"
               ref={input => this.inputPass = input}
               disabled={this.props.isLoading}
        />
        <input className="auth-form__submit hoverable"
               type="submit"
               value="Sign Up"
               disabled={this.props.isLoading}
        />
        {this.renderErrorMsg()}
      </form>
    )
  }
}
