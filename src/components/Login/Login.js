/* eslint-disable */
import React, {Component, useState} from 'react';
import ParticipantLoginForm from './ParticipantLogin'
import ParticipantRegisterForm from './ParticipantRegister'
// import './app.css';

export default class MainLogin extends Component {
  state = {
    registerFormIsOpen:false
  }
  render() {
    const {registerForm, setRegisterForm} = this.props;
    console.log('registerForm', registerForm)
    return (
      <div>
        {registerForm ? <ParticipantRegisterForm /> : <ParticipantLoginForm />}
       </div>
    );
  }
};
