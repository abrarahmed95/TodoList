const TodoReducer = (state=[], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, Object.assign({}, action.todo)]
      break;
    case "DELETE_TODO":
      return [
        ...state.slice(0,state.findIndex(x => x.id === action.todo.id)),
        ...state.slice(state.findIndex(x => x.id === action.todo.id) + 1)
      ]
      break;
    case "LOAD_TODOS":
      return  action.todos
      break;
    default:
      return state
  }
}

module.exports = TodoReducer;
