import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext'


function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

  const authContext = useAuth()

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (username === "username" && password === "password") {
      authContext.setAuthenticated(true)
      console.log("Success");
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`/welcome/${username}`);
    } else {
      authContext.setAuthenticated(false)
      console.log("Failed");
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="Login">
      {showSuccessMessage && (
        <div className="successMessage">Authenticated Successfully</div>
      )}
      {showErrorMessage && (
        <div className="errorMessage">Authentication Failed</div>
      )}
      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="userName"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent