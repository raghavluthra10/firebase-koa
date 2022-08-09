import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword } from "firebase/auth";
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

const Signup = () => {
  let navigate = useNavigate();
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    cPassword: "",
  });

  const signUpOnClick = async (e) => {
    e.preventDefault();
    console.log("signUpOnClick");
    if (!signUpInfo.email || !signUpInfo.password || !signUpInfo.cPassword) {
      alert("please fill in all details");

      return;
    }
    if (signUpInfo.password !== signUpInfo.cPassword) {
      alert("Your passwords dont match");
      return;
    }
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpInfo.email,
        signUpInfo.password
      );
      navigate("/home");
      localStorage.setItem("Auth Token", user);
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
