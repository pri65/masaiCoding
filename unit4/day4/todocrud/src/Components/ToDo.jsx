import { useState } from "react"
import React  from 'react'

function Todo() {
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])

  const handleText = (e) => {
    setText(e.target.value);
  }
  const addText = () => {
    setTodo([...todo,text])
  }
  return (
    <div>
        <input onChange={(e) => handleText(e)} type="text" placeholder="write something" value="" />
        <button onClick={addText} >Add</button>
        <h1>{todo}</h1>
    </div>
  )
}

export default Todo;