import React from 'react'
import Button from './Button'

function Quantity({
  qty,
  decrementCount,
  incrementCount
}) {
  return (
    <div 
    style={{
        display:"flex",
        gap:"1rem"
    }}>
      <button onClick={decrementCount}>-</button>
      <div>
        <h4>{qty}</h4>
      </div>
      <button onClick={incrementCount}>+</button>
 </div>
  )
}

export default Quantity