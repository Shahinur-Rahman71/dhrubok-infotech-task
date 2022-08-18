import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FormPage from "./form";
import ListPage from "./list";
import CounterPage from "./counter";
import HomePage from "./home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/react/form">
          <FormPage />
        </Route>
        <Route path="/react/counter">
          <CounterPage />
        </Route>
        <Route path="/react/list">
          <ListPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
