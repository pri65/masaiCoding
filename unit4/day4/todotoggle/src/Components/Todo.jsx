import React, {useState} from 'react'
import AddTodo from './AddTodo'

function Todo() {
    const [todos, setTodos] = useState([])
  const handleAdd = (text) => {
    setTodos([
            ...todos,
            {
                id : todos.length + Date.now(),
                title : text,
                status : false
            }
        ]);
    };
   return (
    <div>
<AddTodo handleAdd={handleAdd } />

    </div>
  )
}

export default Todo;