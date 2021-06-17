import React from "react";
import InstagramEmbed from 'react-instagram-embed';

const VerCursos = () => {


  return (
    <div className="text-center">
      <h1 className="text-start">Tutoriales</h1>
      <div className="d-flex gap-2">

        <div class="card" style={{width: "18rem"}}>
          <video src="https://res.cloudinary.com/romajs/video/upload/v1623900953/C%C3%B3mo_hacer_un_derecho_de_peticion_j0vprv.mp4"></video>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

      </div>
    </div >
  );
};

export default VerCursos;
