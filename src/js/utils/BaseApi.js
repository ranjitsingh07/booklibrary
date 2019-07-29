import Promise from "bluebird"
import $ from "jquery"
import _ from "lodash"

class BaseApi {
  constructor() {
    this.numberOfRetriesLeft = 4
    this.$ = Promise.promisify($)
    this.defaultAjaxParams = {
      dataType: "json"
    }
    this.get = this.get.bind(this)
    this.post = this.post.bind(this)
  }

  get(url) {
    const error = (xhr) => {
      if (xhr.status === 503 && this.numberOfRetriesLeft > 0) {
        this.numberOfRetriesLeft = this.numberOfRetriesLeft - 1
        return this.get(url)
      } else {
        return xhr
      }
    }

    const config = _.assign(
      {},
      this.defaultAjaxParams,
      { url, method: "GET" }
    )

    return this.$.ajax(config).then(success => success, error)
  }

  post(url, data) {
    const config = _.assign(
      {},
      this.defaultAjaxParams,
      { url, method: "POST", data }
    )

    return this.$.ajax(_.assign({}, config)).then(success => success, error => error)
  }

  put(url, data) {
    return this.$.ajax({
      url,
      method: "PUT",
      data
    }).then(success => success, error => error)
  }

  delete(url) {
    return this.$.ajax({
      url,
      method: "DELETE"
    }).then(success => success, error => error)
  }
}

export default BaseApi
