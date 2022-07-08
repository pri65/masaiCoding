import React from 'react'
import Button from './Button'

function Quantity() {
  return (
    <div 
    style={{
        display:"flex",
        gap:"1rem"
    }}>
      <button>-</button>
      <button>+</button>
 </div>
  )
}

export default Quantity