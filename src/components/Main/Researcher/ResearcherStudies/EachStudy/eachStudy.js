/* eslint-disable */
import React, {useState } from 'react'
import './eachStudy.css';
import userImg from '../../../../../images/user.svg'
import { Button } from 'antd'
import { ApiChangeStatus} from '../../../../../modules/session/session-reducers'
import DeleteModal from '../../../../Admin/AdminPage/ListOfResearchers/ResearcherChanges/DeleteModal'
import { useDispatch } from 'react-redux'

const EachStudy = ({study}) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const dispatch = useDispatch()

  const deleteCase = () => {
    setDeleteModalIsOpen(true);
  }
  return (
    <div className='EachStudy'>
      <DeleteModal deleteModalIsOpen={deleteModalIsOpen} setDeleteModalIsOpen={setDeleteModalIsOpen}
                   title={'Are you sure you want to delete this case?'} id={study.id}/>
      <div key={study.id} className='researcher-studies__study-wrapper'>
        <div className='researcher-studies__info-wrapper'>
          <div className='researcher-studies__study-info-img'>
            <img src={userImg} alt='userImg' />
          </div>
          <div className='study'>
            <div className='researcher-studies__heading'>
              {study.heading}
            </div>
            <div className='researcher-studies__info'>
              {study.info}
            </div>
            <div className='researcher-studies__require'>
              {study.required}
            </div>
            <div className='researcher-studies__device'>
              {study.device}
            </div>
          </div>
          <div className='researcher-studies__btns'>
            <Button
              className='status-btn'
              onClick={() => { ApiChangeStatus(study.id)(dispatch)}}
            >
              In progress
            </Button>
          </div>
        </div>
        <div className='research-study-btns'>
          <Button className='status-btn'>View Results</Button>
          <Button type='danger' className='upload-btn'>Close</Button>
          <Button
            type='danger' className='upload-btn'
            onClick={() => deleteCase(study.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EachStudy;
