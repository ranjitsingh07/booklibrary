import {action} from "mobx"

import ProductsStore from "../state/ProductsStores"

class ReportsActions {
  @action
  fetchProducts() {
    ProductsStore.fetchProducts()
  }

  @action
  addProductToCart(product) {
    ProductsStore.isLoading = true
    ProductsStore.addProductToCart(product)
  }

  @action
  removeProductFromCart(product) {
    ProductsStore.isLoading = true
    ProductsStore.removeProductFromCart(product)
  }

  @action
  placeOrder(){
    alert("Great! Your order has been placed, we will contact you soon for further details.")
    window.location.reload()
  }
}

export default new ReportsActions()
