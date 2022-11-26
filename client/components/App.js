// import hooks and react
import React, { useEffect, useState } from "react";

// import components here
import Login from "./Login.js";

function App() {
  // we will do our initial server calls here
  useEffect(() => {}, []);

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
