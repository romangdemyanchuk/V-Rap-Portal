/* eslint-disable */
import React from "react";
import "./adminLoginPage.css";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const AdminLoginForm = () => {

  return (
    <div className="root-Admin">
      <div className="main-page-wrapper">
          <div className="form-wrapper">
            <div className="participant-heading">
              V-RAP: Administration
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
                <Link to={'/admin-portal'}>
                  <Button type="primary" htmlType="submit" className="login-form-button">
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

export default AdminLoginForm;
