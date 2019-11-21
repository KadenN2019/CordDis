import React, {useState } from 'react'
import { useAuth } from '../hooks'

function Login(props){
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')

  // let { username, signIn, signOut } = useAuth()

  function handleSubmit(e){
      e.preventDefault()

      // signIn(username, password)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            Username:
          </div>
          <input 
            placeholder="Username" 
            className="username"
            type="text" 
            name="username"
            value={username} 
            onChange={e => setUsername(e.target.value)}>
          </input>
        </div>
        <div>
          <div>
            Password:
          </div>
          <input 
            placeholder="Password" 
            className="password"
            type="password" 
            name="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}>
          </input>
        </div>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login