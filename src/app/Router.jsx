import React from "react";
import { Route, Switch } from "react-router-dom";

const recordRoutes = () => (
  <Switch>
    <Route exact path="/dashboard" component={Records} />
  </Switch>
);
