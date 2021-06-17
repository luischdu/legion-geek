import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { VerHome } from '../pages/VerHome'



export const Home = () => {
    return (
        <>
            <VerHome />

            <div className="container mt-5">
      
            <div className="row d-flex justify-content-around" >
            <div className="col-xl-4 py-3">
          <div className="card" style={{ width: "23rem" }}>
            <video src="https://res.cloudinary.com/romajs/video/upload/v1623900975/Como_Instalar_una_Aplicacion_Movil_va9iex.mp4" controls />
            <div className="card-body">
              <h3 className="card-title text-end">
                <a href="https://res.cloudinary.com/romajs/video/upload/fl_attachment/v1623900975/Como_Instalar_una_Aplicacion_Movil_va9iex.mp4">
                  <FontAwesomeIcon style={{ color: "#153E90" }} icon={faArrowAltCircleDown} />
                </a>
                <FontAwesomeIcon className="ms-2" style={{ color: "#FF5D6C" }} icon={faHeart} /></h3>
              <p className="card-text text-start">Instala las aplicaciones que necesites sin ayuda de nadie.</p>
            </div>
            <div className="card-footer">
              <div className="row align-content-center">
                <div className="col-10">
                  <h6 className="card-title text-center pt-2" style={{ color: "black" }}> Siguenos en nuestras redes sociales!</h6>
                </div>
                <div className="col text-center">
                  <a href="https://www.instagram.com/legiongeek/" target="_blank">
                    <FontAwesomeIcon className="fs-1" style={{ color: "#EF4F4F" }} icon={faInstagramSquare} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 py-3">
          <div className="card" style={{ width: "23rem" }}>
            <video src="https://res.cloudinary.com/romajs/video/upload/v1623903702/joined_video_4693ec08cb1848e5bdaebda1c114f6aa_jalaxb.mov" controls />
            <div className="card-body">
              <div className="row"><h3 className="card-title text-end">
                <a href="https://res.cloudinary.com/romajs/video/upload/fl_attachment/v1623903702/joined_video_4693ec08cb1848e5bdaebda1c114f6aa_jalaxb.mov">
                  <FontAwesomeIcon style={{ color: "#153E90" }} icon={faArrowAltCircleDown} />
                </a>
                <FontAwesomeIcon className="ms-2" style={{ color: "#FF5D6C" }} icon={faHeart} /></h3></div>
              <p className="card-text text-start">Envía correos como todo un genio! Es facil y muy util.</p>
            </div>
            <div className="card-footer">
              <div className="row align-content-center">
                <div className="col-10">
                  <h6 className="card-title text-center pt-2" style={{ color: "black" }}> Siguenos en nuestras redes sociales!</h6>
                </div>
                <div className="col">
                  <a href="https://www.instagram.com/legiongeek/" target="_blank">
                    <FontAwesomeIcon className="fs-1" style={{ color: "#EF4F4F" }} icon={faInstagramSquare} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 py-3">
          <div className="card " style={{ width: "23rem" }}>
            <video src="https://res.cloudinary.com/romajs/video/upload/v1623900953/C%C3%B3mo_hacer_un_derecho_de_peticion_j0vprv.mp4" controls />
            <div className="card-body">
              <h3 className="card-title text-end">
                <a href="https://res.cloudinary.com/romajs/video/upload/fl_attachment/v1623900953/C%C3%B3mo_hacer_un_derecho_de_peticion_j0vprv.mp4">
                  <FontAwesomeIcon style={{ color: "#153E90" }} icon={faArrowAltCircleDown} />
                </a>
                <FontAwesomeIcon className="ms-2" style={{ color: "#FF5D6C" }} icon={faHeart} /></h3>
              <p className="card-text text-start">Redacta facilmente un derecho de peticion por ti mismo en pocos minutos.</p>
            </div>
            <div className="card-footer">
              <div className="row align-content-center">
                <div className="col-10">
                  <h6 className="card-title text-center pt-2" style={{ color: "black" }}> Siguenos en nuestras redes sociales!</h6>
                </div>
                <div className="col">
                  <a href="https://www.instagram.com/legiongeek/" target="_blank">
                    <FontAwesomeIcon className="fs-1" style={{ color: "#EF4F4F" }} icon={faInstagramSquare} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
{/*                 {db.map((item) => (
                <div className="card mt-2 p-0 " style={{width: '20rem'}}>
                    <img src={item.img}  className="img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                       
                        <a href="#" className="btn btn-primary">Leer mas..</a>
                    </div>
                </div> 

                ))} */}
            </div>
            </div>

            <div>
             
            </div>
        </>
    )
}