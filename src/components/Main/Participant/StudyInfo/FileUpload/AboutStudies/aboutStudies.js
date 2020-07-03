/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import "./aboutStudies.css";
import { Button } from "antd";

const AboutStudies = () => {
  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div className="studies-title">
          Success!You will be emailed shortly your compensation for the study
        </div>
        <Link to={"/case-studies"}>
          <Button className="choose-button">More Studies</Button>
        </Link>
      </div>
    </div>
  );
};
export default AboutStudies;
