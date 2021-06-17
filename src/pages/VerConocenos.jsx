import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
`

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
`


const VerConocenos = () => {
  return (
    <Container className="container-md pt-4 bg-white">
    <div className="row text-center ">
      <div className="col-md-4 mt-5 ">
        <Img src="https://media-exp3.licdn.com/dms/image/C4E03AQEVAi3CxxMTPQ/profile-displayphoto-shrink_200_200/0/1621398283381?e=1628726400&v=beta&t=FzVEeF_syvx8SEM6k_u4NZg_VfRB5Ft0LqzEUGjvlEw" alt='Yadier foto'/>
        <h2>Yadier Caicedo</h2>
        <p>Desarrollador Front-End</p>
        <p><a className="btn btn-warning" href="#">Mas Informacion &raquo;</a></p>
      </div>
      <div className="col-md-4 mt-5">
        <Img src="https://media-exp3.licdn.com/dms/image/C5603AQEaZ0BUbbPXMw/profile-displayphoto-shrink_100_100/0/1574382153077?e=1629331200&v=beta&t=zp2IMWbEAPud_nzEr6Nti5hOTouFenVsGEwt6psRRZo" alt='Jhosep foto'/>
        <h2>Jhosep Ropero</h2>
        <p>Desarrollador Front-End</p>
        <p><a className="btn btn-warning" href="#">Mas Informacion &raquo;</a></p>
      </div>
      <div className="col-md-4 mt-5">
        <Img src="https://media-exp3.licdn.com/dms/image/C4D03AQFoK79E-LLo2g/profile-displayphoto-shrink_200_200/0/1596340619419?e=1628726400&v=beta&t=lcg-vfWugid3x5VC6liiB6wQp7YXlVzkxjJHHSlBVYE" alt='Luis foto' />
        <h2>Luis Chavéz</h2>
        <p>Desarrollador Front-End</p>
        <p><a className="btn btn-warning" href="https://www.linkedin.com/in/luischdu/">Mas Informacion &raquo;</a></p>
      </div>
    </div>
    </Container>
  );
};

export default VerConocenos;
