import React from "react";
import VerCardNoticias from "../pages/VerCardNoticias";
import {db} from '../dbPruebas'
import VerDestacados from "../pages/VerDestacados";
import styled from "styled-components";

const Container = styled.div`
  background: white;
  heigth: 100vh;

`


const CardNoticias = () => {
  return (
    <>
    <VerDestacados/>
    <Container className="container-md rounded mt-5 pt-2 pb-2">
      {db.map((item) => (
        <VerCardNoticias key={item.id} item={item} />
      ))}
    </Container>
    </>
  );
};

export default CardNoticias;
