import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Catalog from "../Catalog/Catalog";
const Routes = () => {
  const deployRoutes = () => {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/catalog" exact component={Catalog} />
        </Switch>
      </Router>
    );
  };

  return <>{deployRoutes()}</>;
};

export default Routes;
