import React from "react"
import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../Assets/CSS/style.css'

import Header from '../Components/Fragments/Header'
import Footer from '../Components/Fragments/Footer'
import Loader from '../Components/Fragments/Loader'
import ProductsView from '../features/products/views/ProductsView'
import Cart from '../features/products/views/Cart'
import LoginForm from '../features/login/views/LoginForm'
import UserDetailsStore from "../features/login/state/UserDetailsStore"
import observerWithDisplayName from "../utils/observerWithDisplayName"
import LoginActions from '../features/login/actions/LoginActions'


const App =  observerWithDisplayName(() => {
  LoginActions.checkUserAuthenticationStatus()
  return (
  <div>
    <Header/>
      <Switch>
        <Route exact path="/" component={UserDetailsStore.authToBeChecked ?
          (LoadingPage):
          (UserDetailsStore.isAuthenticated ? ProductsView : LoginForm)
        } />
        <Route exact path="/cart" component={UserDetailsStore.authToBeChecked ?
          (LoadingPage):
          (UserDetailsStore.isAuthenticated ? Cart : LoginForm)
        } />
        <Route component={UserDetailsStore.authToBeChecked ?
          (LoadingPage):
          (UserDetailsStore.isAuthenticated ? LoadingPage : LoginForm)
        } />
      </Switch>
    <Footer/>
  </div>
  )
}, "App")


const LoadingPage = observerWithDisplayName(() => {
  return (
    <div id="bodyContent">
      <Loader showOrHide={UserDetailsStore.isLoading}/>
    </div>
  )
}, "LoadingPage")


export default App
