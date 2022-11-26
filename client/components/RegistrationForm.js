import React, { useEffect, useState } from "react";

//import files here
// import App from "./App,js";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(null);

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };
  const passwordConfirmation = (event) => {
    setConfirmPassword(event.target.value);
  };
  const registered = (event) => {
    setRegistrationSuccess(event.target.value);
  };
  const submitUser = (event) => {
    event.preventDefault();
    if (email && password && confirmPassword && password === confirmPassword) {
      const data = {
        email,
        password,
      };
      fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "Application/JSON" },
        body: JSON.stringify(data),
      }).then((result) => {
        if (result.status === 200) {
          // registered("Registration successfull");
          //redirect to the home page
          // redirectHome();
        } else {
          // showError("There was an error");
        }
      });
    }
  };
  // const redirectHome = () => {
  //   //create & import home page
  //   return <App />;
  // };
  return (
    <div className="registrationForm" onSubmit={(e) => submitUser(e)}>
      <form>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => updateEmail(e)}
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => updatePassword(e)}
          ></input>
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={confirmPassword}
            onChange={(e) => passwordConfirmation(e)}
          ></input>
        </div>
        <div className="submitRegistration">
          <input type="submit" value="Submit">
            Register
          </input>
        </div>
        <div
          className="loginMessage"
          style={{ display: loginMessage ? "block" : "none" }}
          role="alert"
        >
          {registrationSuccess}
        </div>
      </form>
    </div>
  );
};

export default Registration;
