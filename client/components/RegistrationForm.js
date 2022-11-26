import React, { useEffect, useState } from "react";

//import files here
// import App from "./App,js";
import NavBar from "./NavBar";
import AppContainer from "./AppContainer.js";

const Registration = ({ showRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [registrationSuccess, setRegistrationSuccess] = useState(null);

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };
  const passwordConfirmation = (event) => {
    setConfirmPassword(event.target.value);
  };
  // const registered = (event) => {
  //   setRegistrationSuccess(event.target.value);
  // };
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
          console.log(result);
          // registered("Registration successfull");
          //redirect to the home page
          // redirectHome();
        } else {
          // showError("There was an error");
        }
      });
    }
  };

  return (
    <div className={`${showRegister ? "active" : ""} show`}>
      <form className="registrationForm" onSubmit={(e) => submitUser(e)}>
        <div className="registrationInputs">
          <label>Email Address:</label>
          <input
            type="text"
            placeholder="Enter Email"
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
      </form>
    </div>
  );
};

export default Registration;
