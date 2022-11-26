// import hooks and react
import React, { useEffect, useState } from "react";

// import components here
import AppContainer from "./AppContainer.js";
import RegistrationForm from "./RegistrationForm";

function App() {
  // we will do our initial server calls here
  useEffect(() => {}, []);

  return (
    <div className="app">
      <AppContainer />
      <RegistrationForm />

    </div>
  );
}

export default App;
