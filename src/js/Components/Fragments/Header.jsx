import React from 'react'
import { Link } from "react-router-dom"
import headerLogo from '../../Assets/Images/Shopping_cart.png'
import observerWithDisplayName from "../../utils/observerWithDisplayName"
import UserDetailsStore from "../../features/login/state/UserDetailsStore"
import ProductsStore from "../../features/products/state/ProductsStores"
import LogoutForm from "../../features/login/views/LogoutForm"

const Header = observerWithDisplayName(() =>  {
  return(
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link to="/">
          <span className="navbar-brand header-logo">
            <img id="cartHeadImage" alt="Cart" src={headerLogo}/>
            <span className="LogoText"> {UserDetailsStore.authToBeChecked ? "" : (UserDetailsStore.isAuthenticated ? "Welcome to Shopping-Cart": "Shopping-Cart")} </span>
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-md-auto d-md-flex">
              <li>
                <form className="form-inline mt-2 mt-md-0" hidden={!UserDetailsStore.isAuthenticated}>
                <Link to="/cart">
                  <button className="btn btn-custom btn-lg" type="submit">
                  Cart &nbsp;
                    <span className="cart-value-span">
                      <strong hidden = {false}>
                      {ProductsStore.cartItemCount === 0 ? '' : ProductsStore.cartItemCount}
                      </strong>
                    </span>
                  </button>
                </Link>
                </form>
              </li>
              <li className="nav-item">
                <a className="nav-link" hidden={!UserDetailsStore.isAuthenticated}>
                  <LogoutForm />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}, "Header")

export default Header
