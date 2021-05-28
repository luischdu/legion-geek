import React from "react";
import { Link } from "react-router-dom";

const VerRegister = () => {
  return (
    <div>
      <main className="form-signin">
        <form className="text-center">
          <img
            className="mb-4"
            src="https://i.imgur.com/W5xsOak.png"
            alt=""
            width="400"
            height="200"
          />
          <h1 className="h3 mb-3 fw-normal">Registro de usuario</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Nombre y Apellido"
            />
            <label for="floatingInput">Nombre completo</label>
          </div>
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
              placeholder="Contraseña"
            />
            <label for="floatingPassword">Contraseña</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Verificar contraseña"
            />
            <label for="floatingPassword">Verifica la Contraseña</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
            Registrarse
          </button>
          <div className="checkbox mt-3 mb-3">
            <Link to="/login">Ya tengo una cuenta</Link>
          </div>
          <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
        </form>
      </main>
    </div>
  );
};

export default VerRegister;
