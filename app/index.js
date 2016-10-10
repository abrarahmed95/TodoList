import React from 'react'
import ReactDOM from 'react-dom'
import {Provider } from 'react-redux'
import {createStore} from 'redux'
import style from './assets/style/main.scss'
import Store from './store/Store'
import App from './src/App'

const store = Store()

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app"));
