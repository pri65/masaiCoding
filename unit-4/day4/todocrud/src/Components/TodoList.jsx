import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todo}) {
  return (
    <div>
        {todo?.map((data,index) => (
            <div>
               <TodoItem data={data} index={index}/>
                </div>
        ))}
    </div>
  )
}

export default TodoList