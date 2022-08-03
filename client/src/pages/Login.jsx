import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

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
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const loginOnClick = async (e) => {
    e.preventDefault();
    console.log("loginOnClick");
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginInfo.email,
        loginInfo.password
      );
      console.log("user after signup -->", user);
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
    </Container>
  );
};

export default Login;