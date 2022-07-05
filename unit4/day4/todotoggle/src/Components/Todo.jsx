import React, {useState} from 'react'
import AddTodo from './AddTodo'

function Todo() {
    const [todos, setTodos] = useState([])
  return (
    <div>
<AddTodo />

    </div>
  )
}

export default Todo;