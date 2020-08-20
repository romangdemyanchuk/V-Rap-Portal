/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Input, Button, Form, Skeleton } from "antd";
import WithAuthRedirect from "../../../../hoc/hoc";
import {
  EditResearcherProfile,
  UsersInfo,
  ChangeIsButtonDisabled
} from "../../../../modules/session/main-reducer";
import Loader from "../../../Loader/loader";
import "./researcherProfile.scss";
import { useDispatch, useSelector } from "react-redux";
import changeIsButtonDisabled from "../../../../modules/session/main-reducer"
import Header from "./../header";

const ResearcherProfile = () => {
  const { name, school, area }  = useSelector((state) => state.main.userInfo);
  const disableButtons = useSelector((state) => state.main.isDisableButtons);
  // const [loadingBtn, setLoadingBtn] = useState(false);
  // console.log('loadingBtn', loadingBtn)
  const [isProfileBtnActive] = useState(true);


  const isLoading = useSelector((state) => state.auth.isLoading);
  // console.log(isLoading)
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
  const formIsValid = (props) => {
    // setLoadingBtn(true)
    EditResearcherProfile({ ...props }, ChangeIsButtonDisabled)(dispatch);
    // setLoadingBtn(false)
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
          />
          <div className="researcher-profile__personal-fields-wrapper">
            <div className="researcher-profile__personal-heading">
              Profile Information
            </div>
            <Form
              {...layout}
              name="control-hooks"
              onFinish={formIsValid}
              initialValues={{
                name: name,
                school: school,
                area: area,
              }}
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
                  <Button className="researcher-profile__cancel-btn">
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
