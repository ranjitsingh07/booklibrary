import React from 'react'

import LogoutActions from "../actions/LogoutActions"
import observerWithDisplayName from "../../../utils/observerWithDisplayName"

const LogoutForm = observerWithDisplayName(() => {
  return (
    <form onSubmit={logout} className="logoutForm">
      <input type="submit" className="headLogout" value="Logout"/>
    </form>
  )

  function logout(e) {
    e.preventDefault()
    LogoutActions.onLogout()
  }
}, "LogoutForm")



export default LogoutForm