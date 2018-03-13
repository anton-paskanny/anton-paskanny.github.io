import React from 'react';
import { signInUser } from '../../services/user';

import './styles.css';


export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.inputLogin = {};
    this.inputPass = {};

    this.state = {
      showSignInError: false,
      disableElements: false,
      errorMsg: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.signInRequest = this.signInRequest.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.inputPass.value && this.inputLogin.value.trim()) {
        this.signInRequest();
    }
    else {
      this.setState({
        showSignInError: true,
        errorMsg: 'Fill in all necessary fields'
      });
    }
  }
  signInRequest() {

    this.setState({
      disableElements: !this.state.disableElements,
      showSignInError: false
    });

    signInUser({
      username: this.inputLogin.value,
      password: this.inputPass.value
    })
    .then(res => {
      if (res.success) {
        this.props.setLoggedIn(res.user);
        this.props.history.push('/blogs');
      }
      else {
        this.errorResponseHandler(res.message);
      }
    })
    .catch(err => {
      this.errorResponseHandler(err.message);
    });

  }
  errorResponseHandler(msg) {
    this.setState({
      disableElements: !this.state.disableElements,
      showSignInError: true,
      errorMsg: msg
    });
  }
  render() {
    return (
      <form className="auth-form" onSubmit={this.handleSubmit}>
        <h2 className="auth-form__title">Sign In</h2>
        <input className="auth-form__input"
               type="text"
               placeholder="Login"
               ref={input => this.inputLogin = input}
               disable={this.state.disableElements ? 'true' : 'false'}
        />
        <input className="auth-form__input"
               type="password"
               placeholder="Password"
               ref={input => this.inputPass = input}
               disable={this.state.disableElements ? 'true' : 'false'}
        />
        <input className="auth-form__submit hoverable"
               type="submit"
               value="Sign In"
               disable={this.state.disableElements ? 'true' : 'false'}
        />
        {
          this.state.showSignInError &&
          <p className="auth-form__error">
            {this.state.errorMsg}
          </p>
        }
      </form>
    )
  }
}
