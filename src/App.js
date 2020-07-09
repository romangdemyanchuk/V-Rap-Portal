/* eslint-disable */
import { BrowserRouter as Router, Route } from "react-router-dom"
import Main from "./components/Main"
// import AboutStudies from "./components/Main/Participant/StudyInfo/FileUpload/AboutStudies";
import CaseStudies from "./components/Main/Researcher/ResearcherStudies"
import FileUpload from "./components/Main/Participant/ParticipantStudies/FileUpload"
import ParticipantProfile from "./components/Main/Participant/ParticipantProfile"
import PersonalStats from "./components/Main/Researcher/ResearcherStudies/PersonalStats"
import ParticipantStudies from "./components/Main/Participant/ParticipantStudies"
import ResearcherProfile from './components/Main/Researcher/ResearcherProfile'
import ResearcherLogin from './components/Login/ResearcherLogin'
import LoginPage from './components/Admin/AdminLoginForm'
import AdminPage from './components/Admin/AdminPage'
import ListOfCaseStudies from "./components/Admin/AdminPage/ListOfCaseStudies"
import ListOfResearchers from "./components/Admin/AdminPage/ListOfResearchers"
import MainLogin from './components/Login/Login'
import React from "react"
import './styles/index.styl'

const App = () => {
  return (
    <div className="root-App">
    <Router>
      <Route path="/" component={Main} exact />
      <Route path="/login" component={MainLogin}/>
      <Route path="/researcher-studies" component={CaseStudies} />
      <Route path="/participant-upload" component={FileUpload} />
      <Route path="/participant-profile" component={ParticipantProfile} />
      <Route path="/researcher-login" component={ResearcherLogin} />
      <Route path="/research-create-studies" component={PersonalStats} />
      <Route path="/researcher-profile" component={ResearcherProfile} />
      <Route path="/participant-studies" component={ParticipantStudies} />
      <Route path="/admin-portal" component={AdminPage} />
      <Route path="/admin" component={LoginPage} />
      <Route path="/researchers-list" component={ListOfResearchers} />
      <Route path="/all-studies-list" component={ListOfCaseStudies} />
    </Router>
    </div>
  )
};

export default App;
