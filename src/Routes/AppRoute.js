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
import Noticias from "../pages/Noticias";

import PublicRouter from "./PublicRouter";
import PriveteRouter from "./PrivateRouter";
import VerFooter from "../pages/verFooter";
import Article from "../pages/Article";
import Editor from "../pages/Editor";
import { Home } from "../components/Home";

const AppRoute = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
    
     <div style={{minHeight:'50vh', marginTop:'60px'}}>

    
      <Switch>
        <Route exact path="/" component={Home} />
     {/*    <Route exact path="/" component={Noticias} /> */}
        <PublicRouter
          exact
          path="/login"
          component={Login}
          isAuthenticated={isLoggedIn}
        />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/articulos" component={Noticias} />
        <Route exact path="/article/:id" component={Article} />
        <Route exact path="/cursos" component={Cursos} />
        <Route exact path="/conocenos" component={VerConocenos} />
        <Route exact path="/editor" component={Editor} />

        <PriveteRouter
          exact
          path="/perfil"
          isAuthenticated={isLoggedIn}
          component={PerfilUsuario}
        />

        <Redirect to="/" />
      </Switch>
     
      </div>
      <VerFooter/>
  
    </Router>
  );
};

export default AppRoute;
