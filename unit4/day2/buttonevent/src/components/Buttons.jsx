import React from 'react'



function Buttons({name}) {
    const clk=() => (
        alert("You clicked Masai!")
    )
  return (
    <div>
        <button onClick={clk}>{name}</button>
    </div>
  )
}

export default Buttons