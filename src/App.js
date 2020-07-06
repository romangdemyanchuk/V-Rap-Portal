/* eslint-disable */
import { BrowserRouter } from "react-router-dom";
// import { authorized } from 'modules/router/routes'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import AboutStudies from "./components/Main/Participant/StudyInfo/FileUpload/AboutStudies";
import CaseStudies from "./components/Main/Researcher/CaseStudies";
import FileUpload from "./components/Main/Participant/StudyInfo/FileUpload";
import Login from "./components/ParticipantRegister";
import PersonalInfo from "./components/Main/Participant/PersonalInfo";
import PersonalStats from "./components/Main/Researcher/PersonalStats";
import StudyInfo from "./components/Main/Participant/StudyInfo";
import UploadSim from "./components/Main/Researcher/CaseStudies/UploadSim";
import ResearcherProfile from './components/Main/Researcher/Researcher-profile'
import ParticipantRegisterForm from './components/ParticipantRegister/participantRegisterForm'
import ParticipantLogin from './components/ParticipantLogin/participantLoginForm'
import ListOfCaseStudies from "./components/Admin/ListOfCaseStudies"
import ListOfResearchers from "./components/Admin/ListOfResearchers"
import React from "react";

/* eslint-disable */

const App = () => {
  return (
    <Router>
      {/*<ListOfResearchers/>*/}
      {/*<ListOfCaseStudies/>*/}
      {/*<Main/>*/}

      <Route path="/" component={Main} exact />
      <Route path="/par-register-form" component={ParticipantRegisterForm}/>
      <Route path="/par-login-form" component={ParticipantLogin}/>
      <Route path="/about-studies" component={AboutStudies} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/file-upload" component={FileUpload} />
      <Route path="/login" component={Login} />
      <Route path="/personal-info" component={PersonalInfo} />
      <Route path="/personal-stats" component={PersonalStats} />
      <Route path="/researcher-profile" component={ResearcherProfile} />
      <Route path="/study-info" component={StudyInfo} />
      <Route path="/upload-sim" component={UploadSim} />
    </Router>
  );
};

export default App;
