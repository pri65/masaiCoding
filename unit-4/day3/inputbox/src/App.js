import React, {useState} from 'react'

function App() {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
     setText(e.target.value)
  }
  const handleClick =() => {
    setText('')
    setEmail('')
  }
  const handleEmail =(e) => {
   setEmail(e.target.value)
  }
  return (
    <div>
      <input value={text} type="text" name="name" placeholder="Enter the name"
      onChange={(e) => handleChange(e)}
      />
      <input value={email} type="email" placeholder='Enter the email' onChange={(e) => handleEmail(e)} />
    <button onClick={handleClick}>Clear</button> 
      <h2>{text}</h2>
      <p>{email}</p>
    </div>
  )
}

export default App;


