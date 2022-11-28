import React, { useEffect, useState } from "react";

//import files
import LoginForm from "./Login.js";
import Registration from "./RegistrationForm.js";
import AppContainer from "./AppContainer.js";
import LoginSignup from "./LoginSignup.js";

const NavBar = ({ loginClick, registerClick }) => {

  const [showLoginModal, setShowLoginModal] = useState(false);

  const showSignup = () => {
    setShowLoginModal(true);
  }
  const hideSignup = () => {
    setShowLoginModal(false);
  }
  // const handleLogin = (e) => {
  //   loginClick(e);
  //   //trigger login page
  // };
  // const handleRegister = (e) => {
  //   registerClick(e);
  //   //trigger register page
  // };

  return (
    <div className="navBar">
      <LoginSignup show={showLoginModal} hideSignup={hideSignup} />
      <div class='navBarBg'>
        <span>
          <button className="navBarLogin" onClick={showSignup}>
            <label>Sign In</label>
          </button>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
