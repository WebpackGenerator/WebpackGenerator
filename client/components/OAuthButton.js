import React from "react";

const OAuthButton = (props) => {

  return (
    <form action="/auth/google">
      <button type="submit" class="login-with-google-btn googleLoginButton" >
        {props.content}
      </button>
    </form>
  );
};

export default OAuthButton;