import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 50px 100px;
  display: grid;
  place-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 200px;
`;

const Login = () => {
  let navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmail, setSignInWithEmail] = useState("");

  const loginOnClick = async (e) => {
    e.preventDefault();
    console.log("loginOnClick");
    if (!loginInfo.email || !loginInfo.password) {
      alert("please fill all details");
      return;
    }
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginInfo.email,
        loginInfo.password
      );
      navigate("/home");
      localStorage.setItem("Auth Token", user);
      setLoginInfo({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const sendLinkForLogin = async (e) => {
    e.preventDefault();
    const actionCodeSettings = {
      url: `http://localhost:3000/login`,
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, signInWithEmail, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", signInWithEmail);
      console.log("sendLinkForLogin", signInWithEmail);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={loginOnClick}>
        <input
          type="text"
          placeholder="Email"
          value={loginInfo.email}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={loginInfo.password}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
        />

        <button type="submit">Login</button>
      </Form>
      <br />
      <div>
        <h3>Or</h3>
        <h5>Sign in with email link</h5>
        <form onSubmit={sendLinkForLogin}>
          <input
            type="text"
            placeholder="example@email.com"
            value={signInWithEmail}
            onChange={(e) => setSignInWithEmail(e.target.value)}
          />
          <button type="submit">send link</button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
