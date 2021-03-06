/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Button, Skeleton } from "antd";
import { Link} from "react-router-dom";
import WithAuthRedirect from "../../../../hoc/hoc";
import "./researcherStudies.css";
import { useDispatch, useSelector } from "react-redux";
import { AllCasesInfo } from '../../../../modules/session/cases-reducer'
import Case from "./Case/case";
import Header from "./../header";

const ResearcherStudies = () => {
  let dispatch = useDispatch();
  const [isStudiesBtnActive] = useState(true);

  const allCaseStudies = useSelector((state) => state.cases.allCaseStudies);
  const isLoading = useSelector((state) => state.auth.isLoading);

  useEffect(() => AllCasesInfo()(dispatch), []);

  return <>
      {isLoading ? (
          <Skeleton active className="studiesLoader" />
      ) : (
        <div className="ResearcherStudies">
          <Header isStudiesBtnActive={isStudiesBtnActive} type={1}/>
          <div className="researcher-profile__header-wrapper">
            <div className="researcher-studies__personal-heading">
              Research Studies
            </div>
            <Link to={"/research-create-studies"}>
              <Button type="primary" className="create-new-study">
                Create New Research Study
              </Button>
            </Link>
          </div>
          <div className="ResearcherStudies-cases">
            {allCaseStudies.length === 0 ? (
              <h1 className="emptyCaseStudies"> You have not created any research studies</h1>
            ) : (
              allCaseStudies.map((study) => (
                <Case study={study} key={study._id} />
              ))
            )}
          </div>
        </div>
      )}
    </>
};

const AuthRedirectComponent = WithAuthRedirect(ResearcherStudies);

export default AuthRedirectComponent;
