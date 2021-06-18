import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  padding: 10% 0 10% 0;
`

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
`


const VerConocenos = () => {
  return (
    <Container className="container-md pt-4 bg-white">
      <h2>Equipo de desarrollo</h2>
      <hr />
    <div className="row text-center  mt-5">
      <div className="col-md-4 mt-5 ">
        <Img src="https://media-exp3.licdn.com/dms/image/C4E03AQEVAi3CxxMTPQ/profile-displayphoto-shrink_200_200/0/1621398283381?e=1628726400&v=beta&t=FzVEeF_syvx8SEM6k_u4NZg_VfRB5Ft0LqzEUGjvlEw" alt='Yadier foto'/>
        <h2>Yadier Caicedo</h2>
        <h5>Desarrollador Front-End</h5>
        <p>Como persona organizada y con una gran motivación, soy capaz de adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto.</p>
        <p><a className="btn btn-warning" href="https://www.linkedin.com/in/yadier-caicedo-150a30180/">Mas Informacion &raquo;</a></p>
      </div>
      <div className="col-md-4 mt-5">
        <Img src="https://media-exp3.licdn.com/dms/image/C5603AQEaZ0BUbbPXMw/profile-displayphoto-shrink_100_100/0/1574382153077?e=1629331200&v=beta&t=zp2IMWbEAPud_nzEr6Nti5hOTouFenVsGEwt6psRRZo" alt='Jhosep foto'/>
        <h2>Jhosep Ropero</h2>
        <h5>Scrum Master</h5>
        <p>Me gusta enfrentar nuevos retos y dar lo mejor de mi para cumplir metas, Mis pasatiempos favoritos son ver peliculas, anime, escuchar musica y el desarrollo web. </p>
        <p><a className="btn btn-warning" href="https://www.linkedin.com/in/jhosep-ropero/">Mas Informacion &raquo;</a></p>
      </div>
      <div className="col-md-4 mt-5">
        <Img src="https://media-exp3.licdn.com/dms/image/C4D03AQFoK79E-LLo2g/profile-displayphoto-shrink_200_200/0/1596340619419?e=1628726400&v=beta&t=lcg-vfWugid3x5VC6liiB6wQp7YXlVzkxjJHHSlBVYE" alt='Luis foto' />
        <h2>Luis Chavéz</h2>
        <h5>Product Owner</h5>
        <p>Me gusta encontrar la manera de hacer las cosas lo más practicas posibles, es por ello que amo la tecnología porque no solo facilita nuestra vida, la transforma! 
          Me gusta leer, soy fan de Harry Potter y me encanta las frutas!</p>
        <p><a className="btn btn-warning" href="https://www.linkedin.com/in/luischdu/">Mas Informacion &raquo;</a></p>
      </div>
    </div>
    </Container>
  );
};

export default VerConocenos;
