import React from "react";
import VerCardEmpleo from "../pages/VerCardEmpleo";
import Buscador from "./Buscador";
import MenuCategoriaEmpleo from "./MenuCategoriaEmpleo";
import {db} from '../dbPruebas'
const Empleate = () => {
  return (
    <div>
      <h1>Empleos</h1>
      <Buscador />
      <div>
        <MenuCategoriaEmpleo />
        <hr></hr>
        <div className="row justify-content-start">
        {
            db.map((item)=>(
              <div className="col-md-4">
                <VerCardEmpleo item={item}/>
                </div>
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default Empleate;
