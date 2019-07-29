import BaseApi from "../../../utils/BaseApi"

class LoginApi extends BaseApi {
  getUserSession() {
    return super.get("/public/userSession")
  }

  authenticate(data) {
    return super.post("/public/authenticate", data)
  }
}

export default new LoginApi()