import React from 'react'
import Button from './Button'

function Quantity({
  qty,
  decrementCount
}) {
  return (
    <div 
    style={{
        display:"flex",
        gap:"1rem"
    }}>
      <button>-</button>
      <div>
        <h4>{}</h4>
      </div>
      <button>+</button>
 </div>
  )
}

export default Quantity