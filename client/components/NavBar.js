import React, { useEffect, useState } from "react";

//import files
import LoginForm from "./LoginForm.js";
import RegistrationForm from "./RegistrationForm.js";
import AppContainer from "./AppContainer.js";
import LoginSignup from "./LoginSignup.js";

// passing loginClick and registerClick and destructuring it from props object
const NavBar = ({displayTemplates, showTemplates, userLoggedIn, logInUser, loginClick, registerClick }) => {

  // this state tracks whether to show or hide the sign up/login pop up box.
  const [showPopUp, setShowPopUp] = useState(false);

  // Toggle showPopUp between true and false
  const togglePopUp = () => {
    setShowPopUp((showPopUp) => !showPopUp);
  }

  return (
    <div className="navBar">
      {showPopUp && <LoginSignup logInUser={logInUser} togglePopUp={togglePopUp} />}
     
      <div className='navBarBg'>
        <div className="nav-left">
        {userLoggedIn.length > 0 ? <div className="username">Welcome {userLoggedIn}</div> : <button className="navBarLogin" onClick={togglePopUp}>
            <label>Sign In</label>
          </button> }
        </div>
          
        <div className="nav-middle">
          <div className="title">
            Webpack Generator
          </div>
        </div>

          <div className="nav-right">
          {userLoggedIn.length > 0 &&
              <button className="navBarLogin" onClick={() => showTemplates()}>
              <label>{displayTemplates ? "Home" : "Templates"}</label>
              </button>
          }
          </div>
          
          
        
      </div>
    </div>
  );
};

export default NavBar;
