import BaseApi from "../../../utils/BaseApi"

class LogoutApi extends BaseApi {
  userLogout() {
    return super.get("/rest/logout")
  }
}

export default new LogoutApi()