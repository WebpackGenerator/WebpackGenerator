import React, { useEffect, useState } from "react";

//import files
import Registration from "./RegistrationForm.js";
// import App from "./App,js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(null);

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
    fetch("/loginSubmission", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(data),
    }).then((result) => {
      if (result.status === 200) {
        console.log(result);
        setLoginMessage("Login Successful");
        //handle login
        // redirectLoggdIn();
      } else {
        setLoginMessage("Password or Username incorrect");
      }
    });
    //add error catcher
  };
  //function to redirect the user to the homepage once logged in
  // const redirectLoggdIn = () => {
  //   return <App />;
  // };
  //function to redirect user to the sign up page if no account
  // const redirectToRegistration = () => {
  //   return <Registration />;
  // };
  // };
  return (
    <form className="loginContainer" onSubmit={(e) => submitLogin(e)}>
      <div className="login">
        <label>Login:</label>
        <input
          type="text"
          placeholder="Login"
          value={username}
          onChange={(e) => updateUsername(e)}
        ></input>
      </div>
      <div className="password">
        <label>Password:</label>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => updatePassword(e)}
        ></input>
      </div>
      <div className="submitLogin">
        <input type="submit" value="Submit"></input>
      </div>
      <div
        className="loginMessage"
        style={{ display: loginMessage ? "block" : "none" }}
        role="alert"
      >
        {loginMessage}
      </div>
    </form>
  );
};

export default Login;
