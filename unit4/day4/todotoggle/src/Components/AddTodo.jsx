import React, {useState} from 'react'


function AddTodo() {
    const [text, setText] = useState("")
  return (
    <div>
        <input 
        placeholder="Add Something" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
         />
         <button>ADD</button>
    </div>
  );
}

export default AddTodo;