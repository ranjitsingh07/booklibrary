import React from 'react'
import { Link } from "react-router-dom"
import Loader from '../../../Components/Fragments/Loader'
import ProductsStores from "../state/ProductsStores"
import ProductsAction from "../actions/ProductsActions"

class Cart extends React.Component {

  constructor(props){
    super(props)
    ProductsStores.isLoading = true
    if(ProductsStores.products.length == null || ProductsStores.products.length <1){
      const { history } = this.props
      history.push('/')
      window.location.reload()
    }
  }

  ImportAllImages(r) {
    let images = {}
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item)})
    return images
  }

  render(){
    const images = this.ImportAllImages(require.context('../../../Assets/Images', false, /\.(png|jpe?g|svg)$/))
    return(
      <div className="container-fluid" id="bodyContent">
        <div className="row">
          <div className="col-lg-12">
            <Loader showOrHide={!ProductsStores.isLoading} />
                <div className="card">
                  <h5 className="card-header">Check Out
                    <Link to="/">
                      <button className="btn btn-custom float-right">Continue Shopping</button>
                    </Link>
                  </h5>
                    <ul className="list-group list-group-flush">
                    {
                      ProductsStores.products.map(function(product){
                        if(product.addedToCart){
                          return(
                              <li className="list-group-item" key={product.productKey}>
                                  <div className="card-text">
                                    <h5 className="card-title">
                                      {product.productName}
                                      <img className="cart-img float-right" src={images[product.imageName]} alt={product.productName} />
                                    </h5>
                                    <p className="card-text"><strong>Quantity : {product.quantity}</strong></p>
                                    <p className="card-text float-right"><strong>Price : ₹{product.quantity*product.productPrice}</strong></p>
                                  </div>
                              </li>
                          )
                        }
                        return(
                            <div></div>
                        )
                      })
                    }
                    </ul>
                </div>
                <br/>
          </div>
            <div className="col-lg-8">
              <button className="btn btn-custom float-right"
                          onClick={ProductsAction.placeOrder}
                          disabled={ProductsStores.cartTotalAmount === 0 ? true : false}>Place Order</button>
            </div>
            <div className="col-lg-4">
              <strong className="float-right">Total Amount : ₹{ProductsStores.cartTotalAmount}</strong>
            </div>
        </div>
      </div>
    )
  }
}

export default Cart
