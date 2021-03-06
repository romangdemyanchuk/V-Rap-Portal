/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader/loader";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { infoAction } from "../../../utils/notification";
import { useDispatch, useSelector } from "react-redux";
import { LoginRequest } from "../../../modules/session/auth-reducer";
import { Loading } from "../../../modules/session/session-actions";
import "./participantLoginForm.scss";
import EntryPasswordModal from "./EntryPasswordModal";

const ParticipantLoginForm = ({ setState }) => {
  const [doubleEntryPasswordModal, setDoubleEntryPasswordModal] = useState(false);
  let dispatch = useDispatch();

  const isAuthCheck = useSelector(state => state.auth.isAuth)
  const isLoading = useSelector(state => state.auth.isLoading)

  if (isAuthCheck)
    return infoAction("Mission complete Participant :)","/participant-profile")

  const handleSubmit = (values) => {
    LoginRequest(values)(dispatch);
    dispatch(Loading(true));
  };

  return (
    <div className="root-ParticipantLogin">
      <EntryPasswordModal
        doubleEntryPasswordModal={doubleEntryPasswordModal}
        setDoubleEntryPasswordModal={setDoubleEntryPasswordModal}
        title={"Forgot your password?"}
      />
      <div className="participant-login__heading">V-RAP: Participant</div>
      <span className="participant-login__btns">
        <Button className="participant__btn active">Login</Button>
        <Button
          className="participant-login__-btn"
          onClick={() => setState(true)}
        >
          Register
        </Button>
      </span>
      <Form
        name="login"
        className="login-form"
        onFinish={(values) => {
          handleSubmit(values);
        }}
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
          <span className="rememberMe-antd">
            <Form.Item name="remember" noStyle>
              <Checkbox checked>Remember me</Checkbox>
            </Form.Item>
            <a
              className="login-form-forgot"
              onClick={() => setDoubleEntryPasswordModal(true)}
            >
              Forgot password
            </a>
          </span>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {isLoading ? <Loader /> : "Login"}
          </Button>
          <span className="orRegister-proposal">
            Or
            <Link to={"/participant-login"} onClick={() => setState(true)}>
              &ensp;register now!
            </Link>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ParticipantLoginForm;
