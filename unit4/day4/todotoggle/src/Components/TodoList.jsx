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
                //key is for react,it does not get passed down as a prop
                key={item.id}
                id={item.id}
                title={item.title} 
                status={item.status}
                handleToggle={handleToggle} 
                />
                )
        }
    </div>
  )
}

export default TodoList;