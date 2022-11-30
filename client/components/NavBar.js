import React, { useEffect, useState } from "react";

//import files
import LoginForm from "./LoginForm.js";
import RegistrationForm from "./RegistrationForm.js";
import AppContainer from "./AppContainer.js";
import LoginSignup from "./LoginSignup.js";

// passing loginClick and registerClick and destructuring it from props object
const NavBar = ({ loginClick, registerClick }) => {

  // this state tracks whether to show or hide the sign up/login pop up box.
  const [showPopUp, setShowPopUp] = useState(false);

  // Toggle showPopUp between true and false
  const togglePopUp = () => {
    setShowPopUp((showPopUp) => !showPopUp);
  }

  return (
    <div className="navBar">
      {showPopUp && <LoginSignup togglePopUp={togglePopUp} />}
      <div class='navBarBg'>
        <span>
          <button className="navBarLogin" onClick={togglePopUp}>
            <label>Sign In</label>
          </button>
          <span className="title">
            Webpack Generator
          </span>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
