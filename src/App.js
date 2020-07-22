/* eslint-disable */
import React from "react"
import { Route } from "react-router-dom"
import Main from "./components/Main"
import CaseStudies from "./components/Main/Researcher/ResearcherStudies"
import ParticipantProfile from "./components/Main/Participant/ParticipantProfile"
import PersonalStats from "./components/Main/Researcher/ResearcherStudies/CreateNewCase"
import ParticipantStudies from "./components/Main/Participant/ParticipantStudies"
import ResearcherProfile from './components/Main/Researcher/ResearcherProfile'
import ResearcherLogin from './components/Login/ResearcherLogin'
import LoginPage from './components/Admin/AdminLogin'
import AdminPage from './components/Admin/AdminPage'
import ListOfCaseStudies from "./components/Admin/AdminPage/ListOfCaseStudies"
import ListOfResearchers from "./components/Admin/AdminPage/ListOfResearchers"
import MainLogin from './components/Login/Login'
import './styles/index.styl'
import EditCase from './components/Main/Researcher/ResearcherStudies/EditCase'


const App = () => {
  return (
    <div className="root-App">
      <Route path="/" component={Main} exact />
      <Route path="/participant-login" component={MainLogin} />
      <Route path="/researcher-studies" component={CaseStudies} />
      <Route path="/participant-profile" component={ParticipantProfile} />
      <Route path="/researcher-login" component={ResearcherLogin} />
      <Route path="/research-create-studies" component={PersonalStats} />
      <Route path="/researcher-profile" component={ResearcherProfile} />
      <Route path="/participant-studies" component={ParticipantStudies} />
      <Route path="/admin-portal" component={AdminPage} />
      <Route path="/admin" component={LoginPage} />
      <Route path="/researchers-list" component={ListOfResearchers} />
      <Route path="/all-studies-list" component={ListOfCaseStudies} />
      <Route path="/edit-case/:id"
        render={({ match }) => {
          const { id } = match.params;
          return <EditCase id={id} />
        }} />
    </div>
  )
}

export default App;
