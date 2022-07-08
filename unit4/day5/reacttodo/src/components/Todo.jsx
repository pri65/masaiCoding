import React, {useState,useEffect} from 'react'

function Todo() {
    const [data, setData] = useState([]);
    const getTodos = async () => {
      try{
        let data = await fetch("https://jsonplaceholder.typicode.com/todos")
        data=await data.json();
        console.log(data)
      }
      catch(err) {

      }
    }
    
  return (
    <div>
        <h1>Todos</h1>
        <button onClick={getTodos}>Fetch</button>
        <div>
          {
            data.map(todo=>
              <div key={todo.id}>
                {todo.title}
                </div>
                )
          }
        </div>
    </div>
  )
}

export default Todo