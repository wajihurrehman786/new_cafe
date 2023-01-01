import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
import SignIn from "../Auth/SignIn/SignIn";
import SignUp from "../Auth/SignUp/SignUp";
import SignOut from "../Auth/SignOut/SignOut";
import Profile from "../Auth/Profile/Profile";

const Routes = () => {
  const deployRoutes = () => {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signout" exact component={SignOut} />
          <Route path="/me" exact component={Profile} />
        </Switch>
      </Router>
    );
  };

  return <>{deployRoutes()}</>;
};

export default Routes;
