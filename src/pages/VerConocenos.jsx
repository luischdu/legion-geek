import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  height: 100vh;
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
        <Img src="https://media-exp3.licdn.com/dms/image/C4E03AQEVAi3CxxMTPQ/profile-displayphoto-shrink_200_200/0/1621398283381?e=1628726400&v=beta&t=FzVEeF_syvx8SEM6k_u4NZg_VfRB5Ft0LqzEUGjvlEw"/>
        <h2>Yadier Caicedo</h2>
        <p>Desarrollador Front-End</p>
        <p><a className="btn btn-warning" href="#">Mas Informacion &raquo;</a></p>
      </div>
      <div className="col-md-4 mt-5">
        <Img src="https://media-exp3.licdn.com/dms/image/D5635AQG_Ns2n5ckrNw/profile-framedphoto-shrink_200_200/0/1622944233430?e=1623031200&v=beta&t=kFvYh1jkD8l-RM-PXvmDUuzP1zDJQAYn94yZuHzCl_4"/>
        <h2>Jhosep Ropero</h2>
        <p>Desarrollador Front-End</p>
        <p><a className="btn btn-warning" href="#">Mas Informacion &raquo;</a></p>
      </div>
      <div className="col-md-4 mt-5">
        <Img src="https://media-exp3.licdn.com/dms/image/C4D03AQFoK79E-LLo2g/profile-displayphoto-shrink_200_200/0/1596340619419?e=1628726400&v=beta&t=lcg-vfWugid3x5VC6liiB6wQp7YXlVzkxjJHHSlBVYE" />
        <h2>Luis Chavéz</h2>
        <p>Desarrollador Front-End</p>
        <p><a className="btn btn-warning" href="https://www.linkedin.com/in/luischdu/">Mas Informacion &raquo;</a></p>
      </div>
    </div>
    </Container>
  );
};

export default VerConocenos;
