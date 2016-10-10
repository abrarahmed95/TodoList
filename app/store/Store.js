import {createStore, applyMiddleware } from 'redux'
import Reducer from '../reducer/reducers'
import thunk from 'redux-thunk'
const Store = (initalState ) =>  {
  return createStore(
    Reducer,
    initalState,
    applyMiddleware(thunk)
  )
}


export default Store
