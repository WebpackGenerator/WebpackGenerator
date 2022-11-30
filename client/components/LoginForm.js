import React, { useEffect, useState } from 'react';

//import files
import OAuthButton from './OAuthButton';



const LoginForm = ({ logInUser, swapView, closeSignup }) => {
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
      email: username,
      password,
    };
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then((result) => {
      console.log('email form login:', result);
      if (result.username) {
        logInUser(result.username);
      }
      
    });
  };
  return (
    <div className={`loginSignup`}>
    <div className='closeSignup' onClick={closeSignup}>X</div>
      <form className="loginContainer" onSubmit={(e) => submitLogin(e)}>
        <div className="loginAndPassword">
          <label>Username:</label>      
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => updateUsername(e)}
          ></input>
          <br/>
          <label>Password:</label>
          <br/>
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

      <OAuthButton content="Login with Google" />
      
      <div className='switchView' onClick={swapView}>SIGN UP</div>
    </div>
  );
};

export default LoginForm;
