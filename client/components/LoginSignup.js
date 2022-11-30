// import hooks and react
import React, { useState } from "react";

// import components here
import LoginForm from "./LoginForm.js";
import RegistrationForm from "./RegistrationForm.js";

const LoginSignup = ({ logInUser, togglePopUp }) => {
  const [showLogin, setShowLogin] = useState(true);

  // swap the views of the sign up and login pages in the popup.
  const swapLoginView = (e) => {
    setShowLogin((showLogin) => !showLogin);
  };
  
  return (
    <div id="lrModal">
      <div id='loginSignup'>
        {/* Render either the login form or the sign up form inside of the pop-up. */}
        {showLogin ? <LoginForm logInUser={logInUser} swapView={swapLoginView} closeSignup={togglePopUp}/> : <RegistrationForm logInUser={logInUser} swapView={swapLoginView} closeSignup={togglePopUp} />}
      </div>
    </div>
  );
}

export default LoginSignup;
