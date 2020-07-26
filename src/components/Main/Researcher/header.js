import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
/*eslint-disable*/

const Header = ({disableButtons}) => {
  const logOut = () => {
    localStorage.clear();
    if (typeof window !== 'undefined') {
      window.location = '/'
    }
  }
  return <div className='participant-profile__btns-wrapper'>
    <div>
        <Link to={'/researcher-profile'}>
            <Button className='participant-profile__btn'>Profile</Button>
        </Link>
        <Link to={'/researcher-studies'}>
            <Button className='research-btn' disabled={disableButtons}>
                Research Studies
            </Button>
        </Link>
    </div>
    <div className='log-out-btn'>
        <Button  onClick={logOut}>
          Log out
        </Button>
    </div>
  </div>
}

export default Header
