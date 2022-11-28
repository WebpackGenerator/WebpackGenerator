import React, { useEffect, useState } from 'react';

//import files
import RegistrationForm from './RegistrationForm.js';
import NavBar from './NavBar.js';
import AppContainer from './AppContainer.js';

// import App from "./App,js";

const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateUsername = (event) => {
    setUsername(event.target.value);
  };
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };
  const submitLogin = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
    };
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(data),
    }).then((result) => {
      if (result.status === 200) {
        console.log(result);
      }
    });
  };
  return (
    <div className={`loginSignup ${props.show ? 'active' : ''} show`}>
      <div class="closeSignup" onClick={props.closeSignup}>
        X
      </div>
      <form className="loginContainer" onSubmit={(e) => submitLogin(e)}>
        <div className="loginAndPassword">
          <label>Login:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => updateUsername(e)}
          ></input>
          <br></br>
          <label>Password:</label>
          <br></br>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => updatePassword(e)}
          ></input>
          <br></br>
        </div>
        <div className="submitLogin">
          <input type="submit" value="Submit"></input>
        </div>
      </form>
      <div class="switchView" onClick={props.swapView}>
        SIGN UP
      </div>
    </div>
  );
};

export default LoginForm;
