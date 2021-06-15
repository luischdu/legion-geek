import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { firebase } from "../firebase/firebase-config";
import { login } from "../Redux/actions/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserCog} from "@fortawesome/free-solid-svg-icons";

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
    <>
      <nav className="navbar navbar-expand-lg navbar-light p-0">
        <div className="container-fluid container-nav">
          {/*  <Link className="navbar-brand" href="#">Comunidad/Geek</Link> */}
          <img src="https://i.ibb.co/cTghMbt/logo.png" width="100" alt="" />
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-3" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="navbar-brand nav-link p" to="/" >Inicio</Link>
              </li>

              <li className="nav-item">
                <Link className="navbar-brand nav-link" to="/cursos">Tutoriales</Link>
                {/*    <Link className="nav-link" href="#">INICIO</Link> */}
              </li>
              <li className="nav-item">
                <Link className="navbar-brand nav-link" to="/articulos" >Articulos</Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand nav-link" to="/conocenos" >Conocenos</Link>
              </li>
            </ul>
            <div style={{fontSize:'30px'}} className="m-2">
            {isLoggedIn ? (
                <Link
                className="fs-5"
                to="/perfil"
                tabIndex="-1"
                aria-disabled="true" 

                >Perfil&nbsp; 
                 <FontAwesomeIcon icon={faUserCog} className="fs-4" />  
    
              </Link>
            ) : ( 
               <Link
                 className="nav-link active fs-5"
                  to="/login"
                  tabIndex="-1"
                aria-disabled="true"
                  > 
                 Cuenta&nbsp; 
                 <FontAwesomeIcon icon={faUserCircle} className="fs-4"/>
               
              </Link>)
               }

            </div>
            <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-secondary" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              </form>

          </div>
        </div>
      </nav>
    
    </>


  );
};

export default Header;
