import React from 'react'
import Dashboard from './Dashboard';

function LoginForm(props) {
  console.log(props.isAuth)
  return (
    <div>
      {props.isAuth ? <Dashboard /> : 
      <div>
      <input type="text" placeholder='Name' value=""></input>
      <input type="text" placeholder='Email' value=""></input>
      <button type='submit'>Submit</button>
      </div>
  }
      </div>
  )
}

export default LoginForm