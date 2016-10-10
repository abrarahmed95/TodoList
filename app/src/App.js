import React, { PropTypes, Component, Context } from 'react'
import { bindActionCreators } from 'redux'
import $ from 'jquery'
import toastr from 'toastr'
import { connect } from 'react-redux'
import * as TodoAction from '../action/TodoActions'
import TodosTree from './TodosTree'
import Form from './Form'
import {Toastr} from './Toastr'
import _ from 'lodash'
import moment from 'moment'
toastr.options = Toastr

class App extends Component {
  constructor(props,context)    {
    super(props,context)
    this.state = {
      todo: Object.assign({}, props.todos)
    }
    this.onSend = this.onSend.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }
  onChange(e) {
    e.preventDefault()
    let todo = {
      id: this.props.todos.length + 1,
      text: e.target.value,
      time: moment().calendar()
    }
    this.setState({todo: todo})
  }
  onSend(e) {
    e.preventDefault()
    this.props.addTodo(this.state.todo)
    toastr.success(`<h3>${this.state.todo.text}</h3>`, `<h2>Added Todo</h2>`)
  }
  onDelete(todo) {
    this.props.onDelete(todo)
    toastr.error(`<h3>${todo.text}</h3>`, `<h2>Remove Todo</h2>`)
  }
  render() {
    return(
      <div>
        <h1>TodoList</h1>
        <Form
          onSend={this.onSend}
          onChange={this.onChange}
          todo = {this.state.todo}
        />

        <TodosTree
          todos={this.props.todos}
          onDelete= {this.onDelete}
        />
      </div>
    )
  }
}


App.PropTypes = {
  messages: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateTopProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: todo => dispatch(TodoAction.AddTodo(todo)),
    onDelete: todo=> dispatch(TodoAction.DeleteTodo(todo))
  }
}
export default connect(mapStateTopProps,mapDispatchToProps)(App)
