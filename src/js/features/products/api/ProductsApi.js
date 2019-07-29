import BaseApi from "../../../utils/BaseApi"

class ReportsApi extends BaseApi {

  fetchProducts(){
    return super.get(`/rest/products/list`)
  }
}

export default new ReportsApi()