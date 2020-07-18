/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import WithAuthRedirect from "../../../../hoc/hoc";
import { ApiEditUserInfo, ApiUserInfo } from '../../../../modules/session/session-reducers'
import Loader from '../../../Loader/loader'
import "./researcherProfile.scss";
import { useDispatch, useSelector } from 'react-redux'


const ResearcherProfile = () => {

  const userData = useSelector(state => state.userInfo)

  const [nameField, setnameField] = useState(userData.name);
  const [schoolField, setschoolField] = useState(userData.school);
  const [areaField, setareaField] = useState(userData.area);

  const isLoading = useSelector(state => state.isLoading)

  console.log(schoolField)

  let dispatch = useDispatch()

  useEffect(() => {
    setnameField(userData.name)
    setschoolField(userData.school)
    setareaField(userData.area)
    ApiUserInfo()(dispatch)
  }, [userData.school, userData.area, userData.name])

  const resetFieldsValue = () => {
    setnameField('')
    setschoolField('')
    setareaField('')
  }
  // const submitEditUserInfo = (values) => {
  //   ApiEditUserInfo(values)(dispatch);
  //   dispatch(LoadingAC(true))
  // }
  return (
    <div className="root-ResearcherProfile">
      <div className="researcher-profile__btns-wrapper">
        <Link to={'/researcher-profile'}>
          <Button className="profile-btn active researcher-profile__btn">Profile</Button>
        </Link>
        <Link to={'/researcher-studies'}>
          <Button className="research-btn">Research Studies</Button>
        </Link>
      </div>
      <div className="researcher-profile__personal-fields-wrapper">
        <div className="researcher-profile__personal-heading">Profile Information</div>
        <div className="researcher-profile__fields-wrapper">
          <p>Name</p>
          <Input placeholder="Type here.."
            onChange={e => setnameField(e.target.value)}
            value={nameField}
          />
        </div>
        <div className="researcher-profile__fields-wrapper">
          <p>School/Institution Name</p>
          <Input placeholder="Type here.."
            onChange={e => setschoolField(e.target.value)}
            value={schoolField}
          />
        </div>
        <div className="researcher-profile__fields-wrapper">
          <p>Area of Research</p>
          <Input placeholder="Type here.."
            onChange={e => setareaField(e.target.value)}
            value={areaField}
          />
        </div>
        <div className="researcher-profile__changes-btns">
          <Button className="researcher-profile__save-btn" type="primary"
            onClick={() => { ApiEditUserInfo({ name: nameField, school: schoolField, area: areaField })(dispatch) }} >
            {isLoading ? <Loader /> : 'Save changes'}
          </Button>
          <Button className="researcher-profile__cancel-btn"
            onClick={resetFieldsValue}
          >
            Cancel
            </Button>
        </div>
      </div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ResearcherProfile)

export default AuthRedirectComponent
