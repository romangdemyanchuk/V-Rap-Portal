/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { Input, Button, InputNumber, Cascader, Form, Select, TreeSelect } from 'antd'
import "./participantProfile.scss";
import WithAuthRedirect from "../../../../hoc/hoc";
import { countryVariants, headsetsVariants } from '../../../../modules/session/data'

const ParticipantProfile = () => {
  return (
    <Form>
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
              <InputNumber min={1} max={100} className="input-number" placeholder="Age"/> 
            </div>
            <div className="participant-profile__fields-wrapper">
              <p className="before-dropdown">Location</p>
              <Cascader options={countryVariants} placeholder="--Countries--"
                // onChange={e => setLocation(e.target.value)}
                // value={location}
              />
            </div>
           <div className="participant-profile__fields-wrapper">
             <p>Average Income(USD)</p>
             <Input placeholder="Average Income" />
           </div>
            <div className="participant-profile__fields-wrapper">
              <p className="before-dropdown">Main VR Headset</p>
              <Cascader options={headsetsVariants} placeholder="--Headsets--"/>
            </div>
            <div className="participant-profile__fields-wrapper">
              <p className="before-dropdown">New Select Box(Trello)</p>
              <Cascader options={headsetsVariants} placeholder="--Trello Select--"/>
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
      {/* <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item> */}
    </div>
    </Form>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ParticipantProfile)


export default AuthRedirectComponent;
