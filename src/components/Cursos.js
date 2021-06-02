import React from "react";
import { db } from "../dbPruebas";
import VerCardCurso from "../pages/VerCardCurso";
import VerCursos from "../pages/VerCursos";

const Cursos = () => {
  return (
    <div>
      <VerCursos />
      <div className="row justify-content-start">
        {db.map((item) => (
          <div className="col-md-4">
            <VerCardCurso key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cursos;
