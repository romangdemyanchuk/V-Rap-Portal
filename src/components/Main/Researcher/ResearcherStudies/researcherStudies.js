/* eslint-disable */
import React, { useEffect} from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import WithAuthRedirect from '../../../../hoc/hoc';
import './researcherStudies.css';
import { useDispatch, useSelector } from 'react-redux'
import { ApiAllCasesInfo} from '../../../../modules/session/session-reducers'
import EachStudy from './EachStudy'

const ResearcherStudies = () => {
  const dispatch = useDispatch()
  const researcherStudies = useSelector(state => state.researcherStudies);


  useEffect(() => {
    ApiAllCasesInfo()(dispatch)
  }, [])
  const studies = researcherStudies.map(study => <EachStudy key={study.id} study={study}/>);

  return (
    <div className='ResearcherStudies'>
      <div className='researcher-studies__btns-wrapper'>
        <Link to={'/researcher-profile'}>
          <Button className='researcher-studies__profile-btn'>Profile</Button>
        </Link>
        <Link to={'/researcher-studies'}>
          <Button className='researcher-studies__btn active'>Research Studies</Button>
        </Link>
      </div>
      <div className='researcher-profile__header-wrapper'>
        <div className='researcher-studies__personal-heading'>Research Studies</div>
        <Link to={'/research-create-studies'}>
          <Button type='primary' className='create-new-study'>Create New Research Study</Button>
        </Link>
      </div>
      <div>{studies}</div>

     </div>
  );
};

const AuthRedirectComponent = WithAuthRedirect(ResearcherStudies)

export default AuthRedirectComponent;
