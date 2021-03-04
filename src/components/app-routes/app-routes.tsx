import React from "react";
import { privateRoutes, publicRoutes } from "./routes";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../../utils/constance";
import { Route, Switch, Redirect } from "react-router-dom";

const AppRoutes = () => {
  const user = false;
  return (
    <>
      {user ? (
        <Switch>
          {privateRoutes.map(({ path, Component }) => (
            <Route path={path} component={Component} exact={true} key={path} />
          ))}
          <Redirect to={MAIN_ROUTE} />
        </Switch>
      ) : (
        <Switch>
          {publicRoutes.map(({ path, Component }) => (
            <Route path={path} component={Component} exact={true} key={path} />
          ))}
          <Redirect to={LOGIN_ROUTE} />
        </Switch>
      )}
    </>
  );
};

export default AppRoutes;
