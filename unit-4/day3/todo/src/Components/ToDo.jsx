import React, {useState} from 'react'

function ToDo() {
    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])
    const handleClick = () => {
       setTodo([...todo,text])
    }
  const Change = (e) => {
    setText(e.target.value);
  }
  return (
    <div>
        <input onChange={(e) => {Change(e)}} type="text" placeholder='type'  />
        <button onClick={handleClick}>Add</button>
        <ul>
          <li>
          {todo}
          </li>
        </ul>
    </div>
  )
}

export default ToDo