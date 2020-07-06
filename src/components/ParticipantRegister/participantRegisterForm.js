/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./participantRegisterForm.css";
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
const ParticipantRegisterForm = () => {
  // const [active, setActiveClass] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div className="form-wrapper">
          <div className="participant-heading">
            V-RAP: Participant
          </div>
          <div className="login-btns">
            <Link to={'/par-register-form'}>
              <Button className="profile-btn active"
              // onClick={() => setActiveClass(true)}
              >Register</Button>
            </Link>
            <Link to={'/par-login-form'}>
              <Button className="research-btn ">Login</Button>
            </Link>
          </div>
          <h2>Registration form</h2>
          <Form
            {...layout}
            name="basic"
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
            <Form.Item {...tailLayout}>
              <Link to={"/personal-info"}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ParticipantRegisterForm;
