import React from 'react'

const TodosTree = ({todos, onDelete}) => {
  return (
    <div>
      {todos.map((todo, id)=> {
        return (
          <div key={id}>
            <h1 key={id}>{id + 1}. {todo.text}</h1>
            <h2>Added {todo.time}</h2>
            <button onClick={()=> {
              onDelete(todo)
            }}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default TodosTree
