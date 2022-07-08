import React from 'react'

function TodoItem({
    id,
    title,
    status,
    handleToggle
}) {
  return (
    <div 
    style={{ 
    padding: '1rem', 
    border:"1px solid tomato", 
    borderRadius:"1rem",
    display:"flex",
    gap:"1rem"
    }}
    >
        <div>{title}</div>
        <div>{status ? "DONE" : "NOT DONE"}</div>
        <button onClick={() => handleToggle(id)}>
            TOGGLE
        </button>
    </div>
  )
}

export default TodoItem;