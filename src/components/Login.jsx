import  {useState, useContext} from 'react'
import UserContext from '../context/UserContext.js'

function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const {setUser} = useContext(UserContext)


    const LoginHandler = (e) => {
          e.preventDefault()
          setUser({username})
    }
  return (
    <div>
        <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={LoginHandler}>Login</button>
    </div>
  )
}

export default Login