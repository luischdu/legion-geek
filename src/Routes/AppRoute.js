import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { firebase } from "../firebase/firebase-config";
import { login } from "../Redux/actions/Auth";
import { useDispatch } from "react-redux";

import Header from "../pages/Header";

import CardNoticias from "../components/CardNoticias";
import Cursos from "../components/Cursos";
import Empleate from "../components/Empleate";
import EmpleoId from "../components/EmpleoId";
import Login from "../components/Login";
import Registro from "../components/Registro";
import VerConocenos from "../pages/VerConocenos";
import PerfilUsuario from "../components/PerfilUsuario";
import Noticias from '../pages/Noticias'

import PublicRouter from "./PublicRouter";
import PriveteRouter from "./PrivateRouter";
import Article from "../pages/Article";

const AppRoute = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Noticias} />
        <PublicRouter
          exact
          path="/login"
          component={Login}
          isAuthenticated={isLoggedIn}
        />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/empleos" component={Empleate} />
        <Route exact path="/empleos/:id" component={EmpleoId} />
        <Route exact path="/cursos" component={Cursos} />
        <Route exact path="/conocenos" component={VerConocenos} />
        <Route exact path="/article/:id" component={Article} />

        <PriveteRouter
          exact
          path="/perfil"
          isAuthenticated={isLoggedIn}
          component={PerfilUsuario}
        />
        
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRoute;
