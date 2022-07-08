import React from 'react'

function Button({
onClick,
children,
disabled
}) {
  return (
    <button style={{
      padding:"1rem",
    }} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button