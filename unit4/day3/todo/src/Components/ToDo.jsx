import React, {useState} from 'react'

function ToDo() {
    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])
    const handleClick = (e) => {
        useState(e.target.value)
    }
  return (
    <div>
        <input type="text" placeholder='type'  />
        <button onClick={handleClick(e)}>Add</button>
    </div>
  )
}

export default ToDo