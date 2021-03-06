/* eslint-disable */
import React, { useState } from "react";
import userImg from "../../../../../images/user.svg";
import { Button, Tag } from "antd";
import { ChangingStatus } from "../../../../../api";
import { Link } from "react-router-dom";
import DeleteCaseModal from '../../../../Admin/AdminPage/ListOfCaseStudies/DeleteCaseModal'
import styled from "styled-components";


const StyledResearchStudyBtns = styled.section`
  display: flex;
  justify-content: flex-end;
`;
const StyledRootCase = styled.section`
  overflow: hidden;
`;
const Case = ({ study }) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const deleteClick = () => {
    setDeleteModalIsOpen(true);
  };

  let caseStatusName = (status) => {
    if (status === 0) return <Tag color="gold">Pending</Tag>;
    else if (status === 1) return <Tag color="gray">Reject</Tag>;
    else if (status === 2) return <Tag color="green">In Progress</Tag>;
    else if (status === 3) return <Tag color="red">Closed</Tag>;
  };

  let caseButtonsShown = (study) => {
    if (study.status === 0)
      return (
        <StyledResearchStudyBtns className="research-study-btns">
          <Link to={`/edit-case/${study._id}`}>
            <Button
              style={{ backgroundColor: "#0E4BEF", color: "white" }}
              className="upload-btn"
            >
              Edit
            </Button>
          </Link>
          <Button
            type="danger"
            className="upload-btn"
            onClick={() => deleteClick(study._id)}
          >
            Delete
          </Button>
        </StyledResearchStudyBtns>
      );
    else if (study.status === 1)
      return (
        <div className="research-study-btns">
          <Button
            type="danger"
            className="upload-btn"
            onClick={() => deleteClick(study._id)}
          >
            Delete
          </Button>
        </div>
      );
    else if (study.status === 2)
      return (
        <div className="research-study-btns">

          <Link to={{
            pathname: `/case-results/${study._id}`,
            propsSearch:'case'
          }}>
            <Button className="status-btn">
              View Results
            </Button>
          </ Link>

          <Button
            type="danger"
            className="upload-btn"
            onClick={() => {
              ChangingStatus(study._id);
            }}
          >
            Close
          </Button>
          <Button
            type="danger"
            className="upload-btn"
            onClick={() => deleteClick(study._id)}
          >
            Delete
          </Button>
        </div>
      );
    else if (study.status === 3)
      return (
        <div className="research-study-btns">
          <Button
            type="danger"
            className="upload-btn"
            onClick={() => deleteClick(study._id)}
          >
            Delete
          </Button>
        </div>
      );
  };

  return (
    <StyledRootCase>
      <DeleteCaseModal
        deleteModalIsOpen={deleteModalIsOpen}
        setDeleteModalIsOpen={setDeleteModalIsOpen}
        id={study._id}
      />
      <div key={study._id} className="researcher-studies__study-wrapper">
        <div className="researcher-studies__info-wrapper">
          <div className="researcher-studies__study-info-img">
            <img src={study.avatarUrl || userImg} alt="userImg"
                 style={{height: '150px', width: '150px', borderRadius: '50%'}}
            />
          </div>
          <div className="study">
            <div className="researcher-studies__heading">{study.title}</div>
            <div className="researcher-studies__info">{study.description}</div>
            <div
              className="researcher-studies__require"
              style={{ fontWeight: "bold" }}
            >
              Require Headset
            </div>
            <div className="researcher-studies__device">{study.headset}</div>
          </div>
          <div className="researcher-studies__btns">
            {caseStatusName(study.status)}
          </div>
        </div>
        {caseButtonsShown(study)}
      </div>
    </StyledRootCase>
  );
};

export default Case;
