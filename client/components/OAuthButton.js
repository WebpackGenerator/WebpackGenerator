import React from "react";

const OAuthButton = () => {

  return (
    <form action="/auth/google">
      <button type="submit" className="login-with-google-btn googleLoginButton" >
        Sign Up with Google
      </button>
    </form>
  );
};

export default OAuthButton;