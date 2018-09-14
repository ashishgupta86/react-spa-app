import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginTemplate from './template';
import '../../assets/login.css';
import { processLogin } from '../../actions/user';
import { showAlertMessage } from '../../actions/common';
import { LOGIN_CRED_ERR } from '../../constants/errMsgs';

class LoginWrapper extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: '', 
        password: ''
      }
    }

    this.inputFieldChange = this.inputFieldChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  inputFieldChange(e) {
    const { user } = this.state;
    user[e.target.name] = e.target.value;
    this.setState({ user });
  }

  submitForm(e) {
    e.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      this.props.dispatch(processLogin(this.state.user));
    } else {
      this.props.dispatch(showAlertMessage(LOGIN_CRED_ERR, 'danger'));
    }
  }

  validateForm() {
    const { user } = this.state;
    let isValid = false;
    if (user.email && user.password) {
      isValid = true;
    }
    return isValid;
  }

  render() {
    return (
      <LoginTemplate
        inputFieldChange={this.inputFieldChange}
        submitForm={this.submitForm}
      />
    )
  }
}

export default connect()(LoginWrapper);
