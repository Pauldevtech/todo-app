import React, { useEffect } from 'react'

const Todo = ({ todos, setTodos }) => {

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setTodos(data))

  })

  const deleteTodo = async (id) => {
      try {
        await fetch(`/api/${id}`, {
          method: 'DELETE'
        })

      } catch (err) {
        console.error(err)
        
      }
  }

  return (
    <div className='todo-list'>
      {todos.length > 0 ?
      todos.map((todo, id) => (
        <h1 className='todo' key={id}><button className='deleteButton' onClick={() => deleteTodo(todo.id)}>X</button>{todo.activity}</h1>
      ))

      : <h1>No todos to show</h1>}
    </div>
  )
}

export default Todo