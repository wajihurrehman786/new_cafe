import "./App.css";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./components/Routes/Routes";
import { createUser } from "./api/user";

function App() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const createUserHandler = async () => {
    if (isAuthenticated) {
      const loginCount = parseInt(user["http://newcafe/claims/logins"]);
      if (loginCount <= 0) {
        const token = await getAccessTokenSilently();
        console.log("🚀 ~ file: App.js:13 ~ createUserHandler ~ token", token);
        const result = await createUser(user, token);
        console.log("🚀 ~ file: App.js:13 ~ init ~ result", result.data);
      } else {
        console.log(`user already Logged in our application`);
      }
    } else {
      console.log("🚀 User is not Authenticated");
    }
  };

  useEffect(() => {
    createUserHandler();
  }, [isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps
  const renderApp = () => {
    return <Routes />;
  };
  return <div className="App">{renderApp()}</div>;
}

export default App;
