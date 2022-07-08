import React from 'react'
import LabelPrice from './LabelPrice'
import Quantity from './Quantity'

function cartItem() {
  return (
    <div 
    style={{
      display:"flex",
      gap:"1rem"
    }}>
        <LabelPrice label="label" price="100" />
        <Quantity qty="1" />
    </div>
  )
}

export default cartItem