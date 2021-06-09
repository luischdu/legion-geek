import React from "react";
import VerCardNoticias from "../pages/VerCardNoticias";
import {db} from '../dbPruebas'
import VerDestacados from "../pages/VerDestacados";



const CardNoticias = () => {
  return (
    <div>
      <VerDestacados/>
      {db.map((item) => (
        <VerCardNoticias key={item.id} item={item} />
      ))}

    <div>
 
    </div>
    </div>
  );
};

export default CardNoticias;
