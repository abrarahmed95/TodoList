import {combineReducers} from 'redux'
import TodoReducer from './TodoReducer'

const Reducer = combineReducers({
  todos: TodoReducer
})


export default Reducer
