/* eslint-disable */
import React from 'react'
import { Redirect } from 'react-router'
import { useSelector } from 'react-redux'

const WithAuthRedirect = Component => {
  const RedirectComponent = props => {
    const isAuthState = useSelector(state => state.isAuth)
    // if (!isAuthState) return <Redirect to={props.location.pathname === ("/researcher-profile" || "/researcher-studies"
    //   || "/research-create-studies" || "/edit-case/:id") ? '/researcher-login' : '/participant-login'} />
    return <Component {...props} />
  }
  return RedirectComponent
}
export default WithAuthRedirect
