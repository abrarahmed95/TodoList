import React from 'react'

const Form = ({onSend, onChange, todo}) => {
  return (
    <div>
    <form onSubmit={onSend} method="post" action="/">
      <input onChange={onChange} type="text"  name={todo.text} />
      <button type="submit">Add</button>
    </form>
    </div>
  )
}

export default Form
