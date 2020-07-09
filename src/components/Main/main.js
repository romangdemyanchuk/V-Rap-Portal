/* eslint-disable */
import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./main.scss";
import { Button } from 'antd'
import MainLogin from '../Login/Login'

const Main = () => {
  const [registerForm, setRegisterForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const typeOfForm = () => {
    setRegisterForm(true);
    setIsVisible(true)
  }
  return (
    <div className="container">
      <div className="main-page-wrapper">
        {isVisible && <MainLogin registerForm={registerForm} setRegisterForm={setRegisterForm}/>}
        <div className="main-page-header">V-Rap</div>
        <div className="main-page-btns">
          {/*<Link to={"/participant-register"}>*/}
            <Button type="button" className="main-block-btn btn btn-light"
              onClick={typeOfForm}>
              I`m Participant
            </Button>
          {/*</Link>*/}
          <Link to={"/researcher-login"}>
            <Button type="button" className="main-block-btn btn btn-light">
              I`m Researcher
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Main;
