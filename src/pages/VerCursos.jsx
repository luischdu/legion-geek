import React from "react";

const VerCursos = () => {
  return (
    <div className="text-center"> 
      <h1 className="text-start">Cursos</h1>
      <div className="mb-4">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          checked
        />
        <label className="btn btn-outline-primary" for="btnradio1">
          Cursos propios
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" for="btnradio2">
          Cursos externos
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" for="btnradio3">
          Becas
        </label>
      </div>
      </div>
      <div>
      <div className="input-group mb-3">
        <label className="input-group-text" for="inputGroupSelect01">
          Categorias
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">Front End</option>
          <option value="2">Back End</option>
          <option value="3">Data base</option>
        </select>
      </div>
      <hr></hr>
      </div>
      <div>
          
      </div>
    </div>
  );
};

export default VerCursos;
