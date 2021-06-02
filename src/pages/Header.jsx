import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { firebase } from "../firebase/firebase-config";
import { login } from "../Redux/actions/Auth";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [dispatch]);

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://i.imgur.com/W5xsOak.png"
              alt=""
              width="120"
              height="60"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/conocenos">
                  Conocenos
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle active"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cursos
                </Link>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/cursos">
                      Cursos internos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cursos">
                      Cursos externos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cursos">
                      Becas
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/empleos">
                  Empleos
                </Link>
              </li>

              {isLoggedIn ? (
                <li className="nav-item active">
                  <Link
                    className="nav-link active"
                    to="/perfil"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    perfil
                  </Link>
                </li>
              ) : (
                <li className="nav-item active">
                  <Link
                    className="nav-link active"
                    to="/login"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
