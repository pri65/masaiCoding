import React from 'react'
import LabelPrice from './LabelPrice'
import Quantity from './Quantity'

function cartItem() {
  return (
    <div 
    style={{
      display:"flex",
      gap:"1rem",
      padding:"2rem",
      justifyContent:"center",
      alignItems:"center"
    }}>
        <LabelPrice label="label" price="100" />
        <Quantity qty="1" />
    </div>
  )
}

export default cartItem