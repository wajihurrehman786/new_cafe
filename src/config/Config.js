const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const TIMEOUT = process.env.REACT_APP_API_TIMEOUT;
// const AUDIENCE = process.env.REACT_APP_API_AUDIENCE;
// const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
// const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;

if (!API_BASE_URL) {
  throw new Error(
    ".env is missing required definition for REACT_APP_API_BASE_URL enviornment variable."
  );
}

if (!TIMEOUT) {
  throw new Error(
    ".env is missing required definition for REACT_APP_API_TIMEOUT"
  );
}

// if (!DOMAIN) {
//   throw new Error(
//     ".env is missing required definition for REACT_APP_AUTH0_DOMAIN"
//   );
// }

// if (!CLIENT_ID) {
//   throw new Error(
//     ".env is missing required definition for REACT_APP_AUTH0_CLIENT_ID"
//   );
// }
// if (!AUDIENCE) {
//   throw new Error(
//     ".env is missing required definition for REACT_APP_AUTH0_AUDIENCE"
//   );
// }

export { API_BASE_URL, TIMEOUT };
