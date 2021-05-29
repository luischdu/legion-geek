import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CardNoticias from "../components/CardNoticias";
import Cursos from "../components/Cursos";
import Empleate from "../components/Empleate";
import EmpleoId from "../components/EmpleoId";
import Login from "../components/Login";
import Registro from "../components/Registro";
import Header from "../pages/Header";
import VerConocenos from "../pages/VerConocenos";

const AppRoute = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CardNoticias} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/empleos" component={Empleate} />
        <Route exact path="/empleos/:id" component={EmpleoId} />
        <Route exact path="/cursos" component={Cursos} />
        <Route exact path="/conocenos" component={VerConocenos} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
