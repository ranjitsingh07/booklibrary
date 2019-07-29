import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter} from 'react-router-dom'
import $ from 'jquery'
import App from './js/features/App'
import registerServiceWorker from './js/registerServiceWorker'

document.addEventListener('DOMContentLoaded', init)

function init() {
  $.ajaxSetup({
    cache: false,
    contentType: 'application/json'
  })

  ReactDOM.render((
                    <BrowserRouter>
                      <Route component={App} />
                    </BrowserRouter>
                  ), document.getElementById('root'))
  registerServiceWorker()

  window.React = React // export for http://fb.me/react-devtools
}