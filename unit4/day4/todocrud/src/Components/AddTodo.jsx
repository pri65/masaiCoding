import React from 'react'

function AddTodo({addText}) {

  return (
    <div>
        <button onClick={addText} >Add</button>
    </div>
  )
}

export default AddTodo