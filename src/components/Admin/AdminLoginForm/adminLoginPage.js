/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./adminLoginPage.css";
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux'
import { AdminLogin } from '../../../modules/session/session-actions'
import { Link } from "react-router-dom";

const AdminLoginForm = () => {
  const dispatch = useDispatch()

  const testData = useSelector(state => state.adminLoginData)

  useEffect(() => {

    console.log(testData, "testData")
  }, [testData])


  const [loginText, setloginText] = useState("");
  const [passwordText, setpasswordText] = useState("");
  const [isEmailFieldValid, setIsEmailFieldValid] = useState(true);
  const [isPasswordFieldValid, setIsPasswordFieldValid] = useState(true);

  const emailIsValid = (e) => {
    if (e && e.target) setloginText(e.target.value);
    return setIsEmailFieldValid(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    )
  }

  const passwordIsValid = (e) => {
    if (e && e.target) setpasswordText(e.target.value);
    return setIsPasswordFieldValid(
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/
    )
  }

  const LoginFieldsIsValid = () => {
    emailIsValid(loginText);
    passwordIsValid(passwordText);
  };
  const caseStudiesColumns = useSelector(state => state.caseStudiesColumns)
  return (
    <div className="root-Admin">
      <div className="root-Admin__wrapper">
        <div className="root-Admin__heading">V-RAP: Administration</div>
        <Form
          onFinish={values => {
            dispatch(AdminLogin(values))
            console.log('Finish:', values);
          }}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <div className="root-Admin__item-wrapper">
            <Form.Item
              name="username"
            // rules={[{ required: true, message: "Please input valid E-mail" }]}

            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
                onChange={() => setIsEmailFieldValid(true)}
                onBlur={emailIsValid}
                value={loginText}
              />
            </Form.Item>
            {!isEmailFieldValid && <div className="invalid-email">Invalid E-mail</div>}
          </div>
          <div className="root-Admin__item-wrapper">
            <Form.Item
              name="password"
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
            {!isPasswordFieldValid && <div className="invalid-password">
              Enter at least 6 symbols. Message will be rewritten</div>}
          </div>

          <Form.Item>
            <Link to={"/admin-portal"}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={LoginFieldsIsValid}
            >
              Login
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default AdminLoginForm;
