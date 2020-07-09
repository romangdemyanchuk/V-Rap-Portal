/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./participantLoginForm.css";
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const ParticipantLoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // document.get('.one').addEventListener('click', _=> {classList.toggle('three');
  // })

  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div className="participant-heading">
          V-RAP: Participant
        </div>
        <div className="login-btns">
          <Link to={'/participant-register'}>
            <Button className="profile-btn"
            >
              Register
            </Button>
          </Link>
          <Link to={'/participant-login'}>
            <Button className="research-btn active"
            >
              Login
            </Button>
          </Link>
        </div>
        <h2>Login form</h2>
        <div className="form-wrapper">
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email address!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Link to={"/participant-profile"}>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ParticipantLoginForm;
