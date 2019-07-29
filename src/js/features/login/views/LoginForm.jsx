import React from 'react'

import logo from '../../../Assets/Images/Shopping_cart.png'
import Input from '../../../Components/Fragments/Input'
import Loader from '../../../Components/Fragments/Loader'
import LoginActions from "../actions/LoginActions"
import Notification from "../../../Components/Notifications"
import UserDetailsStore from "../state/UserDetailsStore"
import observerWithDisplayName from "../../../utils/observerWithDisplayName"

const LoginForm = observerWithDisplayName(() => {
  return (
    <div className = "container">
          <div id="bodyContent" className="text-center">
            <img class="mb-4" src={logo} alt="" width="72" height="72" />
            <form onSubmit={onSubmit} autoComplete="On" className="form form-signin">
              <Notification
                showOrHide={UserDetailsStore.isLoginError}
                message="Invalid username and password combination."
                classNames="alert alert-danger"
              />
              <Notification
                showOrHide={UserDetailsStore.isLogout}
                message="Logged out successfully!"
                classNames="alert alert-info"
              />
              <Input
                type="email"
                name="userName"
                id="userName"
                autoComplete="On"
                placeholder="Email address"
                required={true}
                autoFocus={true}
                onChange={onUserNameChange}
              />
              <Input
                type="password"
                name="password"
                id="password"
                autoComplete="Off"
                placeholder="Password"
                required={true}
                autoFocus={false}
                onChange={LoginActions.setPassword}
              />
              <div>
                <button class="btn btn-lg btn-custom btn-block" id="loginSubmit" type="submit">
                  Login
                </button>
              </div>
            </form>
            <Loader showOrHide={UserDetailsStore.isLoading}/>
          </div>
    </div>
  )

  function onUserNameChange(e) {
    LoginActions.setUserName(e)
  }

  function onSubmit(e) {
    e.preventDefault()
    LoginActions.onSubmitLoginDetails()
  }
}, "LoginForm")



export default LoginForm
