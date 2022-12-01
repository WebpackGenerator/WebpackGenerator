// import hooks and react
import React, { useEffect, useState } from 'react';

// import components here
import WebpackCode from './WebpackCode.js';
import NodeCode from './NodeCode.js';
import NavBar from './NavBar.js';
import WebpackUserInput from './WebpackUserInput.js';
import Download from './Download.js';
import Templates from './Templates.js';

const AppContainer = () => {
  const [showLogin, setLoginVisual] = useState(true);
  const [showRegister, setRegisterVisual] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState('');
  const [displayTemplates, setDisplayTemplates] = useState(false);

  const logInUser = (username) => {
    setUserLoggedIn((userLoggedIn) => username);
  }

  const showTemplates = () => {
    setDisplayTemplates((displayTemplates) => !displayTemplates);
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

  // if displayTemplates is true 
  // render Templates and not main
  return (
    <div className="appContainer">
      <div className="navBar">
        <NavBar displayTemplates={displayTemplates} showTemplates={showTemplates} userLoggedIn={userLoggedIn} logInUser={logInUser} loginClick={loginClick} registerClick={registerClick} />
      </div>
      {displayTemplates ? 
       <Templates userLoggedIn={userLoggedIn} />
      : <main>
      <div className="questionContainer">
        <WebpackUserInput userLoggedIn={userLoggedIn}/>
      </div>
      <div className="codeContainer">  
        <WebpackCode />
        <NodeCode />
      </div>
    </main>}
    </div>
  );
}

export default AppContainer;
