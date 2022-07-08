import React from 'react'
import LabelPrice from './LabelPrice'
import Quantity from './Quantity'

function cartItem({
  label,
  price,
  qty,
  handleChangeQty
}) {
  return (
    <div 
    style={{
      display:"flex",
      gap:"1rem",
      padding:"2rem",
      justifyContent:"center",
      alignItems:"center"
    }}>
        <LabelPrice label={label} price={price} />
        <Quantity qty={qty} />
    </div>
  )
}

export default cartItem