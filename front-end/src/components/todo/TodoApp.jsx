import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <LoginComponent /> }></Route>
          <Route path='/login' element={ <LoginComponent /> }></Route>
          <Route path='/welcome/:username' element={<WelcomeComponent /> }></Route>
          <Route path='*' element={<ErrorComponent /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function LoginComponent() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  function handleSubmit() {
    if(username==='username' && password==='password'){
        console.log('Success')
        setShowSuccessMessage(true)
        setShowErrorMessage(false)
        navigate(`/welcome/${username}`)
    } else {
        console.log('Failed')
        setShowSuccessMessage(false)
        setShowErrorMessage(true)
    }
  }

  return (
    <div className="Login">
      {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
      {showErrorMessage && <div className="errorMessage">Authentication Failed</div>}
      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input type="text" name="userName" value={username} onChange={handleUsernameChange}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>login</button>
        </div>
      </div>
    </div>
  )
}

function WelcomeComponent() {
  const {username} = useParams()

  return (
      <div className="WelcomeComponent">
          <h1>Welcome {username}</h1>
      </div>
  )
}

function ErrorComponent() {
  return (
      <div className="ErrorComponent">
          <h1>We are working really hard!</h1>
          <div>
              Apologies for the 404.
          </div>
      </div>
  )
}