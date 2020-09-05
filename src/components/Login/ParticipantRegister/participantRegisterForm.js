/* eslint-disable */
import React from "react";
import { Button } from "antd";
import "./participantRegisterForm.css";
import { useDispatch } from "react-redux";
import { RegisterRequest } from "../../../modules/session/auth-reducer";
import { useHistory } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../../utils/formControls'
import { email, password, required } from '../../../utils/validators'

const LoginForm = (props) => {
  return (
    <form className="login-form" onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'login'} name={"login"} component={Input}
          validate={ [email, required] }/>
      </div>
      <div>
        <Field placeholder={'password'} name={"password"} component={Input}
          validate={[password, required]}
               type="password"/>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm ({ form: 'login'})(LoginForm)

const ParticipantRegisterForm = ({ setState }) => {
  let dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (formData) => {
    RegisterRequest(formData, history)(dispatch);
  }
  return (
    <div className="root-ParticipantRegister">
      <div className="participant-register__form-wrapper">
        <div className="participant-heading">V-RAP: Participant</div>
        <div className="participant-register__login-btns">
          <Button
            className="participant-register__research-btn"
            onClick={() => setState(false)}
          >
            Login
          </Button>
          <LoginReduxForm onSubmit={onSubmit}/>
        </div>
      </div>
    </div>
  );
};





export default ParticipantRegisterForm;
