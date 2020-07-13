import React from 'react'
import { Redirect } from 'react-router'
import { useSelector } from 'react-redux'

const WithAuthRedirect = Component => {
  const RedirectComponent = props => {
    const isAuthState = useSelector(state => state.isAuth)
    if (!isAuthState) return <Redirect to='/participant-login' />
    return <Component {...props} />
  }

  return RedirectComponent
}

export default WithAuthRedirect
