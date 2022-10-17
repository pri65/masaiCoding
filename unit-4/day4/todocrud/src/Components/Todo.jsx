import { useState } from "react"
import React  from 'react'
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

function Todo() {
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])

  const handleText = (e) => {
    setText(e.target.value);
  }
  const addText = () => {
    setTodo([...todo,text])
    setText("")
  }
  const handleDel = () => {
    
  }
  return (
    <div>
        <input onChange={(e) => handleText(e)} type="text" placeholder="write something"  value={text} />
        <AddTodo addText={addText} />
        <TodoList todo={todo} delete={handleDel}/>
        
    </div>
  )
}

export default Todo;