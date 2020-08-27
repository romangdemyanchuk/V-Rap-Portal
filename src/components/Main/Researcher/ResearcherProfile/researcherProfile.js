/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Input, Button, Form, Skeleton } from "antd";
import WithAuthRedirect from "../../../../hoc/hoc";
import { EditResearcherProfile, UsersInfo, ChangeIsButtonDisabled}
from "../../../../modules/session/main-reducer";
import Loader from "../../../Loader/loader";
import "./researcherProfile.scss";
import { useDispatch, useSelector } from "react-redux";
import Header from "./../header";

const ResearcherProfile = () => {
  const { name, school, area }  = useSelector((state) => state.main.userInfo);
  const [form] = Form.useForm();
  const disableButtons = useSelector((state) => state.main.isDisableButtons);
  const [isProfileBtnActive] = useState(true);
  let formInitialValues = {
    name: name ,
    school: school,
    area: area,
  }
  form.setFieldsValue(formInitialValues)

  const isLoading = useSelector((state) => state.auth.isLoading);
  let dispatch = useDispatch();

  useEffect(() => {
    UsersInfo()(dispatch);
  }, []);

  useEffect(() =>{
    if (name && school && area) {
      ChangeIsButtonDisabled(false)(dispatch)
    }
  }, [name, school, area, disableButtons])

  const layout = {
    labelCol: {
      span: 16,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const onReset = () => {
    form.setFieldsValue({name: '', school: '', area: ''})
  };

  const formIsValid = (props) => {
    EditResearcherProfile({ ...props }, ChangeIsButtonDisabled)(dispatch);
  };
  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <div className="root-ResearcherProfile">
          <Header
            disableButtons={disableButtons}
            isProfileBtnActive={isProfileBtnActive}
            type={1}
          />
          <div className="researcher-profile__personal-fields-wrapper">
            <div className="researcher-profile__personal-heading">
              Profile Information
            </div>
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={formIsValid}
              initialValues={formInitialValues}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please input name!" }]}
              >
                <Input placeholder="Type here.." />
              </Form.Item>
              <Form.Item
                name="school"
                label="School/Institution Name"
                rules={[
                  {
                    required: true,
                    message: "Please input School/Institution Name!",
                  },
                ]}
              >
                <Input placeholder="Type here.." />
              </Form.Item>
              <Form.Item
                name="area"
                label="Area"
                rules={[{ required: true, message: "Please input area!" }]}
              >
                <Input placeholder="Type here.." />
              </Form.Item>
              <Form.Item>
                <div
                  className="researcher-profile__changes-btns"
                  style={{ marginTop: 25 }}
                >
                  <Button
                    className="researcher-profile__save-btn"
                    type="primary"
                    htmlType="submit"
                  >
                    {isLoading ? <Loader /> : "Save changes"}
                  </Button>
                  <Button className="researcher-profile__cancel-btn"
                    onClick={onReset}>
                    Cancel
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ResearcherProfile);

export default AuthRedirectComponent;
