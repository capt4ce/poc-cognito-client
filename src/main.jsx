import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      loginWith: {
        oauth: {
          providers: ["Google"],
          domain: import.meta.env.VITE_APP_OAUTH_DOMAIN,
          scopes: ["email"],
          redirectSignIn: ["http://localhost:5173/"],
          redirectSignOut: ["http://localhost:5173/"],
          responseType: "code",
        },
        email: true,
        username: false,
        phone: false,
      },
      userPoolClientId: import.meta.env.VITE_APP_USER_POOL_CLIENT_ID,
      userPoolId: import.meta.env.VITE_APP_USER_POOL_ID,
      authenticationFlowType: "USER_PASSWORD_AUTH",
      allowGuestAccess: true, // Enable unauthenticated access
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
