import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cursos from "../components/Cursos";
import Empleate from "../components/Empleate";
import EmpleoId from "../components/EmpleoId";
import Login from "../components/Login";
import Registro from "../components/Registro";
import App from "../container/App";
import Header from "../pages/Header";
import VerConocenos from "../pages/VerConocenos";


const AppRoute = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <div className='container'>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/empleos" component={Empleate} />
        <Route exact path="/empleos/:id" component={EmpleoId} />
        <Route exact path="/cursos" component={Cursos} />
        <Route exact path="/conocenos" component={VerConocenos} />
        </div>
      </Switch>
    </Router>
  );
};

export default AppRoute;
