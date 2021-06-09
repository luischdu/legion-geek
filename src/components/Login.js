import React from "react";
import { useDispatch, useSelector } from "react-redux";

import VerLogin from "../pages/VerLogin";
import { useForm } from "../Hooks/useForm";
import {
  startLoginEmailPassword,
  startGoogleLogin,
  startFacebookLogin
} from "../Redux/actions/Auth";
import styled from "styled-components";

const Container = styled.div`
  
 
`


const Login = () => {
  const dispatch = useDispatch();

  const {loading} = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogle = () => {
    dispatch(startGoogleLogin());
  };
  const handleFacebook = () => {
    dispatch(startFacebookLogin());
  };

  return (
    <Container>
      <VerLogin
        email={email}
        password={password}
        handleInputChange={handleInputChange}
        handleLogin={handleLogin}
        handleGoogle={handleGoogle}
        loading={loading}
        handleFacebook={handleFacebook}
      />
    </Container>
  );
};

export default Login;
