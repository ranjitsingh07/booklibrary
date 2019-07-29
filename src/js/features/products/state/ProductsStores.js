import {observable, action} from "mobx"
import ProductsApi from "../api/ProductsApi"
import UserDetailsStore from "../../login/state/UserDetailsStore"

class ProductsStores {
  @observable products
  @observable productPresent
  @observable isLoading
  @observable productsListFetched
  @observable cartTotalAmount
  @observable cartItemCount

  constructor() {
    this.products = {}
    this.singleDocInfo = {}
    this.productPresent = true
    this.productsListFetched = false
    this.isLoading = true
    this.cartTotalAmount = 0
    this.cartItemCount = 0
  }

  fetchProducts() {
    this.isLoading = true
    this.productsListFetched = false
    ProductsApi.fetchProducts()
      .then(this._onSuccess, this._onError)
  }

  addProductToCart(product) {
    this.cartTransaction(product, 'add')
  }

  removeProductFromCart(product) {
    this.cartTransaction(product, 'remove')
  }

  @action.bound
  cartTransaction(product, action) {
    let count = 0
    let cartAmount = 0
    for(let i=0;i<this.products.length;i++){
      if(product.productId === this.products[i].productId){
        if(action === 'add') {
          this.products[i].addedToCart = true
          this.products[i].quantity++
        }
        if(action === 'remove') {
          if(!this.products[i].addedToCart) {
            alert(this.products[i].productName+" is not in cart!!")
          }
          if(this.products[i].quantity > 1) {
            this.products[i].quantity--
          } else if(this.products[i].quantity === 1) {
            this.products[i].quantity--
            this.products[i].addedToCart = false
          }
        }
      }
      if(this.products[i].addedToCart) {
        count++
        cartAmount = cartAmount + (this.products[i].quantity * this.products[i].productPrice)
      }
    }
    this.cartItemCount = count
    this.cartTotalAmount = cartAmount
  }

  @action.bound
  _onSuccess(response) {
    this.productsListFetched = true
    this.isLoading = false
  }

  @action.bound
  _onError(error) {
    if (error.status === 401) {
      UserDetailsStore._reset()
      this.productPresent = true
    } else {
      this.productPresent = false
    }
    this.products = {}
    this.productsListFetched = true
    this.isLoading = false
  }
}

export default new ProductsStores()
