import {action} from "mobx";
import UserDetailsStore from "../state/UserDetailsStore"

class LoginActions {
  @action
  onSubmitLoginDetails() {
    UserDetailsStore.submitLoginDetails()
  }

  @action
  checkUserAuthenticationStatus() {
    UserDetailsStore.checkUserAuthentication()
  }

  @action
  setUserName(event) {
    UserDetailsStore.setUserName(event.target.value)
  }

  @action
  setPassword(event) {
    UserDetailsStore.setPassword(event.target.value)
  }
}

export default new LoginActions()