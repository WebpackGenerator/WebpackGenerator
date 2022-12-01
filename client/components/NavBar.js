import React, { useEffect, useState } from "react";

//import files
import LoginForm from "./LoginForm.js";
import RegistrationForm from "./RegistrationForm.js";
import AppContainer from "./AppContainer.js";
import LoginSignup from "./LoginSignup.js";

// passing loginClick and registerClick and destructuring it from props object
const NavBar = ({ userLoggedIn, logInUser, loginClick, registerClick }) => {

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
        
          {userLoggedIn.length > 0 ? <div>Welcome {userLoggedIn}</div> : <button className="navBarLogin" onClick={togglePopUp}>
            <label>Sign In</label>
          </button> 
          }
          
          <div className="title">
            Webpack Generator
          </div>
          {userLoggedIn.length > 0 ?
              <button className="navBarLogin" onClick={() => console.log("templates")}>
              <label>Templates</label>
              </button> : <div></div>
          }
          
          
        
      </div>
    </div>
  );
};

export default NavBar;
