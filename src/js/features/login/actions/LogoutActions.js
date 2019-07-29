import {action} from "mobx"
import UserDetailsStore from "../state/UserDetailsStore"

class LogoutActions {
  @action
  onLogout() {
    UserDetailsStore.userSessionLogout()
  }
}

export default new LogoutActions()