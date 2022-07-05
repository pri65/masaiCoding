import React from 'react'

function TodoList({
    data,
    handleToggle
}) {
  return (
    <div>
        {
            data.map(item=>
                <TodoItem 
                key={item.id}
                id={item.id}
                title={item.title} 
                status={item.status} 
                />
                )
        }
    </div>
  )
}

export default TodoList;