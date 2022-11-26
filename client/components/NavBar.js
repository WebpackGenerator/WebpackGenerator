import React, { useEffect, useState } from "react";

//import files
import LoginForm from "./Login.js";
import Registration from "./RegistrationForm.js";
import AppContainer from "./AppContainer.js";

const NavBar = ({ loginClick, registerClick }) => {
  const handleLogin = (e) => {
    loginClick(e);
    //trigger login page
  };
  const handleRegister = (e) => {
    registerClick(e);
    //trigger register page
  };
  return (
    <div className="navBar">
      <div>
        <span>
          <button className="navBarLogin" onClick={(e) => handleLogin(e)}>
            <label>Sign In</label>
          </button>
          <button className="navBarRegister" onClick={(e) => handleRegister(e)}>
            <label>Register</label>
          </button>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
