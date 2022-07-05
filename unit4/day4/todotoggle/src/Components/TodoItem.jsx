import React from 'react'

function TodoItem({
    id,
    title,
    status,
    handletoggle
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
        <div>
            {title}
        </div>
        <div>
            {status?"DONE":"NOT DONE"}
        </div>
        <button>
            TOGGLE
        </button>
    </div>
  )
}

export default TodoItem