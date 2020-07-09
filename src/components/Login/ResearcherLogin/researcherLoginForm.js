/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./researcherLoginForm.css";
import { Form, Input, Button, Checkbox } from "antd";
import MainLogin from '../Login'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

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
const ResearcherLogin = () => {
  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div>
          <div className="form-wrapper">
            <div className="participant-heading">
              V-RAP: Researcher
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Link to={'/participant-profile'}>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Register
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>

      </div>
    </div>
  );
};
export default ResearcherLogin;
