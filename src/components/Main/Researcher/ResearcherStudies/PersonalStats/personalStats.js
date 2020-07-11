/* eslint-disable */
import React, { useState } from 'react'
import userImg from "../../../../../images/user.svg";
import { Link } from "react-router-dom";
import { Input, Button, Progress, Dropdown, Menu, message, Slider, InputNumber } from 'antd'
const { TextArea } = Input;
import "./personalStats.scss";
import { DownOutlined } from '@ant-design/icons'
import WithAuthRedirect from '../../../../../hoc/hoc';

const PersonalStats = () => {
  const [disabled, setDisabled] = useState(false);
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  function onChange(value) {
    console.log('changed', value);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        3rd item
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="root-PersonalStats">
      <div className="personal-stats__tns-wrapper">
        <Link to={'/researcher-profile'}>
          <Button className="profile-btn">Profile</Button>
        </Link>
        <Link to={'/participant-studies'}>
          <Button className="research-btn active">Research Studies</Button>
        </Link>
      </div>
      <div className="personal-stats__wrapper">
        <div className="personal-stats__block">
          <div className="personal-stats__personal-heading">Create Research Studies</div>
          <div className="personal-stats__info-img">
            <img src={userImg} alt="userImg" />
            <div className="personal-stats__upload-btns">
              <Button className="file-upload-btn" type="primary">Upload Image</Button>
            </div>
          </div>
          <div className="personal-stats__blocks-wrapper">
            <div className="personal-stats__left-block">
              <Button className="personal-stats__btn">Upload VR File</Button>
              <Progress percent={30} size="small" />
              <div className="personal-stats__fields-wrapper">
                <p>Title</p>
                <Input placeholder="Title" />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p>Description</p>
                <TextArea placeholder="Type here" rows={3} className="personal-stats-area" />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p className="before-dropdown">Location</p>
                <div id="components-dropdown-demo-dropdown-button">
                  <Dropdown overlay={menu}>
                    <Button>
                      --Countries-- <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="personal-stats__right-block">
              <div className="personal-stats__fields-wrapper">
                <p>Age(range)</p>
                <Slider range defaultValue={[10, 85]} disabled={disabled} />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p>Average Income(range)</p>
                <Slider range defaultValue={[10, 85]} disabled={disabled} />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p>Required number of participant</p>
                <InputNumber min={1} max={300} defaultValue={100} onChange={onChange}
                             className="input-number"/>
              </div>
              <div className="personal-stats__fields-wrapper">
                <p className="before-dropdown">Supported Headsets</p>
                <div id="components-dropdown-demo-dropdown-button">
                  <Dropdown overlay={menu}>
                    <Button>
                      --Headsets-- <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
          <div className="personal-stats__footer-btns">
            <Button type="primary" className="personal-stats__create-research-btn">Create Research Study</Button>
            <Link to={'/researcher-profile'}>
              <Button>Close Page</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(PersonalStats)

export default AuthRedirectComponent;
