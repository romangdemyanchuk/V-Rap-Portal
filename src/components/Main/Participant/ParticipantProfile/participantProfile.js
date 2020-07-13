/* eslint-disable */
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Input, Button, Menu, Dropdown, message, InputNumber } from "antd";
import { DownOutlined } from '@ant-design/icons';
import "./participantProfile.scss";
import WithAuthRedirect from "../../../../hoc/hoc";
import { RegisterApi } from '../../../../api'
import { RegisterAC } from '../../../../modules/session/session-reducers'
import { useSelector } from 'react-redux'
const ParticipantProfile = () => {
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
    <div className="root-PartProfile">
      <div className="participant-profile__btns-wrapper">
        <Link to={'/participant-profile'}>
          <Button className="participant-profile__btn active">Profile</Button>
        </Link>
        <Link to={'/participant-studies'}>
          <Button className="research-btn">Research Studies</Button>
        </Link>
      </div>
      <div className="participant-profile__personal-info-block">
        <div className="participant-profile__wrapper">
          <div className="participant-profile__personal-heading">Profile Information</div>
          <div className="participant-profile__fields">
            <div className="participant-profile__fields-wrapper">
              <p>Name</p>
              <Input placeholder="Name" />
            </div>
            <div className="participant-profile__fields-wrapper">
              <p>Age</p>
              <InputNumber min={1} max={100} defaultValue={25} onChange={onChange}
                className="input-number"/>
            </div>
            <div className="participant-profile__fields-wrapper">
              <p className="before-dropdown">Location</p>
              <div id="components-dropdown-demo-dropdown-button">
                <Dropdown overlay={menu}>
                  <Button>
                    --Countries-- <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
           <div className="participant-profile__fields-wrapper">
             <p>Average Income(USD)</p>
             <Input placeholder="Average Income" />
           </div>
            <div className="participant-profile__fields-wrapper">
              <p className="before-dropdown">Main VR Headset</p>
              <div id="components-dropdown-demo-dropdown-button">
                <Dropdown overlay={menu}>
                  <Button>
                    --Headsets-- <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="participant-profile__changes-btns">
            <Button className="participant-profile__save-btn"
              type="primary">
              Save changes
            </Button>
            <Button className="participant-profile__cancel-btn">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ParticipantProfile)


export default AuthRedirectComponent;
