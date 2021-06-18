import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
`

const Img = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 100%;
`


const VerConocenos = () => {
  return (
    <Container className="container-md pt-4 bg-white">

      <h2>Equipo de desarrollo</h2>
      <hr />

      <div className="col-md-12 mt-5 text-center d-flex flex-wrap g-3" data-aos="fade-right">
        <div>
          <Img src="https://media-exp3.licdn.com/dms/image/C4E03AQEVAi3CxxMTPQ/profile-displayphoto-shrink_200_200/0/1621398283381?e=1628726400&v=beta&t=FzVEeF_syvx8SEM6k_u4NZg_VfRB5Ft0LqzEUGjvlEw" alt='Yadier foto' />
          <h2>Yadier Caicedo</h2>
          <p>Desarrollador Front-End</p>
          <p><a className="btn btn-warning" href="https://www.linkedin.com/in/yadier-caicedo-150a30180/">Mas Informacion &raquo;</a></p>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <p style={{ fontSize: '2vw', color: '#ad38fb' }}>Me gusta viajar, compartir con mi familia, y codear!</p>
        </div>
      </div>

      <div className="col-md-12 d-flex flex-row-reverse flex-wrap g-3">
        <div>
          <div className=" mt-5 text-center" data-aos="fade-left">
            <Img src="https://media-exp3.licdn.com/dms/image/C5603AQEaZ0BUbbPXMw/profile-displayphoto-shrink_100_100/0/1574382153077?e=1629331200&v=beta&t=zp2IMWbEAPud_nzEr6Nti5hOTouFenVsGEwt6psRRZo" alt='Jhosep foto' />
            <h2>Jhosep Ropero</h2>
            <p>Desarrollador Front-End</p>
            <p><a className="btn btn-warning" href="https://www.linkedin.com/in/jhosep-ropero/">Mas Informacion &raquo;</a></p>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <p style={{ fontSize: '2vw', color: '#ad38fb' }}>Me apaciona la tecnologia, jugar al baloncesto y descubrir nuevos lugares!</p>
        </div>
      </div>


      <div className="col-md-12 mt-5 text-center d-flex flex-wrap g-3" data-aos="fade-right">
        <div>
          <Img src="https://i.imgur.com/jASSpR8.jpg" alt='Luis foto' />
          <h2>Luis Chavéz</h2>
          <p>Desarrollador Front-End</p>
          <p><a className="btn btn-warning" href="https://www.linkedin.com/in/luischdu/">Mas Informacion &raquo;</a></p>
        </div>


          <div className="col-lg-10">
            <p className="lead" style={{ fontSize: '2vw', color: '#ad38fb' }}>Me gusta la sandia, conocer nuevas personas y aprender cosas nuevas...</p>
          </div>
       

      </div>

    </Container>
  );
};

export default VerConocenos;
