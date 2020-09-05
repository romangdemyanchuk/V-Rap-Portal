/* eslint-disable */
import React from "react";
import { Link, useHistory } from 'react-router-dom'
import { Button } from "antd";

const Header = ({ disableButtons, isProfileBtnActive, isStudiesBtnActive, type }) => {
  const history = useHistory();
  const logOut = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <div className="participant-profile__btns-wrapper">
      <div>
        <Link to={type === 0 ? "/participant-profile" : "/researcher-profile"}>
          <Button className={isProfileBtnActive ? "participant-profile__btn active" : "participant-profile__btn" }>Profile</Button>
        </Link>
        <Link to={type === 0 ? "/participant-studies" :'/researcher-studies'}>
          <Button className={isStudiesBtnActive ? "research-btn active" : "research-btn"}
                  disabled={disableButtons}
          >
            Research Studies
          </Button>
        </Link>
      </div>
      <div className="log-out-btn">
        <Button onClick={logOut}>Log out</Button>
      </div>
    </div>
  );
}

export default Header;
