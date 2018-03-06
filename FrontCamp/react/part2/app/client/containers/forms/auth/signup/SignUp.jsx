import React from 'react';
import { connect } from 'react-redux';
import { setLoggedIn } from '../../../../actions/user';
import { signUpUser } from '../../../../actions/user';

import '../styles.css';


class SignUp extends React.Component {
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
    this.signUpRequest = this.signUpRequest.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.inputPass.value && this.inputLogin.value.trim()) {
        this.signUpRequest();
    }
    else {
      this.setState({
        showSignInError: true,
        errorMsg: 'Fill in all necessary fields'
      });
    }
  }
  signUpRequest() {

    this.setState({
      disableElements: !this.state.disableElements,
      showSignInError: false
    });

    signUpUser({
      username: this.inputLogin.value,
      password: this.inputPass.value
    })
    .then(res => {

      if (res.success) {
        this.props.setLoggedIn(res.user)
        this.props.history.push('/blogs');
      }
      else {
        this.errorResponseHandler(res.msg);
      }
    })
    .catch(err => {
      this.errorResponseHandler(err.msg);
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
        <h2 className="auth-form__title">Sign Up</h2>
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
        <input className="auth-form__submit"
               type="submit"
               value="Sign Up"
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

const mapDispatchToProps = dispatch => ({
  setLoggedIn(user) {
    dispatch(setLoggedIn(user))
  }
});

export default connect(null, mapDispatchToProps)(SignUp);
