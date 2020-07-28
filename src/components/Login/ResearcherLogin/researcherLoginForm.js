/* eslint-disable */
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from "../../../modules/session/session-actions";
import { LoginRequest } from "../../../modules/session/auth-reducer";
import Loader from "../../Loader/loader";
import { infoAction } from "../../../utils/notification";
import "./researcherLoginForm.css";

const ResearcherLogin = () => {
  const [doubleEntryPasswordModal, setDoubleEntryPasswordModal] = useState(
    false
  );
  const dispatch = useDispatch();
  const isAuthCheck = useSelector((state) => state.auth.isAuth);
  const isLoading = useSelector((state) => state.auth.isLoading);

  if (isAuthCheck)
    return infoAction("Mission complete Researcher :)", "/researcher-profile");

  const handleSubmit = (values) => {
    // setDoubleEntryPasswordModal(true)
    LoginRequest(values)(dispatch);
    dispatch(Loading(true));
  };

  return (
    <div className="root-ResearcherLogin">
      {/*<EntryPasswordModal doubleEntryPasswordModal={doubleEntryPasswordModal} setDoubleEntryPasswordModal={setDoubleEntryPasswordModal}*/}
      {/*  title={'Change your password'}/>*/}
      <div className="researcher-login__heading">V-RAP: Researcher</div>
      <Form
        onFinish={(values) => {
          handleSubmit(values);
        }}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      >
        <Form.Item
          validateTrigger={"onBlur"}
          name="login"
          rules={[
            {
              type: "email",
              message: "Please enter valid email: name@post.com",
            },
            { required: true, message: "Field is required!" },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="E-mail"
          />
        </Form.Item>
        <Form.Item
          validateTrigger={"onBlur"}
          name="password"
          rules={[
            { min: 6, message: "Password should contain at least 6 symbols" },
            { required: true, message: "Field is required!" },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {isLoading ? <Loader /> : "Login"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResearcherLogin;
