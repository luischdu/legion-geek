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
        {
            db.map((item)=>(
                <VerCardEmpleo item={item}/>
            ))
        }
      </div>
    </div>
  );
};

export default Empleate;
