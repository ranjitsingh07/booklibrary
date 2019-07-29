import { observable, action } from "mobx"

import LoginApi from "../api/LoginApi"
import LogoutApi from "../api/LogoutApi"

class UserDetailsStore {
  @observable userName
  @observable password
  @observable userEmail
  @observable isAuthenticated
  @observable isLoginError
  @observable isLoading
  @observable authToBeChecked
  @observable isLogout

  constructor() {
    this.isLoading=true
    this.authToBeChecked=true
    this.isAuthenticated=false
    this.userEmail=null
    this.userName = null
    this.password = null
    this.isLoginError=false
    this.isLogout=false
  }

  submitLoginDetails() {
    this.isLoading=true
    LoginApi.authenticate(JSON.stringify({
      userName: this.userName,
      password: this.password
    })).then(this._onSuccess, this._onError)
  }

  checkUserAuthentication() {
    LoginApi.getUserSession().then(this._onSuccess, this._onError)
  }

  userSessionLogout() {
    this.isLoading=true
    LogoutApi.userLogout().then(this._onLogout, this._onLogout)
  }

  setUserName(userName) {
    this.userName = userName
  }

  setPassword(password) {
    this.password = password
  }

  @action.bound
  _onSuccess(response) {
    this.authToBeChecked=false
    this.isLoading=false
    if (response.userAuthenticated) {
      this.isAuthenticated = response.userAuthenticated
      this.userEmail = response.email
      this.isLoginError = false
    }
  }

  @action.bound
  _onError() {
    this.authToBeChecked=false
    this.isLoading=false
    this.isLogout = false
    this.isLoginError = true
  }

  @action.bound
   _onLogout(response) {
     this.authToBeChecked=false
     this.isLoading=false
     this.isAuthenticated=false
     this.userEmail = null
     this.userName = null
     this.password = null
     this.isLoginError=false
     this.isLogout=true
   }

   @action.bound
   _reset() {
      this.isLoading=true
      this.authToBeChecked=true
      this.isAuthenticated=false
      this.userFullName = null
      this.adShortName = null
      this.userGroups = []
      this.userEmail = null
      this.userName = null
      this.password = null
      this.isLoginError=false
      this.isLogout=false
   }
}

export default new UserDetailsStore()
