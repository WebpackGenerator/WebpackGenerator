// import hooks and react
import React, { useState } from "react";

// import components here
import LoginForm from "./LoginForm.js";
import RegistrationForm from "./RegistrationForm.js";

const LoginSignup = ({ togglePopUp }) => {
  const [showLogin, setShowLogin] = useState(true);


  // this will contain all the logic for our components

  //handle login click
  const swapLoginView = (e) => {
    setShowLogin((showLogin) => !showLogin);
  };
  
  // if showLogin 
  return (
    <div id="lrModal">
      <div id='loginSignup'>
        {showLogin ? <LoginForm showLogin={!showLogin} swapView={swapLoginView} closeSignup={togglePopUp}/> : <RegistrationForm showLogin={showLogin} swapView={swapLoginView} closeSignup={togglePopUp} />}
      </div>
    </div>
  );
}

export default LoginSignup;
