import React from 'react'
import Todo from './ToDo';

function TodoItem({data,index}) {
  return (
    <div>
                <h1>{data}</h1> 
                <h2>{index+1}</h2>
                
    </div>
  )
}

export default TodoItem;