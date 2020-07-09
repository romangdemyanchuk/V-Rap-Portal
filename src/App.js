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
import ParticipantRegisterForm from './components/Login/ParticipantRegister/participantRegisterForm'
import ParticipantLogin from './components/Login/ParticipantLogin/participantLoginForm'
import ResearcherLogin from './components/Login/ResearcherLogin'
import LoginPage from './components/Admin/AdminLoginForm'
import MainPage from './components/Admin/MainPage'
import ListOfCaseStudies from "./components/Admin/ListOfCaseStudies"
import ListOfResearchers from "./components/Admin/ListOfResearchers"
import MainLogin from './components/Login/Login'
import React from "react"
import './styles/index.styl'
const App = () => {
  return (
    <div className="root-App">
    <Router>
      <Route path="/" component={Main} exact />
      {/*<Route path="/participant-register" component={ParticipantRegisterForm}/>*/}
      {/*<Route path="/participant-login" component={ParticipantLogin}/>*/}
      <Route path="/login" component={MainLogin}/>
      {/*<Route path="/participant-login" component={ParticipantLogin}/>*/}
      {/*<Route path="/about-studies" component={AboutStudies} />*/}
      <Route path="/researcher-studies" component={CaseStudies} />
      <Route path="/participant-upload" component={FileUpload} />
      <Route path="/participant-profile" component={ParticipantProfile} />
      <Route path="/research-create-studies" component={PersonalStats} />
      <Route path="/researcher-profile" component={ResearcherProfile} />
      <Route path="/participant-studies" component={ParticipantStudies} />
      <Route path="/admin-portal" component={MainPage} />
      <Route path="/admin" component={LoginPage} />
      <Route path="/researchers-list" component={ListOfResearchers} />
      <Route path="/all-studies-list" component={ListOfCaseStudies} />
    </Router>
    </div>
  )
};
export default App;
