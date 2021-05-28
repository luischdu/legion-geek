import React from "react";
import VerCardNoticias from "../pages/VerCardNoticias";
import {db} from '../dbPruebas'
import VerDestacados from "../pages/VerDestacados";



const CardNoticias = () => {
  return (
    <div>
      <VerDestacados/>
      {db.map((item) => (
        <VerCardNoticias item={item} />
      ))}
    </div>
  );
};

export default CardNoticias;
