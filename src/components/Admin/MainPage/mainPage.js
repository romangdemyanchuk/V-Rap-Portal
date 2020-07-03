import React from "react";
import "./mainPage.css";

const MainPage = () => {
  return (
    <div>
      <div className="container">
        <div className="main-page-wrapper">
          <div className="main-page-btns">
            <button type="button" className="main-block-btn btn btn-light">
              Researchers
            </button>
            <button type="button" className="main-block-btn btn btn-light">
              All Case Studies
            </button>
            <button
              type="button"
              className="main-block-btn pending btn btn-light"
            >
              Pending Case Studies
              <div className="case-studies-count">3</div>
            </button>
            <button type="button" className="main-block-btn btn btn-light">
              List of Admin Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
