import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword } from "firebase/auth";
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

const Signup = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    cPassword: "",
  });

  const signUpOnClick = async (e) => {
    e.preventDefault();
    console.log("signUpOnClick");
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpInfo.email,
        signUpInfo.password
      );
      console.log("user email => ", auth.currentUser.email);
      console.log("user after signup -->", user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={signUpOnClick}>
        <input
          type="text"
          placeholder="Email"
          value={signUpInfo.email}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={signUpInfo.password}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, password: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={signUpInfo.cPassword}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, cPassword: e.target.value })
          }
        />

        <button type="submit">Signup</button>
      </Form>
    </Container>
  );
};

export default Signup;
