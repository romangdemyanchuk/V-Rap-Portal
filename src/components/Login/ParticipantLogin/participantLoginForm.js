/* eslint-disable */
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./participantLoginForm.scss";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainLogin from '../Login'


const ParticipantLoginForm = () => {
  const [registerForm, setRegisterForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const [loginText, setloginText] = useState("");
  const [passwordText, setpasswordText] = useState("");
  const [isEmailFieldValid, setIsEmailFieldValid] = useState(true);
  const [isPasswordFieldValid, setIsPasswordFieldValid] = useState(true);

  const emailIsValid = (e) => {
    if (e && e.target) setloginText(e.target.value);
    return setIsEmailFieldValid(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
        e.target.value
      )
    );
  };
  const passwordIsValid = (e) => {
    if (e && e.target) setpasswordText(e.target.value);
    return setIsPasswordFieldValid(
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/.test(
        e.target.value
      )
    );
  };
  const LoginFieldsIsValid = () => {
    console.log('isEmailFieldValid', isEmailFieldValid)
    console.log('isPasswordFieldValid', isPasswordFieldValid)
    if(isEmailFieldValid && isPasswordFieldValid) {
      // <Link to={'/participant-profile'}/>
    }
  };
  const typeOfForm = () => {
    setRegisterForm(true);
    setIsVisible(true)
  }

  return (
    <div className="root-Participant-login">
      {isVisible && <MainLogin registerForm={registerForm} setRegisterForm={setRegisterForm}/>}
      {!isVisible
        &&
        <div className="participant-login__form-wrapper">
          <div className="participant-login__heading">
            V-RAP: Participant
          </div>
          <div className="participant-login__btns">
            <Button className="participant-login__-btn"
                    onClick={typeOfForm}
            >Register</Button>
            <Button className="participant__btn active"
            >Login</Button>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <div>
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon"/>}
                  onChange={() => setIsEmailFieldValid(true)}
                  onBlur={emailIsValid}
                  value={loginText}
                  placeholder="E-mail" />
              </Form.Item>
              {!isEmailFieldValid && <div className="invalid-email">Invalid E-mail</div>}
            </div>
            <div>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  onChange={() => setIsPasswordFieldValid(true)}
                  onBlur={passwordIsValid}
                  value={passwordText}
                />
              </Form.Item>
              {!isPasswordFieldValid && <div className="invalid-password">Invalid Password<br/>
                Your password must have > 6 symbols, special character,lowercase letter and uppercase letter</div>}
            </div>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Link to={'/participant-profile'}>
                <Button type="primary" htmlType="submit" className="login-form-button"
                        onClick={LoginFieldsIsValid}>
                  Login
                </Button>
              </Link>
              Or <a href=""
                    onClick={typeOfForm}
            >register now!</a>
            </Form.Item>
          </Form>
        </div>}
    </div>
  );
};
export default ParticipantLoginForm;
