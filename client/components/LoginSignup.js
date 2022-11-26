// import hooks and react
import React, { useState } from "react";

// import components here
import LoginForm from "./Login.js";
import Registration from "./RegistrationForm.js";

function LoginSignup(props) {
  const [showLogin, setLoginVisual] = useState(true);


  // this will contain all the logic for our components

  //handle login click
  const swapLoginView = (e) => {
    setLoginVisual((showLogin) => !showLogin);
  };

  let display = 'dontShow';
  if (props.show) {
    display = '';
  }

  return (
    <div id="lrModal" className={display}>
      <div id='loginSignup'>
        <LoginForm show={showLogin} swapView={swapLoginView} closeSignup={props.hideSignup}/>
        <Registration show={!showLogin} swapView={swapLoginView} closeSignup={props.hideSignup} />
      </div>
    </div>
  );
}

export default LoginSignup;
