import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
/*eslint-disable*/

const Header = () => {

  const logOut = () => {
    localStorage.clear()
  }

  return <div className='participant-profile__btns-wrapper'>
    <div>
        <Link to={'/researcher-profile'}>
            <Button className='participant-profile__btn active'>Profile</Button>
        </Link>
        <Link to={'/researcher-studies'}>
            <Button className='research-btn' disabled=''>
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
