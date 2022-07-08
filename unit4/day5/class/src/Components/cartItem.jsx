import React from 'react'
import LabelPrice from './LabelPrice'
import Quantity from './Quantity'

function cartItem({
  label,
  price,
  qty,
  id,
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
        <Quantity id={id} qty={qty} changeCount={handleChangeQty} />
    </div>
  )
}

export default cartItem