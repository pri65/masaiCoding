import React, {useState} from 'react'


function AddTodo() {
    const [text, setText] = useState("")
  return (
    <div>
        <input 
        placeholder="Add Something" 
        value={text} 
        onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default AddTodo;