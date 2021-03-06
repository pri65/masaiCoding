import React, {useState} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList';

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
    const handleToggle = (id) => {
const updatedData = todos.map((item) =>
     item.id ===id
     ? {
        ...item,
        status: !item.status
     }
     : item
);
setTodos(updatedData);
    };
    console.log(todos);
   return (
    <div>
        <AddTodo handleAdd={handleAdd } />
        <div>
            <TodoList data={todos.filter(item=>item.status)} 
            handleToggle={handleToggle}
             />
        </div>
    </div>
  )
}

export default Todo;