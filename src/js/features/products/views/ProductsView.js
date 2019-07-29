import React from "react"

import Loader from '../../../Components/Fragments/Loader'
import ProductsStores from "../state/ProductsStores"
import ProductsAction from "../actions/ProductsActions"

import ProductsData from "../../../../main/resources/products.json"

class ProductsView extends React.Component{

  constructor(){
    super()
    ProductsAction.fetchProducts()
    if(ProductsStores.products.length == null || ProductsStores.products.length<1){
      ProductsStores.products = ProductsData.products
    }
  }

  ImportAllImages(r) {
    let images = {}
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item)})
    return images
  }


  render(){
  const images = this.ImportAllImages(require.context('../../../Assets/Images', false, /\.(png|jpe?g|svg)$/))

    return (
      <div className="container-fluid" id="bodyContent">
        <div className="row">
          <div className="col-lg-12">
            <Loader showOrHide={!ProductsStores.isLoading} />
              <div className="row text-center">
                {
                  ProductsStores.products.map(function(product){

                    return(
                      <div className="col-lg-4 productCard" key= {product.productId}>
                        <div className="card text-center">
                          <img className="card-img-top product-image" src={images[product.imageName]} alt={product.productName} />
                          <div className="card-body">
                            <h5 className="card-title">{product.productName}</h5>
                            <p className="card-text">₹ {product.productPrice}</p>
                            <button className="btn btn-custom"
                                  onClick = {() => ProductsAction.addProductToCart(product)}>
                              Add to Cart
                            </button>
                            &nbsp; &nbsp;
                            <button  className="btn btn-danger"
                                  onClick = {() => ProductsAction.removeProductFromCart(product)}>
                              Remove from Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductsView
