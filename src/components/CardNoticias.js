import React from "react";
import VerCardNoticias from "../pages/VerCardNoticias";
import {db} from '../dbPruebas'



const CardNoticias = () => {
  return (
    <div>
      {db.map((item) => (
        <VerCardNoticias item={item} />
      ))}
    </div>
  );
};

export default CardNoticias;
