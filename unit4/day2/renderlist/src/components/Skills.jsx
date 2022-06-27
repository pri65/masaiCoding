import React from 'react'

function Skills({items}) {
   
  return (
    <div>
        <ul>
        { items?.map((data,index) => (
         <li key={index}>{data}</li>
        )) }
        </ul>
    </div>
  )
}

export default Skills;