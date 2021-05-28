import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
  max-width: 500px;
  margin: 0 auto;
`


const VerLogin = () => {
  return (
    <Main className="form-signin d-flex justify-content-center">
      <form className="text-center">
        <img
          className="mb-4"
          src="https://i.imgur.com/W5xsOak.png"
          alt=""
          width="400"
          height="200"
        />
        <h1 className="h3 mb-3 fw-normal">Log in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Correo electronico</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Contraseña</label>
        </div>

        <div className="checkbox  mt-3 mb-3">
          <Link to="/registro">No tengo cuanta</Link>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Log in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </Main>
  );
};

export default VerLogin;
