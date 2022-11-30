// import hooks and react
import React, { useEffect, useState } from 'react';

// import components here
import WebpackCode from './WebpackCode.js';
import NodeCode from './NodeCode.js';
import NavBar from './NavBar.js';
import FormInput from './WebpackUserInput.js';
import Download from './Download.js';

const AppContainer = () => {
  const [showLogin, setLoginVisual] = useState(true);
  const [showRegister, setRegisterVisual] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState('');

  const logInUser = (username) => {
    alert('logged in')
    setUserLoggedIn((userLoggedIn) => username);
  }

  // handle login click
  const loginClick = (e) => {
    setLoginVisual((showLogin) => !showLogin);
    setRegisterVisual((showRegister) => !showRegister);
  };

  // handle register click
  const registerClick = (e) => {
    setRegisterVisual((showRegister) => !showRegister);
    setLoginVistual((showLogin) => !showLogin);
  };

  return (
    <div className="appContainer">
      <div className="navBar">
        <NavBar logInUser={logInUser} loginClick={loginClick} registerClick={registerClick} />
      </div>
      <main>
        <div className="questionContainer">
          <FormInput />
        </div>
        <div className="codeContainer">  
          <WebpackCode />
          <NodeCode />
        </div>
      </main>
    </div>
  );
}

export default AppContainer;
