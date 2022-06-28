import React from 'react'

function CostItem = () => {
  return (
    <div style={{
        display:'flex',
        gap:'1rem',
        border:'1px solid red',
        justifyContent:'space-between'  
    }}>
    <p>Total</p>
    <p>$Cost</p>
    </div>
  )
}

export default CostItem;