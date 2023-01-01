import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom";

import App from "./App";

// const providerConfig ={
//   domain:"newcafe.us.auth0.com",clientId:"Gb9DXI7J6fr6rHAnzwWzJnDgsUtQtkwL",
//   redirectUri:{window.location.origin}
// }

ReactDOM.render(
  <Auth0Provider
    domain="newcafe.us.auth0.com"
    clientId="Gb9DXI7J6fr6rHAnzwWzJnDgsUtQtkwL"
    redirectUri={window.location.origin}
    audience="http://api-newcafe"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
