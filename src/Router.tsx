import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from "~/const/route";
import { SampleScreen } from "~/screens/sample";

const Router: React.VFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.ROOT} component={SampleScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
