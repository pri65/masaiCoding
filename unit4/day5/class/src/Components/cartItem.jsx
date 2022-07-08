import React from 'react'
import LabelPrice from './LabelPrice'
import Quantity from './Quantity'

function cartItem({
  label,
  price,
  qty,
  id,
  handleChangeQty
//  incrementCount,
//  decrementCount
}) {
  return (
    <div 
    style={{
      display:"flex",
      gap:"1rem",
      padding:"2rem",
      justifyContent:"center",
      alignItems:"center",
      border:"1px solid tomato",
      margin:"0.5rem"
    }}>
        <LabelPrice label={label} price={price} />
        <Quantity  qty={qty} 
        incrementCount={()=>incrementCount(id,1)}
        decrementCount={()=>decrementCount(id,-1)} />
    </div>
  )
}

export default cartItem