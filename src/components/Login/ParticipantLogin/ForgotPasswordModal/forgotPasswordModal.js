/* eslint-disable */
import React from "react";
import "./forgotPasswordModal.css";
import { Button, Form, Input, Modal } from 'antd'
import { LockOutlined } from '@ant-design/icons'

const ForgotPasswordModal = ({ forgotPasswordModal, setForgotPasswordModal }) => {
  const  closeModal = () => {
    setForgotPasswordModal(false);
  }
  const layout = {
    labelCol: { span: 32 },
    wrapperCol: { span: 16 },
  };
  return (
    <div className="forgotPasswordModal-block">
      <Modal
        title="Forgot your password?"
        visible={forgotPasswordModal}
        onOk={closeModal}
        onCancel={closeModal}
        className="forgotPasswordModal"
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
        >

          <Form.Item
            validateTrigger={'onBlur'}
            label="Enter new password"
            name="password-1"
            rules={[{ min: 6, message: 'Password should contain at least 6 symbols' },
              { required: true, message: 'Field is required!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            validateTrigger={'onBlur'}
            label="The confirmation of a new password"
            name="password-2"
            rules={[{ min: 6, message: 'Password should contain at least 6 symbols' },
              { required: true, message: 'Field is required!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </Form>
        <div className="forgotPassword__btns">
          <Button onClick={closeModal}>Cancel</Button>
          <Button type="primary" onClick={closeModal}>Save</Button>
        </div>
      </Modal>
    </div>
  )
}
export default ForgotPasswordModal;
