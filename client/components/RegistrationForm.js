import React, { useEffect, useState } from "react";

//import files here
import OAuthButton from './OAuthButton';

const RegistrationForm = ({ logInUser, swapView, togglePopUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState('');

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };
  const passwordConfirmation = (event) => {
    setConfirmPassword(event.target.value);
  };

  const submitUser = (event) => {
    event.preventDefault();
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        const data = {
          email,
          password,
        };
        fetch("/register", {
          method: "POST",
          headers: { "Content-Type": "Application/JSON" },
          body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then((result) => {
          console.log("email: ", result);
          if (result.username) {
            logInUser(result.username);
            togglePopUp();
          }
          else {
            setError('Username taken')
          }
        });
      }
      else {
        setError('Passwords do not match')
      }
    }
  };

  return (
    <div className={`loginSignup`}>
    <div className='closeSignup' onClick={togglePopUp}>X</div>
      <form className="registrationForm" onSubmit={(e) => submitUser(e)}>
        <div className="registrationInputs">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={email}
            onChange={(e) => updateEmail(e)}
          ></input>
          <br></br>
          <label>Password:</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => updatePassword(e)}
          ></input>
          <br></br>
          <label>Confirm Password:</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter Password"
            value={confirmPassword}
            onChange={(e) => passwordConfirmation(e)}
          ></input>
          <br></br>
        </div>
        <div className="submitRegistration">
          <input type="submit" value="Submit"></input>
        </div>
        <div className='error-message'>{error}</div>
      </form>

      <OAuthButton />

      <div className='switchView' onClick={swapView}>LOG IN</div>
    </div>
  );
};

export default RegistrationForm;
