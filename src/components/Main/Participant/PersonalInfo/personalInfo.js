/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import userImg from "../../../../images/user.svg";
import { Input, Button, Menu, Dropdown, message, InputNumber } from "antd";
import HeaderBtns from '../HeaderBtns'
import { DownOutlined } from '@ant-design/icons';
import "./personalInfo.css";

const PersonalInfo = () => {
  function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

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
    <div className="container">
      <div className="main-page-wrapper">
        <HeaderBtns/>
        <div className="personal-info-block">
          <div className="file-block">
            {/*<div className="personal-info-img">*/}
            {/*  <img src={userImg} alt="userImg" />*/}
            {/*</div>*/}
            {/*<div className="upload-btns">*/}
            {/*  <Button className="file-upload-btn">File upload</Button>*/}
            {/*  <Button className="choose-btn">Choose</Button>*/}
            {/*</div>*/}
          </div>
          <div className="personal-info-wrapper">
            <div className="personal-heading">Profile Information</div>
            <div className="profile-fields">
              {/*<span>Name</span>*/}
              <div className="fields-wrapper">
                <p>Name</p>
                <Input placeholder="Name" />
              </div>
              <div className="fields-wrapper">
                <p>Age</p>
                <InputNumber min={1} max={100} defaultValue={25} onChange={onChange}
                  className="input-number"/>
              </div>
              <div className="fields-wrapper">
                <p className="before-dropdown">Location</p>
                <div id="components-dropdown-demo-dropdown-button">
                  <Dropdown overlay={menu}>
                    <Button>
                      --Countries-- <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>
              </div>
             <div className="fields-wrapper">
               <p>Average Income(USD)</p>
               <Input placeholder="Average Income" />
             </div>
              <div className="fields-wrapper">
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
            <div className="changes-btns">
              <Button className="save-btn"
                type="primary">
                Save changes
              </Button>
              <Button className="cancel-btn">Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfo;
