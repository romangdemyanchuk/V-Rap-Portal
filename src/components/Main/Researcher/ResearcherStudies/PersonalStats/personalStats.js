/* eslint-disable */
import React, { useState } from 'react'
import userImg from "../../../../../images/user.svg";
import { Link } from "react-router-dom";
import { Input, Button, Progress, Dropdown, Menu, message, Slider, InputNumber } from 'antd'
const { TextArea } = Input;
import "./personalStats.css";
import { DownOutlined } from '@ant-design/icons'

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
    <div className="container">
      <div className="main-page-wrapper">
        {/*<div className="study-block-header">*/}
          {/*<div className="study-block-header-btns">*/}
          {/*  <Button className="study-profile-btn">Profile</Button>*/}
          {/*  <Button className="study-research-btn">My studies</Button>*/}
          {/*</div>*/}
          {/*<HeaderBtns/>*/}
        {/*</div>*/}
        <div className="btns-wrapper">
          <Link to={'/researcher-profile'}>
            <Button className="profile-btn">Profile</Button>
          </Link>
          <Link to={'/participant-studies'}>
            <Button className="research-btn active">Research Studies</Button>
          </Link>
        </div>
        <div className="personal-wrapper">
          <div className="file-block">
            <div className="personal-heading">Create Research Studies</div>
            <div className="personal-info-img">
              <img src={userImg} alt="userImg" />
            </div>
            <div className="upload-btns">
              <Button className="file-upload-btn" type="primary">Upload Image</Button>
            </div>
            <div className="personal-blocks-wrapper">
              <div className="personal-left-block">
                <Button className="upload-vr-btn">Upload VR File</Button>
                <Progress percent={30} size="small" />
                <div className="fields-wrapper">
                  <p>Title</p>
                  <Input placeholder="Title" />
                </div>
                <div className="fields-wrapper">
                  <p>Description</p>
                  <TextArea placeholder="Type here" rows={3} className="personal-stats-area" />
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
              </div>
              <div className="personal-right-block">
                <div className="fields-wrapper">
                  <p>Age(range)</p>
                  <Slider range defaultValue={[10, 85]} disabled={disabled} />
                </div>
                <div className="fields-wrapper">
                  <p>Average Income(range)</p>
                  <Slider range defaultValue={[10, 85]} disabled={disabled} />
                </div>
                <div className="fields-wrapper">
                  <p>Required number of participant</p>
                  <InputNumber min={1} max={300} defaultValue={100} onChange={onChange}
                               className="input-number"/>
                </div>
                <div className="fields-wrapper">
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
            <div className="research-footer-btns">
              <Button type="primary" className="create-research-btn">Create Research Study</Button>
              <Link to={'/researcher-profile'}>
                <Button>Close Page</Button>
              </Link>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalStats;
