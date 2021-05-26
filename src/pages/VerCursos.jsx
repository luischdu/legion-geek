import React from "react";

const VerCursos = () => {
  return (
    <div>
      <h1>Cursos</h1>
      <div>
      <div
        class="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          checked
        />
        <label class="btn btn-outline-primary" for="btnradio1">
          Cursos propios
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio2">
          Cursos externos
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio3"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio3">
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
