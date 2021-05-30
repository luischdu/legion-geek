import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Main = styled.main`
  max-width: 500px;
  margin: 0 auto;
`;

const VerLogin = ({
  email,
  password,
  handleInputChange,
  handleLogin,
  handleGoogle,
  loading,
}) => {
  return (
    <Main className="form-signin d-flex justify-content-center">
      <form className="text-center" onSubmit={handleLogin}>
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
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <label htmlFor="floatingInput">Correo electronico</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          disabled={loading}
        >
          Iniciar sesión
        </button>
        <div
          className="w-100 btn btn-lg  btn-outline-info mt-3"
          onClick={handleGoogle}
          disabled={loading}
        >
          <FontAwesomeIcon icon={faGoogle} /> Iniciar sesión con google
        </div>

        <div className="checkbox  mt-3 mb-3">
          <Link to="/registro">No tengo cuenta</Link>
        </div>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </Main>
  );
};

export default VerLogin;
