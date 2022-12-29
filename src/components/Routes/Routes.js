import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
const Routes = () => {
  const deployRoutes = () => {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    );
  };

  return <>{deployRoutes()}</>;
};

export default Routes;
