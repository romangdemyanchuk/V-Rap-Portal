/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Form } from 'antd'
import WithAuthRedirect from "../../../../hoc/hoc";
import { EditParticipantProfile, EditUserInfo, UserInfoTC } from '../../../../modules/session/session-reducers'
import Loader from '../../../Loader/loader'
import "./researcherProfile.scss";
import { useDispatch, useSelector } from 'react-redux'


const ResearcherProfile = () => {

  const userData = useSelector(state => state.userInfo)

  const [nameField, setnameField] = useState(userData.name);
  const [schoolField, setschoolField] = useState(userData.school);
  const [areaField, setareaField] = useState(userData.area);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

  const isLoading = useSelector(state => state.isLoading)
  let dispatch = useDispatch()

  useEffect(() => {
    UserInfoTC()(dispatch)
    setnameField(userData.name)
    setschoolField(userData.school)
    setareaField(userData.area)

  }, [userData.school, userData.area, userData.name])

  const resetFieldsValue = () => {
    setnameField(userData.name)
    setschoolField(userData.school)
    setareaField(userData.area)
  }
  const layout = {
    labelCol: {
      span: 16,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const formIsValid = () => {
    EditUserInfo({ name: nameField, school: schoolField, area: areaField })(dispatch);
    setButtonIsDisabled(true)

  }
  return (
    <div className="root-ResearcherProfile">
      <div className="researcher-profile__btns-wrapper">
        <Link to={'/researcher-profile'}>
          <Button className="profile-btn active researcher-profile__btn">Profile</Button>
        </Link>
        <Link to={'/researcher-studies'}>
          <Button className="research-btn"
                  disabled={buttonIsDisabled ? false : true}
          >Research Studies</Button>
        </Link>
      </div>
      <div className="researcher-profile__personal-fields-wrapper">
        <div className="researcher-profile__personal-heading">Profile Information</div>
        <Form {...layout}name="control-hooks"
                          onFinish={ formIsValid }>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input name!' }]}
          >
            <Input placeholder="Type here.."
                   onChange={e => setnameField(e.target.value)}
                   value={nameField}
            />
          </Form.Item>
          <Form.Item
            name="school"
            label="School/Institution Name"
            rules={[{ required: true, message: 'Please input School/Institution Name!' }]}
          >
            <Input placeholder="Type here.."
                   onChange={e => setschoolField(e.target.value)}
                   value={schoolField}
            />
          </Form.Item>
          <Form.Item
            name="area"
            label="Area"
            rules={[{ required: true, message: 'Please input area!' }]}
          >
            <Input placeholder="Type here.."
                   onChange={e => setareaField(e.target.value)}
                   value={areaField}
            />
          </Form.Item>
          <Form.Item>
            <div className="researcher-profile__changes-btns">
              <Button className="researcher-profile__save-btn" type="primary"
                      htmlType="submit"
                     >
                {isLoading ? <Loader /> : 'Save changes'}
              </Button>
              <Button className="researcher-profile__cancel-btn"
                      onClick={resetFieldsValue}
              >
                Cancel
              </Button>
            </div>
          </Form.Item>
        </Form>
        {/*<div className="researcher-profile__fields-wrapper">*/}
        {/*  <p>Name</p>*/}
        {/*  <Input placeholder="Type here.."*/}
        {/*    onChange={e => setnameField(e.target.value)}*/}
        {/*    value={nameField}*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div className="researcher-profile__fields-wrapper">*/}
        {/*  <p>School/Institution Name</p>*/}
        {/*  <Input placeholder="Type here.."*/}
        {/*    onChange={e => setschoolField(e.target.value)}*/}
        {/*    value={schoolField}*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div className="researcher-profile__fields-wrapper">*/}
        {/*  <p>Area of Research</p>*/}
        {/*  <Input placeholder="Type here.."*/}
        {/*    onChange={e => setareaField(e.target.value)}*/}
        {/*    value={areaField}*/}
        {/*  />*/}
        {/*</div>*/}

      </div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ResearcherProfile)

export default AuthRedirectComponent
