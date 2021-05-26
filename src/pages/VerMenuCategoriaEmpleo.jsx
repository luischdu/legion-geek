import React from "react";

const VerMenuCategoriaEmpleo = () => {
  return (
    <div className=''>
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
    </div>
  );
};

export default VerMenuCategoriaEmpleo;
