export const LoadTodos = (todos) => {
  return {
    type: "LOAD_TODOS",
    todos
  }
}

export const  AddTodo = (todo) => {
  return {
    type: "ADD_TODO",
    todo
  }
}

export const DeleteTodo = (todo) => {
  return {
    type: "DELETE_TODO",
    todo
  }
}
