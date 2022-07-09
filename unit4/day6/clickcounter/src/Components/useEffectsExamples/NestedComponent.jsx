import React from 'react'

function Child(){
    return (
        <h1>Child</h1>
    )
}

function NestedComponent() {
  return (
    <div>
        <h1>Parent</h1>
        <Child />
    </div>
  )
}

export default NestedComponent