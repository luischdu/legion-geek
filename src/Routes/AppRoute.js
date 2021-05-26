import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import App from "../container/App";
import Header from "../pages/Header";

const AppRoute = () => {
  return (
    <Router>
        <Header/>
      <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
